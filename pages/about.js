import Footer from "@/components/landing-page-comp/footer";
import HowItWorksGridItem from "@/components/landing-page-comp/how-it-work-grid-item";
import LandingPageNav from "@/components/landing-page-comp/landing-page-nav";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const about = () => {
  return (
    <>
      <LandingPageNav active={"about"} />
      <main>
        <header className="my-8">
          <Link
            target="__blanck"
            href={"https://github.com/lmutsuha79/feedback_flow_l3"}
            className="w-fit mx-auto transform hover:scale-105 transition-transform bg-[#f1f5f9] text-main_dark font-medium flex gap-2 items-center rounded-md px-4 py-2"
          >
            <span>View On Github</span>
            <FontAwesomeIcon icon={faCode} />
          </Link>
          <h2 className="text-6xl font-bold text-main_dark text-center">
            About Page
          </h2>
        </header>
        <div className="container">
          <section>
            <h3 className="font-medium text-2xl text-main_dark my-4">
              Project Description
            </h3>
            <pre className="whitespace-pre-line text-main_text">
              {`Our PFE, titled [Feedback Flow], is a web application that utilizes sentiment analysis and filtering methods to provide valuable insights for app developers. The main objective of our project is to help app developers understand user feedback and sentiments more effectively, enabling them to make informed decisions for app improvement.`}
            </pre>
          </section>

          <section>
            <h3 className="font-medium text-2xl text-main_dark my-4">
              Project Contributors
            </h3>
            <pre className="whitespace-pre-line text-main_text">
              {`The development process of our project was a collaborative effort between Yasser Khelil and Zino Bouabdallah. Here are their respective roles:

Yasser Khelil:
- Led the development process
- Implemented the core functionality of the application
- Handled the backend development using Supabase for authentication and database management
- Integrated the sentiment analysis and filtering methods for user feedback analysis

Zino Bouabdallah:
- Worked on the design aspects of the project
- Created diagrams for classes, sequences, and UML
- Ensured the application's visual coherence and user-friendly interface

Together, Yasser and Zino combined their skills and expertise to bring this project to fruition, blending the technical implementation with a well-designed and intuitive user experience.`}
            </pre>
          </section>

          <section>
            <h3 className="font-medium text-2xl text-main_dark my-4">
              Motivation and Background
            </h3>
            <pre className="whitespace-pre-line text-main_text">
              {`Our motivation for this project stemmed from our passion for app development and the desire to improve the user experience. We noticed that app developers often struggle to analyze and interpret user feedback effectively. Therefore, we decided to create a solution that harnesses the power of AI and data analysis to provide developers with actionable insights.`}
            </pre>
          </section>

          <section>
            <h3 className="font-medium text-2xl text-main_dark my-4">
              Project Journey
            </h3>
            <pre className="whitespace-pre-line text-main_text">
              {`Throughout the development of our project, we encountered various challenges and learned valuable lessons. We iterated on the design, conducted extensive testing, and incorporated user feedback to refine our solution. We celebrated key milestones, such as successfully implementing the sentiment analysis algorithm and integrating the Google Play Scraper for data collection.`}
            </pre>
          </section>

          <section>
            <h3 className="font-medium text-2xl text-main_dark my-4">
              Collaboration and Skills
            </h3>
            <pre className="whitespace-pre-line text-main_text">
              {`Our collaboration was based on leveraging our individual skills and expertise. Khelil focused on frontend development, utilizing Next.js and Tailwind CSS to create an intuitive user interface. Zino contributed his backend expertise, implementing authentication and database management using Supabase. We constantly communicated, shared ideas, and collaborated seamlessly to deliver a cohesive end product.`}
            </pre>
          </section>

          <section>
            <h3 className="font-medium text-2xl text-main_dark my-4">
              App Features and Benefits
            </h3>
            <pre className="whitespace-pre-line text-main_text">
              {`Our app offers a range of features that benefit app developers. It allows users to register their app and collect user feedback from Google Play using the Google Play Scraper. Our AI-powered sentiment analysis provides insights into user sentiments, highlighting positive and negative feedback. Additionally, our app generates easy-to-understand visualizations, enabling developers to quickly grasp user sentiment trends and make informed decisions for app improvements.`}
            </pre>
          </section>

          <section>
            <h3 className="font-medium text-2xl text-main_dark my-4">
              Acknowledgments
            </h3>
            <pre className="whitespace-pre-line text-main_text">
              {`We would like to express our gratitude to our mentors, advisors, and academic institution for their guidance and support throughout this project. Their insights and feedback played a crucial role in shaping our solution and making it a success.`}
            </pre>
          </section>

          <section>
            <h3 className="font-medium text-2xl text-main_dark my-4">
              Contact Information
            </h3>
            <pre className="whitespace-pre-line text-main_text">
              {`Khelil Yasser Djamel Eddine
GitHub: lmutsuha79

Zino Bouabdallah
[Add Zino's preferred contact information here]`}
            </pre>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default about;
