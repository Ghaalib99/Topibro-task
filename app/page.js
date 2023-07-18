"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // Initialize login state
  const [login, setLogin] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in
    const isLoggedIn = localStorage.getItem("login");
    if (isLoggedIn) {
      router.push("/profile");
    }
  }, []);

  const handleLogin = () => {
    // Update state on button click
    const newStatus = true;
    setLogin(newStatus);
    localStorage.setItem("login", newStatus);
    router.push("/profile");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <p>Click the button below to login</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
