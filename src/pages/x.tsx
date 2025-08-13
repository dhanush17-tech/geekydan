import { useEffect } from "react";
import { useRouter } from "next/router";

export default function TwitterRedirect() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = "https://x.com/geeky_dan";
  }, []);

  return null;
}
