import List from "@/components/ui/List";
import { Eye, History, ThumbsUp } from "lucide-react";
import { FC } from "react";

interface IntroProps {}

const Intro: FC<IntroProps> = ({}) => {
  return (
    <div>
      <div>SUMMARY</div>
      <div className="flex flex-1 flex-col md:flex-row gap-7">
        As a Full Stack MERN developer having 3+ years experience with a strong
        foundation in Mysql , Express.js, React.js, and Node.js, I specialize in
        creating seamless and captivating web applications. My skills extend to
        integrating Koa.js for streamlined server- side development and
        harnessing the power of Next.js for optimized React applications and
        developing mobile apps using react-native .Skilled in Front-end and
        backend ,with a proven track record in designing efficient databases,
        developing RESTful APIs, and a keen eye for UI/UX, I bring a versatile
        skill set to elevate projects with modern design principles and
        innovation.
      </div>
    </div>
  );
};

export default Intro;
