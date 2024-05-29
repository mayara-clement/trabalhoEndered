import "@/styles/globals.css";
import { SidebarProvider } from "../context/SidebarContext";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </SessionProvider>
  );
}
