// shopwise.tsx
export const getStaticProps = async () => {
  return {
    redirect: {
      destination:
        "https://play.google.com/store/apps/details?id=com.priceTracker.shopwise",
      permanent: false,
    },
  };
};

export default function Shopwise() {
  // Render nothing since we are redirecting
  return null;
}
