"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreate, setUserCreate] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setUserCreate(false);
    setError(false);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email: form.email, password: form.password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setUserCreate(true);
    } else {
      setError(true);
    }

    setCreatingUser(false);
  }

  return (
    <div className="">
      <section className="mt-8 h-full flex flex-wrap justify-center">
        <form
          className="grid place-items-center"
          action=""
          onSubmit={handleFormSubmit}
        >
          <h1 className="text-center text-primary text-4xl">Register</h1>
          {userCreate && (
            <div className="text-center my-4">
              User created. Now you can{" "}
              <Link className="text-gray-500 hover:text-black" href={"/login"}>
                login
              </Link>
            </div>
          )}
          {error && (
            <div className="text-center my-4">
              An error as occurred
              <br />
              Please try later
            </div>
          )}
          <input
            className={`h-10 items-center m-1 w-72 border-2 rounded-lg ${
              creatingUser ? "bg-red-500" : "bg-white"
            }`}
            type="email"
            disabled={creatingUser}
            placeholder="email"
            value={form.email}
            onChange={(ev) => setForm({ ...form, email: ev.target.value })}
          />
          <input
            className={`h-10 items-center m-1 w-72 border-2 rounded-lg ${
              creatingUser ? "bg-red-500" : "bg-white"
            }`}
            type="password"
            disabled={creatingUser}
            placeholder="password"
            value={form.password}
            onChange={(ev) => setForm({ ...form, password: ev.target.value })}
          />
          <button
            className="h-10 items-center m-1 w-72 border-2  rounded-lg flex justify-center gap-4 bg-primary"
            type="submit"
            disabled={creatingUser}
          >
            Register
          </button>
          <div className="text-gray-400">Or login with provider</div>
          <button className="h-10 items-center m-1 w-72 border-2 rounded-lg flex justify-center gap-4">
            <img src="/google.png" height={24} width={24} alt="..." />
            Login with google
          </button>
          <div className="text-center text-sm my-2 border-t border-b-2">
            Existing account?{" "}
            <Link className="text-primary" href={"/login"}>
              Login Here
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}
