import React, { useState } from "react";
import bgImage from "../../assets/loginbg.jpg";

const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        
      <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex w-[850px]">
        
        {/* Background Section with Image */}
        <div
          className="md:w-1/2 flex flex-col items-center justify-center p-12"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-4xl font-bold mb-4 text-white">
            {isSignUp ? "Welcome!" : "Hello, Friend!"}
          </h1>
          <p className="text-lg mb-6 text-white">
            {isSignUp
              ? "Create your account. For Free!"
              : "Sign in and continue your journey"}
          </p>
          <button
            onClick={toggleForm}
            className="bg-white text-green-600 px-6 py-2 rounded-md hover:bg-gray-200 transition"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-12">
          <h2 className="text-3xl font-semibold mb-6">
            {isSignUp ? "Sign Up" : "Login"}
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username/Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Username or Email"
                required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
          {!isSignUp && (
            <p className="text-sm mt-4 text-green-600 text-center cursor-pointer">
              Forgot password?
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
