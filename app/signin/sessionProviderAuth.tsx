"use client";
import { SessionProvider } from "next-auth/react";

export default function SessionProviderAuth(props: any) {
  return <SessionProvider>{props.children}</SessionProvider>;
}
