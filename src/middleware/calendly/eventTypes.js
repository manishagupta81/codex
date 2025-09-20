import { getCalendlyOwnerUri } from '../../config/calendly.js';
import { calendlyRequest, isCalendlyConfigured } from '../http/calendlyClient.js';

export const fetchEventTypes = async () => {
  if (!isCalendlyConfigured()) {
    return { data: [], error: 'missing-api-key' };
  }

  const ownerUri = getCalendlyOwnerUri();

  if (!ownerUri) {
    return { data: [], error: 'missing-owner-uri' };
  }

  const params = new URLSearchParams({
    organization: ownerUri,
    count: '5',
  });

  try {
    const response = await calendlyRequest(`/event_types?${params.toString()}`);
    const eventTypes = response.collection?.map((item) => ({
      name: item.name,
      slug: item.slug,
      duration: item.duration,
      uri: item.uri,
    })) || [];

    return { data: eventTypes, error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};
