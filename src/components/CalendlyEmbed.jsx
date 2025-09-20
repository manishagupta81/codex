import React, { useMemo } from 'react';
import {
  getCalendlyEmbedDomain,
  getCalendlyEventUrl,
  getCalendlyPrimaryColor,
} from '../config/calendly.js';

const buildCalendlyEmbedSrc = () => {
  const baseUrl = getCalendlyEventUrl();
  const embedDomain = getCalendlyEmbedDomain();
  const primaryColor = getCalendlyPrimaryColor().replace('#', '');

  try {
    const url = new URL(baseUrl);
    url.searchParams.set('embed_domain', embedDomain);
    url.searchParams.set('hide_event_type_details', '1');
    url.searchParams.set('primary_color', primaryColor);
    return url.toString();
  } catch (error) {
    console.warn('Invalid Calendly URL provided. Falling back to default.');
    return 'https://calendly.com/muskaan-tutoring/30min?embed_domain=localhost&hide_event_type_details=1&primary_color=7f8ae0';
  }
};

const CalendlyEmbed = () => {
  const src = useMemo(buildCalendlyEmbedSrc, []);

  return (
    <div className="calendly-wrapper">
      <iframe
        src={src}
        width="100%"
        height="650"
        frameBorder="0"
        title="Book a session with Muskaan"
        allowTransparency
      />
    </div>
  );
};

export default CalendlyEmbed;
