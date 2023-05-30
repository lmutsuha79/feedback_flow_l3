import DashboardLayout from "@/components/layout/dashboard-layout";
import React, { useContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import { Configuration, OpenAIApi } from "openai";
import { Button } from "flowbite-react";
import {
  turnOffLoadinScreen,
  turnOnLoadingScreen,
} from "@/util/loadingFunctions";
import { DashboardContext } from "../_app";

const report = () => {
  const { currentApp } = useContext(DashboardContext);

  const [summary, setSummary] = useState(null);
  const [localReviews, setLocalReviews] = useLocalStorage("reviews", {});
  const [localAISummary, setLocalAISummary] = useLocalStorage("Ai_Summary", {});

  //   try {
  //     const url =
  //       "https://api.openai.com/v1/engines/davinci-codex/completions";
  //     const headers = {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${apiKey}`,
  //     };

  //     const body = JSON.stringify({
  //       prompt: `Summarize the following reviews and feedback:\n\n${reviews}`,
  //       max_tokens: 100, // Adjust the desired length of the summary
  //     });

  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: headers,
  //       body: body,
  //     });

  //     const data = await response.json();
  //     console.log(data);
  //     if (response.ok) {
  //       setSummary(data.choices[0].text.trim());
  //     } else {
  //       throw new Error(
  //         `Request failed with status ${response.status}: ${data.error.message}`
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  async function getWithAi() {
    turnOnLoadingScreen();
    if (
      localAISummary?.appId === currentApp.id &&
      localAISummary?.text.length
    ) {
      console.log("get from local storage");
      setSummary(localAISummary.text);
    } else {
      console.log("get from gpt server");
      const reviews = localReviews.reviews
        .map((review) => review.text)
        .splice(0, 100)
        .join(",\n");
      const configuration = new Configuration({
        organization: process.env.NEXT_PUBLIC_GPT_ORGANIZATION_ID,
        apiKey: process.env.NEXT_PUBLIC_GPT_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Can you provide a summary of the feedback and reviews for my app \n
          ${reviews}
          `,

        max_tokens: 150,
        temperature: 0.5,
      });
      const summary_gpt = response.data.choices[0].text.trim();
      // console.log(response);
      console.log(summary_gpt);
      setSummary(summary_gpt);
      setLocalAISummary({
        appId: currentApp.id,
        text: summary_gpt,
      });
    }
    turnOffLoadinScreen();
  }

  return (
    <DashboardLayout>
      <main>
        <div className="bg-main_dark  rounded-md px-4 py-8">
          <p className="text-white font-medium underline mb-2 text-lg">
            Introducing Our New Feature:
          </p>
          <pre className="whitespace-pre-line text-white ">
            {`Quick Review Analysis and AI-driven Summarization, Powered by GPT!
            Discover the power of our Quick Review Analysis and AI-driven Summarization feature today and unlock invaluable customer insights with ease.
            Try it now and revolutionize the way you understand and respond to customer feedback.`}
          </pre>
        </div>

        <div className="mt-8 shadow-lg p-8 border border-slate-200 rounded-md relative">
          {!summary ? (
            <div>
              <div className="z-50 w-full h-full flex flex-col items-center justify-center  absolute top-0 left-0">
                <h3 className="text-main_dark text-xl font-bold text-center mb-4 whitespace-pre-line">
                  {`
              Utilize the power of AI  to efficiently analyze user
              feedback and reviews of the app.
              `}
                </h3>
                <Button
                  onClick={async () => getWithAi()}
                  className="text-white bg-main_dark transform hover:scale-105 transition-transform hover:bg-main_dark cursor-pointer"
                >
                  Start Generating
                </Button>
              </div>

              <div className="blur-sm">
                <pre className="whitespace-pre-line">
                  Based on the feedback and reviews provided, here is a summary
                  of the main points: Positive feedback: Robust and professional
                  app. Provides useful sleep data and analysis. Free trial
                  period for premium features. Helps in improving sleep schedule
                  and waking up peacefully. Great app for monitoring sleep
                  patterns and finding a healthy rhythm. Easy to understand the
                  data shown in the app. Helpful customer support. Informative
                  sleep analysis Based on the feedback and reviews provided,
                  here is a summary of the main points: Positive feedback:
                  Robust and professional app. Provides useful sleep data and
                  analysis. Free trial period for premium features. Helps in
                  improving sleep schedule and waking up peacefully. Great app
                  for monitoring sleep patterns and finding a healthy rhythm.
                  Easy to understand the data shown in the app. Helpful customer
                  support. Informative sleep analysis Based on the feedback and
                  reviews provided, here is a summary of the main points:
                  Positive feedback: Robust and professional app. Provides
                  useful sleep data and analysis. Free trial period for premium
                  features. Helps in improving sleep schedule and waking up
                  peacefully. Great app for monitoring sleep patterns and
                  finding a healthy rhythm. Easy to understand the data shown in
                  the app. Helpful customer support. Informative sleep analysis
                </pre>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="font-medium mb-2 text-xl">
                What are the users says about this app:
              </h3>
              <pre className="whitespace-pre-line text-lg">
                {summary.split(". ").map((sentence, index) => (
                  <p key={index}>
                    {sentence}
                    <br />
                  </p>
                ))}
              </pre>
            </div>
          )}
        </div>
      </main>
    </DashboardLayout>
  );
};

export default report;
