import AboutUs from "./components/about/about-us";
import BestSelling from "./components/best-selling/best-selling";
import AllCategories from "./components/categories/all-categories";
import FeedbackCarousel from "./components/customers-feedback/customers-feedback";
import Hero from "./components/hero";
import AllStands from "./components/stands/all-stands";
import TitleSection from "./components/title-section/title-section";

export default function Home() {
  return (
    <>
      <Hero />
      <BestSelling />
      <TitleSection
        title="Popular Plants Stands"
        subtitle="Choose your favorite stand"
      />
      <AllStands />
      <TitleSection
        title="About us"
        subtitle="Order now and appreciate the beauty of nature"
      />
      <AboutUs />
      <TitleSection
        title="Categories"
        subtitle="Find what you are looking for"
      />
      <AllCategories />
      <FeedbackCarousel />
    </>
  );
}
