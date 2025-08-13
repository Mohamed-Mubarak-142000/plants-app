import AboutUs from "./_components/about/about-us";
import BestSelling from "./_components/best-selling/best-selling";
import FeedbackCarousel from "./_components/customers-feedback/customers-feedback";
import AllCategories from "./_components/categories/all-categories";
import Hero from "./_components/hero";
import AllStands from "./_components/stands/all-stands";

export default async function Home() {
  return (
    <>
      <Hero />
      <AllStands />
      <BestSelling />
      <AboutUs />
      <AllCategories />
      <FeedbackCarousel />
    </>
  );
}
