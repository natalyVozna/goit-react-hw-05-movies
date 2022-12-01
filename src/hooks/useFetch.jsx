import { useCallback, useState } from 'react';

export const useFetch = callback => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async params => {
    try {
      setIsLoading(true);
      await callback(params);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [fetchData, isLoading, isError];
};
