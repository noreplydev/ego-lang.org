import { JetBrains_Mono } from "next/font/google";
import Login from "./LoginComponent";

export default function Page() {
  async function submitLogin(email: string, password: string) {
    "use server"
    return email == process.env.DEFAULT_DASHBOARD_USER && password == process.env.DEFAULT_DASHBOARD_PASSWORD
      ? true
      : false
  }
  return <div className="h-full w-full flex justify-center items-center
    ">
    <Login onSubmit={submitLogin} />
  </div>
}