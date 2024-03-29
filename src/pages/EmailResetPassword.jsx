import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EmailResetPassword() {
  const [email, setEmail] = useState();
  const [data, setData] = useState();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/forgotpassword`, { email });
      setData(response.data.message);
      toast.success(data);
    } catch (error) {
      toast.error(error.respone.data.message);
    }
  };
  console.log(data);

  return (
    <div className="grid grid-rows-[1fr,3fr] lg:grid-rows-1 lg:grid-cols-2 h-screen overflow-hidden bg-primary font-quickSand">
      {/* Left */}
      <div className="lg:relative flex justify-center items-center lg:rounded-br-[90px]">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
          <h1 className="lg:order-2 text-5xl font-bold text-white">
            Air<span className="text-secondary">Tix</span>
          </h1>
        </div>
        <div className="hidden lg:block lg:absolute bottom-0 right-0 h-[100px] w-[100px] bg-white"></div>
        <div className="hidden lg:block lg:absolute bottom-0 right-0 h-[100px] w-[100px] bg-primary rounded-br-[90px] "></div>
      </div>
      {/* Left End */}

      {/* Right */}
      <div className="bg-white flex flex-col justify-center px-14 lg:px-20 rounded-tl-[90px]">
        <h1 className="text-2xl font-bold mb-6">Email Verification</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* Email Input */}
          <div className="relative w-full flex items-center mb-4">
            <img src="/icons/email_icon.svg" alt="" className="absolute left-3 w-[20px] opacity-50" />
            <input
              type="email"
              name=""
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="px-10 py-2 w-full border border-slate-400 rounded-xl font-medium outline-none transition placeholder:text-sm placeholder:transition placeholder:duration-500 focus:placeholder:-translate-y-48 focus:border-secondary invalid:focus:border-red-600"
            />
          </div>
          {/* Email Input End*/}

          {/* Button Submit */}
          <button type="submit" className="mt-6 bg-primary py-3 rounded-xl text-white text-sm font-medium">
            Verify
          </button>
          {/* Button Submit End */}
        </form>
      </div>
      <ToastContainer />
      {/* Right End */}
    </div>
  );
}

export default EmailResetPassword;
