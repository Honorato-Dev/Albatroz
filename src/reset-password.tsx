import * as React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const ResetPassword = () => {
  const searchParam = useSearchParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

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


    axios
      .post("/api/auth/reset-password", {
        email: searchParam.get("mail"),
        signature: searchParam.get("signature"),
        password: password,
        password_confirmation: confirmPassword,
      })
      .then((res:any) => {
        const response = res.data;
        if (response.status == 400) {
          toast.error(response.message, { theme: "colored" });
          router.push('/');
        } else if (response.status == 200) {
          toast.success(response.message, { theme: "colored" });
          setLoading(false);
        }
      })
      .catch((err:any) => {
        setLoading(false);
        console.log("err..", err);
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-[500px] p-5 rounded-sm shadow-lg bg-white bg-opacity-70">
          <h1 className="text-2xl font-bold">Change password?</h1>

          <form onSubmit={submit}>
            <div className="mt-5">
              <label className="block mb-1">Password</label>
              <input
                type="password"
                value={password}
                placeholder="Enter the new password"
                className="w-full h-10 p-2 border rounded-md outline-red-400"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span style={{ color: 'red' }}>{passwordError}</span>
            </div>
            <div className="mt-5">
              <label className="block mb-1">Confirm password</label>
              <input
                type="password"
                value={confirmPassword}
                placeholder="Confirm the new password"
                className="w-full h-10 p-2 border rounded-md outline-red-400"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span style={{ color: 'red' }}>{confirmPasswordError}</span>
            </div>
            <div className="mt-5">
              <button
                className="w-full bg-black p-2 rounded-lg text-white"
                disabled={loading}
              >
                {loading ? "Process.." : "Confirm"}
              </button>
            </div>
            <div className="mt-5 text-center">
              <Link href="/login" className="text-indigo-500 font-semibold">
                {" "}
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResetPassword