import NDK, { NDKEvent, NDKTag, NDKKind } from '@nostr-dev-kit/ndk';

const ndk = new NDK({
  explicitRelayUrls: ['wss://your-relay-url']
});

export const createJobRequest = async (userPrompt: string, satAmount?: number) => {
  const ndkEvent = new NDKEvent(ndk);
  
  ndkEvent.kind = 68001; // Replace with actual kind if needed
  ndkEvent.content = JSON.stringify({ input: userPrompt });
  ndkEvent.tags = [['p: prompt']]; // Assuming NDKTag is string[]
  
  // Optional fields
  // ndkEvent.id = 'some-unique-id'; // Replace with a unique ID if needed
  // ndkEvent.sig = 'some-signature'; // Replace with a signature if needed
  
  await ndkEvent.publish(); // This will trigger the extension to ask the user to confirm signing.
};
