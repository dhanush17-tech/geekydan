import { useEffect } from "react";

export default function MailRedirect() {
  useEffect(() => {
    window.location.href = "mailto:hi@geekydan.dev";
  }, []);

  return null;
}
