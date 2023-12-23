import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.priceTracker.shopwise"; // The URL you want to redirect to
  }, []);

  return null; // Render nothing or a loading indicator because we're redirecting
};

export default Page;
