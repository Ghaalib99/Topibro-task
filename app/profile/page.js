"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem("login");

    // Redirect to profile page if user is already logged in
    if (isLoggedIn) {
      router.push("/profile");
    } else {
      router.push("/"); // Redirect to login page if not logged in
    }
  }, []);

  const handleLogout = () => {
    // Clear the login status from local storage and go to login page
    localStorage.removeItem("login");
    router.push("/");
  };

  return (
    <div>
      <h1>You are logged in</h1>
      <p>Click the button below to logout</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
