"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  let router = useRouter();
  const [login, setLogin] = useState(false);

  //   function redirect () {
  //     if (login !== newStatus) {
  //         router.push("/login");
  //       } else {
  //         router.push("/profile");
  //       }
  //   }

  const handleLogin = () => {
    const newStatus = true;

    setLogin(newStatus);
    localStorage.setItem("login", newStatus);
    if (login == newStatus) {
      router.push("/profile");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <p>Click the button below to login</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
