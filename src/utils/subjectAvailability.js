export const hasMappedSourceFiles = (subject) => {
  const sourceMapping = subject?.sourceMapping;
  if (!sourceMapping) return false;

  return Object.values(sourceMapping).some((entries) => Array.isArray(entries) && entries.length > 0);
};

export const isSubjectEnabled = ({ subject, navigation, dumpData }) => {
  const hasTopics = Boolean(
    navigation?.units && Object.values(navigation.units).some((unit) => unit.topics && unit.topics.length > 0)
  );
  const hasExtras = Boolean(navigation?.extras && navigation.extras.length > 0);
  const hasRawDocs = (dumpData?.[subject?.id] || []).length > 0;

  return hasTopics || hasExtras || hasRawDocs || hasMappedSourceFiles(subject);
};
