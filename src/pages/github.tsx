import { useEffect } from "react";

export default function GithubRedirect() {
  useEffect(() => {
    window.location.href = "https://github.com/dhanush17-tech";
  }, []);

  return null;
}
