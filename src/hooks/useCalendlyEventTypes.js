import { useEffect, useState } from 'react';
import { fetchEventTypes } from '../middleware/calendly/eventTypes.js';

const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  READY: 'ready',
  ERROR: 'error',
  MISSING_KEY: 'missing-api-key',
  MISSING_OWNER: 'missing-owner-uri',
};

export const useCalendlyEventTypes = () => {
  const [state, setState] = useState({
    status: STATUS.IDLE,
    eventTypes: [],
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setState({ status: STATUS.LOADING, eventTypes: [], error: null });

      const { data, error } = await fetchEventTypes();

      if (cancelled) {
        return;
      }

      if (error === 'missing-api-key') {
        setState({ status: STATUS.MISSING_KEY, eventTypes: [], error });
        return;
      }

      if (error === 'missing-owner-uri') {
        setState({ status: STATUS.MISSING_OWNER, eventTypes: [], error });
        return;
      }

      if (error) {
        setState({ status: STATUS.ERROR, eventTypes: [], error });
        return;
      }

      setState({ status: STATUS.READY, eventTypes: data, error: null });
    };

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
};

export default useCalendlyEventTypes;
