"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  let router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedin = localStorage.getItem("login");


    // Redirect to login page if user is not logged in
    if (!isLoggedin || isLoggedin !== "true") {
      router.push("/");
    }
  }, []);

  //   if (isLoggedin || isLoggedin == 'true') {
  //     router.push('/profile');
  //   }

  const handleLogout = () => {
    // Clear the login status from local storage and got to login page
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
