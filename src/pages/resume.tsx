import { useEffect } from "react";
import { useRouter } from "next/router";

export default function TwitterRedirect() {
  const router = useRouter();

  useEffect(() => {
    window.location.href =
      "https://www.geekydan.dev/assets/resume/Dhanush's%20Resume.pdf";
  }, []);

  return null;
}
