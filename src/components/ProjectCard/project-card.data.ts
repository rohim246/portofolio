export const categoryColor: Record<string, string> = {
  web: "from-blue-500 to-cyan-500",
  education: "from-emerald-500 to-teal-500",
  "education-semester-2": "from-emerald-500 to-teal-500",
  "ppg-learning-reflection": "from-emerald-500 to-teal-500",
  tools: "from-orange-500 to-amber-500",
  "non-teaching": "from-sky-500 to-blue-500",
};

export const categoryLabels: Record<string, string> = {
  web: "Web App",
  education: "Pendidikan",
  "education-semester-2": "Pendidikan",
  "ppg-learning-reflection": "Pendidikan",
  tools: "Tools",
  "non-teaching": "Non Mengajar",
};

export type CategoryColorMap = typeof categoryColor;
export type CategoryLabelMap = typeof categoryLabels;