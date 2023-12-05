"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleFormSubmit(ev) {
    ev.preventDefault();
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email: form.email, password: form.password }),
      headers: { "Content-Type": "application/json" },
    })
      .then(setForm({ email: "", password: "" }))
      .catch((error) => console.log(error));
  }

  return (
    <div className="">
      <section className="mt-8 h-full flex flex-wrap justify-center ">
        <form
          className="grid place-items-center"
          action=""
          onSubmit={handleFormSubmit}
        >
          <h1 className="text-center text-primary text-4xl">Register</h1>
          <input
            className="h-10 items-center m-1 w-72 border-2 rounded-lg"
            type="email"
            name=""
            id=""
            placeholder="email"
            value={form.email}
            onChange={(ev) => setForm({ ...form, email: ev.target.value })}
          />
          <input
            className="h-10 items-center m-1 w-72 border-2 rounded-lg"
            type="password"
            name=""
            id=""
            placeholder="password"
            value={form.password}
            onChange={(ev) => setForm({ ...form, password: ev.target.value })}
          />
          <button
            className="h-10 items-center m-1 w-72 border-2  rounded-lg flex justify-center gap-4 bg-primary"
            type="submit"
          >
            Register
          </button>
          <div className="text-gray-400">Or login with provider</div>
          <button className="h-10 items-center m-1 w-72 border-2 rounded-lg flex justify-center gap-4">
            <img src="/google.png" height={24} width={24} alt="..." />
            Login with google
          </button>
        </form>
      </section>
    </div>
  );
}
