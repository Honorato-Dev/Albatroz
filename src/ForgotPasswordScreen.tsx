
import * as React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getError } from './error';
import { FormType } from './types';




const ForgotPasswordScreen = () => {
  const [loading, setLoading] = React.useState(false);
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  const submitHandler = async ({ email }: FormType) => {
    setLoading(true);
    try {
      await axios
        .post('/api/auth/forgot-password', { email: email })
        .then((res: any) => {
          const response = res.data;
          
          if (response.status == 200) {
            toast.success(response.message, { theme: 'colored' });
            setLoading(false);
          // eslint-disable-next-line no-empty
          } else if (response.status == 400) {
          } else if (response.status == 500) {
            toast.error(response.message, { theme: 'colored' });
            setLoading(false);
          }
        });
    } catch (err) {
      toast.error(getError(err));
      setLoading(false);
      console.log('The error is', err);
    }
  };
  return (
    
      <div className="flex justify-center">
        <div className="w-[500px] p-5 rounded-sm shadow-lg bg-white bg-opacity-70">
          <h1 className="text-xl lg:text-2xl font-bold">Forgot password ?</h1>
          <p className="flex text-sm lg:text-base">
          Don&#39;t worry it happens all the time. Write your email
             below and we will send you a recovery email.
          </p>
          <p className="text-xs mt-2">
            <span>(OBS: </span>Check your spam box)
          </p>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="mb-3 mt-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="w-full mt-1"
                placeholder="exemplo@email.com"
                id="email"
                autoFocus
                {...register('email', {
                  required: 'Please enter a valid email ',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                    message: 'Please use a valid email format ',
                  },
                })}
              />
              {errors.email && (
                <div className="text-red-600">{errors.email.message}</div>
              )}
            </div>
            <div className="mt-5">
              <button
                className="w-full bg-gray-500 hover:bg-gray-700 p-2 rounded-sm text-white"
                disabled={loading}
              >
                {loading ? 'Processing' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </div>
  
  );
};

export default ForgotPasswordScreen;
