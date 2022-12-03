import PromptSync from "prompt-sync";

const inputPrompt = PromptSync();

export const input = (message) => {
  return inputPrompt(message);
};
