import { getCalendlyApiKey } from '../../config/calendly.js';

const CALENDLY_BASE_URL =
  import.meta.env.VITE_CALENDLY_API_BASE_URL || 'https://api.calendly.com';

export const isCalendlyConfigured = () => Boolean(getCalendlyApiKey());

export const calendlyRequest = async (path, options = {}) => {
  const apiKey = getCalendlyApiKey();

  if (!apiKey) {
    throw new Error('Calendly API key is not configured.');
  }

  const response = await fetch(`${CALENDLY_BASE_URL}${path}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `Calendly request failed (${response.status} ${response.statusText}): ${errorBody}`,
    );
  }

  return response.json();
};
