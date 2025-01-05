// utils/imageGenerator.ts

import axios from 'axios';

/**
 * Generates a detailed image prompt based on the alt text and image URL.
 * @param altText - The alt text of the image.
 * @param imageUrl - The URL of the image.
 * @returns A detailed prompt for generating the image.
 */
export const generateImagePrompt = (altText: string, imageUrl: string): string => {
  return `Create a high-quality image based on the following description: ${altText}. Consider the context and ensure the image matches the details provided. Original image URL: ${imageUrl}`;
};

/**
 * Fetches a generated image using the prompt.
 * @param prompt - The prompt to describe the image.
 * @returns A promise that resolves to the generated image.
 */
export const fetchImage = async (prompt: string): Promise<string> => {
  try {
    const response = await axios.post('https://api.example.com/generate-image', {
      prompt,
    });

    return response.data.imageUrl;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw new Error('Failed to fetch the generated image.');
  }
};
