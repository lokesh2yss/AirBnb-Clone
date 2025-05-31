import React from 'react';
import axiosInstance from '../axios-instance';

function useMutationAdvance(url, method, debounceMs = 300) {
  const [mutateState, setMutateState] = React.useState({
    data: null,
    pending: false,
    error: null,
  });

  const debounceTimer = React.useRef(null);
  const abortController = React.useRef(null);

  const mutate = (payload, cb) => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(async () => {
      // Cancel previous request
      if (abortController.current) {
        abortController.current.abort();
      }

      abortController.current = new AbortController();

      setMutateState({ data: null, pending: true, error: null });

      try {
        const response = await axiosInstance({
          method,
          url,
          data: payload,
          signal: abortController.current.signal,
        });

        setMutateState((prev) => ({ ...prev, data: response.data }));

        if (cb?.onSuccess) cb.onSuccess(response);
      } catch (err) {
        if (err.name === 'CanceledError' || err.name === 'AbortError') {
          console.warn('Mutation aborted:', err.message);
          return;
        }

        setMutateState((prev) => ({
          ...prev,
          error: err.message,
        }));

        if (cb?.onError) cb.onError(err);
      } finally {
        setMutateState((prev) => ({ ...prev, pending: false }));
      }
    }, debounceMs);
  };

  React.useEffect(() => {
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
      if (abortController.current) abortController.current.abort();
    };
  }, []);

  return {
    ...mutateState,
    mutate,
  };
}

export default useMutationAdvance;
