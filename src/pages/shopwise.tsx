// shopwise.tsx
export const getServerSideProps = async () => {
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
