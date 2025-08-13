import { useEffect } from "react";

export default function InstaRedirect() {
  useEffect(() => {
    window.location.href = "https://www.instagram.com/geeky.dan/";
  }, []);

  return null;
}
