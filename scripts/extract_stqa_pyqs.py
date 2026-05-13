import os, sys, json
from pathlib import Path

try:
    from pdfminer.high_level import extract_text
except ImportError:
    print('pdfminer.six not installed, attempting to install...')
    import subprocess, sys
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'pdfminer.six'])
    from pdfminer.high_level import extract_text

subjects = [
    'software-testing-quality-assurance',
    'research-methodology'
]

output_dir = Path(r'd:/Workspace/College/2am-notes/tmp_pyq_extracted')
output_dir.mkdir(parents=True, exist_ok=True)

results = {}
for subject in subjects:
    base_dir = Path(rf'd:/Workspace/College/2am-notes/source-material/{subject}/pyqs')
    if not base_dir.exists(): continue
    
    for pdf_path in base_dir.glob('*.pdf'):
        try:
            txt = extract_text(str(pdf_path))
            out_file = output_dir / (pdf_path.stem + '.txt')
            out_file.write_text(txt, encoding='utf-8')
            results[pdf_path.name] = str(out_file)
        except Exception as e:
            print(f"Error processing {pdf_path}: {e}")

print(json.dumps(results, indent=2))
