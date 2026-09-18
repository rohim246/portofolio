export const categoryColor: Record<string, string> = {
  web: "from-blue-500 to-cyan-500",
  education: "from-emerald-500 to-teal-500",
  tools: "from-orange-500 to-amber-500",
};

export const categoryLabels: Record<string, string> = {
  web: "Web App",
  education: "Pendidikan",
  tools: "Tools",
};

export type CategoryColorMap = typeof categoryColor;
export type CategoryLabelMap = typeof categoryLabels;