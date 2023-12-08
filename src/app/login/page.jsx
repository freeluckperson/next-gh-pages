'use client'

import Link from "next/link";
import { useState } from "react";
import { signIn } from 'next-auth/react'



export default function LoginPage() {
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleFormSubmit(ev) {
    ev.preventDefault()
    setLoginInProgress(true)

    await signIn("credentials", { email, password })

    setLoginInProgress(false)
  }

  return (
    <>
      <section className="mt-8 h-full flex flex-wrap justify-center"  >
        <form className="grid place-items-center" onSubmit={handleFormSubmit}>
          <h1 className="text-center text-primary text-4xl">Login</h1>
          <input
            className={`h-10 items-center m-1 w-72 border-2 rounded-lg `}
            type="email"
            name="email"
            placeholder="email"
            value={email}
            disabled={loginInProgress}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className={`h-10 items-center m-1 w-72 border-2 rounded-lg `}
            type="password"
            name="password"
            placeholder="password"
            value={password}
            disabled={loginInProgress}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className="h-10 items-center m-1 w-72 border-2  rounded-lg flex justify-center gap-4 hover:text-white bg-primary"
            disabled={loginInProgress}
            type="submit"
          >
            Login
          </button>
          <div className="text-gray-400">Or login with provider</div>
          <button className="h-10 items-center m-1 w-72 border-2 rounded-lg flex justify-center gap-4">
            <img src="/google.png" height={24} width={24} alt="..." />
            Login with google
          </button>
          <div className="text-center text-sm my-2 border-t border-b-2">
            Don't have a account?{" "}
            <Link className="text-primary" href={"/register"}>
              Register Here
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}
