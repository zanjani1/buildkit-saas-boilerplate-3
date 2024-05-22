// This is the entry component for the landing page of the application.
// It sequentially renders the primary sections of the landing page including Hero, Features, Product, Pricing, Faq, and Footer components.

// import Waitlist1 from '@/components/waitlists/Waitlist-1';
import Waitlist3 from '@/components/waitlists/Waitlist-3';
// import Waitlist2 from '@/components/waitlists/Waitlist-2';
export default async function Home() {
  return (
    <>
      <Waitlist3 />
    </>
  );
}
