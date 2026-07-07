import { jsPDF } from "jspdf";

export const downloadTextAsPDF = (title, content) => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text(title, 20, 20);

  doc.setFontSize(12);

  const lines = doc.splitTextToSize(content || "No content available.", 170);

  doc.text(lines, 20, 35);

  doc.save(`${title}.pdf`);
};