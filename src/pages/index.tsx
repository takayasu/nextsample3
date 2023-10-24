import * as React from "react"

import { Inter } from 'next/font/google'
import LoginForm from "@/components/molecules/LoginForm";
import { User } from "lucide-react";
import UserEntryForm, { UserInfo } from "@/components/molecules/UserEntryForm ";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const entryUser = (userInfo: UserInfo) => {
    console.log(userInfo);
  };

  return (
    <div>
      <LoginForm />
      <UserEntryForm setUserInfo={entryUser} />
    </div>
  );
}
