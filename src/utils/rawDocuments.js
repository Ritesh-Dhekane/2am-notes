export const RAW_DOCUMENT_NOTICE =
  'These files were shared from external student sources. The developer of this site does not claim any ownership or rights over them and is only re-sharing them for study convenience.';

export const RAW_DOCUMENT_CATEGORY_LABELS = {
  'unit-notes': 'Unit Notes',
  'question-papers': 'Question Papers',
  assignments: 'Assignments',
  'case-studies': 'Case Studies',
  templates: 'Templates',
  references: 'References',
  other: 'Other Files',
};

export const getRawDocumentCategoryLabel = (category) =>
  RAW_DOCUMENT_CATEGORY_LABELS[category] || RAW_DOCUMENT_CATEGORY_LABELS.other;

export const buildRawDocumentUrl = (subjectId, docId) =>
  `/subject/${subjectId}/documents/${docId}`;
