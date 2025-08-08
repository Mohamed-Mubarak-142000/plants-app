import AboutUs from "./[locale]/_components/about/about-us";
import BestSelling from "./[locale]/_components/best-selling/best-selling";
import AllCategories from "./[locale]/_components/categories/all-categories";
import FeedbackCarousel from "./[locale]/_components/customers-feedback/customers-feedback";
import Hero from "./[locale]/_components/hero";
import AllStands from "./[locale]/_components/stands/all-stands";

export default async function Home() {
  return (
    <>
      <Hero />
      <BestSelling />
      <AllStands />
      <AboutUs />
      <AllCategories />
      <FeedbackCarousel />
    </>
  );
}
