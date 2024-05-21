import * as React from "react";
import { useState } from "react";
import useResetPassword from "../hooks/useResetPassword";

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const { loading, submit } = useResetPassword();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    submit({ password, confirmPassword });
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-[500px] p-5 rounded-sm shadow-lg bg-white bg-opacity-70">
          <h1 className="text-2xl font-bold">Change password?</h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-5">
              <label className="block mb-1">Password</label>
              <input
                type="password"
                value={password}
                placeholder="Enter the new password"
                className="w-full h-10 p-2 border rounded-md outline-red-400"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span style={{ color: "red" }}>{passwordError}</span>
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
              <span style={{ color: "red" }}>{confirmPasswordError}</span>
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
              <a
                href="/login"
                className="text-indigo-500 font-semibold"
              >
                {" "}
                Back
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
