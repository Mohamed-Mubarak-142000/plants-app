import TitleSection from "../title-section/title-section";
import FeedbackSlider from "./feedback-slider";

export default function FeedbackCarousel() {
  const feedbacks = [
    {
      name: "John Doe",
      photo: "/images/Frame 7.png",
      testimonial: "This service is amazing! Highly recommend it.",
    },
    {
      name: "Jane Smith",
      photo: "/images/Frame 7.png",
      testimonial: "I had a fantastic experience with this team!",
    },
    {
      name: "Michael Johnson",
      photo: "/images/Frame 7.png",
      testimonial: "Excellent customer support, and the service was top-notch.",
    },
  ];

  return (
    <div className="container">
      <TitleSection
        title="Customers Feedback"
        subtitle="What customers say about us?"
      />
      <FeedbackSlider feedbacks={feedbacks} />
    </div>
  );
}
