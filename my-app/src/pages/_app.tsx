import "@/styles/globals.css";
import { LoginForm } from "./components/LoginForm";


export default function App() {
  return(
    <section className="w-screen mt-32 flex justify-center bg-slate-700">
      <LoginForm />
    </section>
  )
}
