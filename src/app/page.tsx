import AboutUs from "./components/about/about-us";
import BestSelling from "./components/best-selling/best-selling";
import AllCategories from "./components/categories/all-categories";
import FeedbackCarousel from "./components/customers-feedback/customers-feedback";
import Hero from "./components/hero";
import TitleSection from "./components/title-section/title-section";

export default function Home() {
  return (
    <>
      <main className=" container mt-[6rem] lg:mt-[7rem] min-h-[calc(110vh-7rem)]">
        <Hero />
        <BestSelling />
        <TitleSection
          title="About us"
          subtitle="Order now and appreciate the beauty of nature"
        />
        <AboutUs />
      </main>
      <TitleSection
        title="Categories"
        subtitle="Find what you are looking for"
      />
      <AllCategories />
      <FeedbackCarousel />
    </>
  );
}
