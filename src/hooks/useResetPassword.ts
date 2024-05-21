import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { getError } from "../utils/error";
import { useSearchParams } from "next/navigation";


const useResetPassword = () => {
    const searchParam = useSearchParams();
    
    
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const submit = async ({
    password,
    confirmPassword,
  }: {
    password: string;
    confirmPassword: string;
  }) => {
    setLoading(true);

    // Reset errors
    // (Reset error states here)

    try {
        // Reset errors
        setPasswordError('');
        setConfirmPasswordError('');
    
        // Check if password is empty
        if (!password) {
          setPasswordError('Enter the new password');
          setLoading(false);
          return;
        }
        
        // Check if password meets certain criteria (e.g., length)
        if (password.length < 8) {
          setPasswordError('The password must have at least 8 characters');
          setLoading(false);
          return;
        }
    
        // Check if confirmPassword is empty
        if (!confirmPassword) {
          setConfirmPasswordError('Please confirm your password');
          setLoading(false);
          return;
        }
    
        // Check if passwords match
        if (password !== confirmPassword) {
          setConfirmPasswordError('The passwords do not correspond');
          setLoading(false);
          return;
        }
    

      // API request to reset password
      await axios.post("/api/auth/reset-password", {
        email: searchParam.get("mail"),
        signature: searchParam.get("signature"),
        password: password,
        password_confirmation: confirmPassword,
      });

      // Handle success
      // (Handle success logic here)

      toast.success("Password reset successful", { theme: "colored" });
      setLoading(false);
    } catch (error) {
      // Handle error
      // (Handle error logic here)

      toast.error(getError(error));
      setLoading(false);
    }
  };

  return { loading, submit };
};

export default useResetPassword;
