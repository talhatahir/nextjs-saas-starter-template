import Review from "./Review";

interface ReviewData {
  rating: number;
  title: string;
  content: string;
  author: string;
  designation: string;
}

interface ReviewsProps {
  reviews?: ReviewData[];
}

const defaultReviews: ReviewData[] = [
  {
    rating: 1,
    title: "shitty app :D!",
    content:
      "This app has been a game-changer for me! It's made tracking my daily activities so much easier. I love how intuitive and user-friendly it is.",
    author: "Jonas Aly",
    designation: "Founder @ Company",
  },
  {
    rating: 5,
    title: "Super helpful to stay organized",
    content:
      "I can't thank this app enough for helping me stay on top of my tasks. The reminders have saved me from missing important deadlines, and I'm much more organized now.",
    author: "Mark Bures",
    designation: "Businessman",
  },
  {
    rating: 5,
    title: "Great app that saves time",
    content:
      "The app's integration with my other tools is seamless. I can easily check my progress and activities without having to switch between multiple platforms.",
    author: "William Kolas",
    designation: "Student",
  },
  {
    rating: 4,
    title: "Seriously life changing app!",
    content:
      "The insights and reports have been eye-opening. I now have a better understanding of my habits and can make adjustments to improve my productivity.",
    author: "Andrew Chan",
    designation: "Manager @ AB Company",
  },
];

const Reviews: React.FC<ReviewsProps> = ({ reviews = defaultReviews }) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-gray-900 dark:text-white">
          A beautiful reviews section
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
