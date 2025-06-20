// src/app/faq/actions.ts
'use server';
import { smartFAQ, type SmartFAQInput, type SmartFAQOutput } from '@/ai/flows/smart-faq';

export async function getFAQAnswer(input: SmartFAQInput): Promise<SmartFAQOutput> {
  try {
    // The smartFAQ function itself might have console.log for its operations.
    // Here we're focusing on the interaction with it.
    const result = await smartFAQ(input);
    return result;
  } catch (error) {
    // Log the error server-side for debugging.
    console.error("Error calling smartFAQ flow:", error);
    // Return a user-friendly error message.
    return { answer: "I'm sorry, but I encountered an issue while processing your question. Please try again later or contact our support team if the problem persists." };
  }
}
