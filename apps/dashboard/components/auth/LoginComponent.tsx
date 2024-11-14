"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login({ onSubmit }: { onSubmit: Function }) {
  const router = useRouter()
  const [loginError, setLoginError] = useState(false)

  return <form className="flex flex-col pl-5 pr-2 py-2 gap-5
      rounded-xl w-full md:w-1/5 lg:w-1/5 xl:w-1/5"
    action={async (e) => {
      const email = e.get("email")
      const password = e.get("password")
      const success = await onSubmit(email, password)
      if (success) {
        router.push("dashboard")
      } else {
        setLoginError(true)
      }
    }} >
    <input
      placeholder="user@ego-lang.org"
      className={`bg-[#131313] outline-none border-none text-lg
          w-full placeholder:text-[#494949] px-3 py-2 rounded-lg` }
      name='email'
      type="email" />
    <input
      placeholder="password"
      className={`bg-[#131313] outline-none border-none text-lg
          w-full placeholder:text-[#494949] px-3 py-2 rounded-lg` }
      name='password'
      type="password" />
    {
      loginError && <p className="self-center">bad credentials</p>
    }
    <button className="bg-[#0056ff] px-3 py-2 rounded-lg
        text-lg active:scale-[0.93] transition-all ease-in-out">login</button>
  </form>
}