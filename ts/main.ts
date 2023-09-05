import { createJobRequest } from './Nostr'; // Import the function from Nostr.ts

const submitButton = document.getElementById('submitPrompt');
const userPromptInput = document.getElementById('userPrompt') as HTMLInputElement;

submitButton?.addEventListener('click', async () => {
  const userPrompt = userPromptInput.value;

  try {
    await createJobRequest(userPrompt); // Call the function from Nostr.ts
    console.log('Note published');
  } catch (error) {
    console.error('Failed to publish note:', error);
  }
});
