import {
  showSuccess,
  showError,
} from "./toast";

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);

    showSuccess("Copied to clipboard!");

  } catch (error) {
    console.error(error);

    showError("Failed to copy.");
  }
};