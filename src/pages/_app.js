import "@/styles/globals.css";
import { onAuthStateChanged, auth } from "../lib/firebase.js";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user ? null : router.push("/login");
    });
    return () => unsubscribe();
  }, [router]);

  return <Component {...pageProps} />;
}
