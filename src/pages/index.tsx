import * as React from "react"

import { Inter } from 'next/font/google'
import LoginForm from "@/components/molecules/LoginForm";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
