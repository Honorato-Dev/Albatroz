import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../utils/error';
import { FormType } from '../types';

const useForgotPassword = () => {
  const [loading, setLoading] = useState(false);

  const submitHandler = async ({ email }: FormType) => {
    setLoading(true);
    try {
      const res = await axios.post('/api/auth/forgot-password', { email });
      const response = res.data;

      if (response.status === 200) {
        toast.success(response.message, { theme: 'colored' });
      } else if (response.status === 400 || response.status === 500) {
        toast.error(response.message, { theme: 'colored' });
      }
    } catch (err) {
      toast.error(getError(err));
    } finally {
      setLoading(false);
    }
  };

  return { loading, submitHandler };
};

export default useForgotPassword;
