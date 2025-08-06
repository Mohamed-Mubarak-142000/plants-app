import { getCurrentLang } from "@/lib/get-current-lang";
import TitleSection from "../title-section/title-section";
import FeedbackSlider from "./feedback-slider";
import getTrans from "@/lib/translation";

async function FeedbackCarousel() {
  const locale = await getCurrentLang();
  const { feedback } = await getTrans(locale);
  const feedbacks = [
    {
      name: "John Doe",
      photo: "/images/Frame 7.png",
      testimonial: feedback.testimonials[0],
    },
    {
      name: "Jane Smith",
      photo: "/images/Frame 7.png",
      testimonial: feedback.testimonials[1],
    },
    {
      name: "Michael Johnson",
      photo: "/images/Frame 7.png",
      testimonial: feedback.testimonials[2],
    },
  ];
  return (
    <div className="container">
      <TitleSection title={feedback.title} subtitle={feedback.subtitle} />
      <FeedbackSlider feedbacks={feedbacks} />
    </div>
  );
}

export default FeedbackCarousel;
