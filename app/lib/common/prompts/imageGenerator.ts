import axios from 'axios';

/**
 * Generates a detailed image prompt using an external API.
 * @param pageHtml - The HTML content surrounding the image.
 * @param imageUrl - The URL of the image.
 * @param altText - The alt text of the image.
 * @returns A detailed prompt for generating the image.
 */
export const generateImagePrompt = async (pageHtml: string, imageUrl: string, altText: string): Promise<string> => {
  try {
    const response = await axios.post('https://api.example.com/generate-prompt', {
      pageHtml,
      imageUrl,
      altText,
    });

    return response.data.prompt;
  } catch (error) {
    console.error('Error generating image prompt:', error);
    throw new Error('Failed to generate the image prompt.');
  }
};
