'use client'

import { useState } from "react";


export default function LoginPage() {
  const [inputChange, setInputChange] = useState({
    email: "",
    password: "",
  });

  return (
    <section className="my-8">
      <h1 className="text-center text-primary text-4xl">Login</h1>
      <form className="grid place-items-center">
        <input
          className={`h-10 items-center m-1 w-72 border-2 rounded-lg `}
          type="email"
          placeholder="email"
          value={inputChange.email}
          onChange={e => setInputChange({ ...inputChange, email: e.target.value })}
        />
        <input
          className={`h-10 items-center m-1 w-72 border-2 rounded-lg `}
          type="password"
          placeholder="password"
          value={inputChange.password}
          onChange={e => setInputChange({ ...inputChange, password: e.target.value })}
        />
      </form>
    </section>
  );
}
