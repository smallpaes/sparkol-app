import { useState } from 'react';
import { apiHelper } from '../utils/helpers';
import { AxiosError } from 'axios';

const usePostData = (): {
  postData: <T, U>(url: string, data: T) => Promise<U | null>;
  isLoading: boolean;
  error: string | null;
} => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const postData = async <T, U>(url: string, data: T) => {
    setIsLoading(true);
    try {
      const response = await apiHelper.post<U>(url, data);
      return response.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        const message = e.response?.data || 'Something went wrong';
        setError(message);
      } else {
        setError('Something went wrong');
      }
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  return { postData, isLoading, error };
};

export default usePostData;
