const DEFAULT_EVENT_URL = 'https://calendly.com/muskaan-tutoring/30min';
const DEFAULT_EMBED_DOMAIN = 'localhost';
const DEFAULT_PRIMARY_COLOR = '#7f8ae0';

export const getCalendlyApiKey = () => import.meta.env.VITE_CALENDLY_API_KEY || '';
export const getCalendlyOwnerUri = () => import.meta.env.VITE_CALENDLY_OWNER_URI || '';
export const getCalendlyEventUrl = () =>
  import.meta.env.VITE_CALENDLY_EVENT_URL || DEFAULT_EVENT_URL;
export const getCalendlyEmbedDomain = () =>
  import.meta.env.VITE_CALENDLY_EMBED_DOMAIN || DEFAULT_EMBED_DOMAIN;
export const getCalendlyPrimaryColor = () =>
  import.meta.env.VITE_CALENDLY_PRIMARY_COLOR || DEFAULT_PRIMARY_COLOR;
