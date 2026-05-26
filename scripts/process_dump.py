import json
import re
import shutil
import sys
from pathlib import Path

# Try importing dependencies and auto-install if missing
try:
    from pdfminer.high_level import extract_text
except ImportError:
    print("pdfminer.six not installed, attempting to install...")
    import subprocess

    subprocess.check_call([sys.executable, "-m", "pip", "install", "pdfminer.six"])
    from pdfminer.high_level import extract_text

try:
    import docx2txt
except ImportError:
    print("docx2txt not installed, attempting to install...")
    import subprocess

    subprocess.check_call([sys.executable, "-m", "pip", "install", "docx2txt"])
    import docx2txt

# Paths
BASE_DIR = Path(__file__).resolve().parent.parent
DUMP_DIR = BASE_DIR / "source-material" / "dump"
EXTRACTED_DIR = BASE_DIR / "source-material" / "dump-extracted"
PUBLIC_DUMP_DIR = BASE_DIR / "public" / "dump"
DATA_INDEX_FILE = BASE_DIR / "data" / "dump-index.json"

SUBJECT_ALIASES = {
    "awd": "advanced-web-design",
    "advanced-web-design": "advanced-web-design",
    "java": "java-programming",
    "java-programming": "java-programming",
    "stqa": "software-testing-quality-assurance",
    "software-testing-quality-assurance": "software-testing-quality-assurance",
    "rm": "research-methodology",
    "research-methodology": "research-methodology",
    "ml": "machine-learning-techniques",
    "machine-learning-techniques": "machine-learning-techniques",
    "ot": "optimization-techniques",
    "optimization-techniques": "optimization-techniques",
    "pbi": "power-bi",
    "power-bi": "power-bi",
    "js": "javascript",
    "javascript": "javascript",
    "cyber": "cyber-security",
    "cyber-security": "cyber-security",
    "info-security": "information-security",
    "information-security": "information-security",
    "information security": "information-security",
    "info": "information-security",
    "ecc": "eccs",
    "eccs": "eccs",
    "ccms": "ccms",
}

CATEGORY_PATTERNS = [
    ("unit-notes", ("unit", "chapter", "notes")),
    ("question-papers", ("question bank", "question paper", "paper", "pyq", "qb")),
    ("templates", ("sample", "manual", "mannual", "test case", "test plan", "photo")),
    ("references", ("research paper", "reference", "research", "ethics", "anova", "hypothesis", "distribution")),
    ("assignments", ("assignment", "assignmnet", "assignmnets")),
    ("case-studies", ("case study",)),
]

CATEGORY_ORDER = {
    "unit-notes": 0,
    "question-papers": 1,
    "assignments": 2,
    "case-studies": 3,
    "templates": 4,
    "references": 5,
    "other": 6,
}


def format_size(bytes_size):
    for unit in ["B", "KB", "MB", "GB"]:
        if bytes_size < 1024.0:
            return f"{bytes_size:.1f} {unit}"
        bytes_size /= 1024.0
    return f"{bytes_size:.1f} TB"


def slugify(value):
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-") or "file"


def normalize_subject_id(path_parts):
    for part in reversed(path_parts):
        subject_id = SUBJECT_ALIASES.get(slugify(part))
        if subject_id:
            return subject_id
    return None


def classify_file(filename):
    lowered = filename.lower()
    for category, keywords in CATEGORY_PATTERNS:
        if any(keyword in lowered for keyword in keywords):
            return category
    return "other"


def extract_file_text(file_path):
    ext = file_path.suffix.lower().strip()
    try:
        if ext == ".pdf":
            return extract_text(str(file_path))
        if ext == ".docx":
            return docx2txt.process(str(file_path))
        if ext == ".txt":
            return file_path.read_text(encoding="utf-8", errors="ignore")
    except Exception as exc:
        print(f"    [Error] Failed to extract text: {exc}")
        return ""

    if ext == ".doc":
        print("    [Warning] Legacy Word (.doc) format detected. Skipping text extraction.")
    else:
        print(f"    [Info] Format '{ext}' is not text-extractable. File will only be copied.")
    return ""


def build_doc_metadata(subject_id, file_path, relative_source_path):
    filename = file_path.name
    ext = file_path.suffix.lower().strip()
    rel_path = relative_source_path.as_posix()
    category = classify_file(filename)
    doc_id = slugify(relative_source_path.with_suffix("").as_posix())

    return {
        "id": doc_id,
        "name": filename,
        "path": f"dump/{subject_id}/{rel_path}",
        "relativePath": rel_path,
        "type": ext[1:] if ext else "unknown",
        "size": format_size(file_path.stat().st_size),
        "category": category,
        "sourceFolder": relative_source_path.parent.as_posix() or ".",
        "addedAt": file_path.stat().st_mtime,
    }


def process_dump():
    metadata = {}

    DUMP_DIR.mkdir(parents=True, exist_ok=True)
    EXTRACTED_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DUMP_DIR.mkdir(parents=True, exist_ok=True)

    for item in DUMP_DIR.iterdir():
        if item.is_file():
            print(
                f"[Warning] File '{item.name}' found directly in dump/ folder. "
                "Please place files inside subject-specific subfolders."
            )

    for file_path in DUMP_DIR.rglob("*"):
        if file_path.is_dir():
            continue
        if file_path.name.startswith(".") or file_path.name.startswith("~$"):
            continue

        relative_dump_path = file_path.relative_to(DUMP_DIR)
        subject_id = normalize_subject_id(relative_dump_path.parts[:-1])

        if not subject_id:
            print(f"[Warning] Skipping unmapped file: {relative_dump_path.as_posix()}")
            continue

        rel_after_subject = Path(relative_dump_path.name)
        for index, part in enumerate(relative_dump_path.parts[:-1]):
            if SUBJECT_ALIASES.get(slugify(part)) == subject_id:
                rel_after_subject = Path(*relative_dump_path.parts[index + 1 :])
                break

        print(f"Processing {relative_dump_path.as_posix()} -> {subject_id}")

        extracted_text = extract_file_text(file_path)
        if extracted_text.strip():
            txt_relative_path = rel_after_subject.with_suffix(".txt")
            txt_out_path = EXTRACTED_DIR / subject_id / txt_relative_path
            txt_out_path.parent.mkdir(parents=True, exist_ok=True)
            txt_out_path.write_text(extracted_text, encoding="utf-8")
            print("    Text extracted successfully.")

        dest_path = PUBLIC_DUMP_DIR / subject_id / rel_after_subject
        dest_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(file_path, dest_path)

        metadata.setdefault(subject_id, []).append(
            build_doc_metadata(subject_id, file_path, rel_after_subject)
        )

    for subject_id, files in metadata.items():
        files.sort(
            key=lambda item: (
                CATEGORY_ORDER.get(item["category"], 99),
                item["sourceFolder"],
                item["name"].lower(),
            )
        )

    with DATA_INDEX_FILE.open("w", encoding="utf-8") as file_handle:
        json.dump(metadata, file_handle, indent=2)

    print(f"\nMetadata generated successfully at {DATA_INDEX_FILE}")


if __name__ == "__main__":
    process_dump()
