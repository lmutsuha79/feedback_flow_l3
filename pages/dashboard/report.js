import DashboardLayout from "@/components/layout/dashboard-layout";

const report = () => {
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

        <div className="mt-8 shadow-lg p-8 border border-slate-200 rounded-md">
          <h3 className="font-medium mb-2 text-xl">
            What are the users says about this app:
          </h3>
          <pre className="whitespace-pre-line text-lg">
            {`
           The user feedback about the app is mixed. Some users praise the app for its robustness and professional features, while others express dissatisfaction with various aspects. Here's a summary of the user comments:

           Positive feedback:
           
           Users appreciate the app's features, such as sleep tracking, alarm functionality, and sleep analysis.
           The free trial and premium features are well-received by some users.
           The app has helped users improve their sleep schedules and understand their sleep patterns better.
           The app's customer support team is praised for being kind and helpful.
           The ability to monitor sleep patterns is seen as a game changer by some users.
           Negative feedback:
           
           Some users mention issues with the alarm not going off or having difficulty turning it off without force closing the app.
           The accuracy of the sleep tracking feature is questioned by a few users.
           The fact that the app requires payment is criticized by some users.
           There are complaints about the interface being messy and the presence of bugs.
           A few users mention difficulties with subscriptions, refunds, and international payments.
           Some users mention that certain features are locked behind a paywall.
           The app's inability to sync with other devices or platforms, like Google Fit or wearable watches, is seen as a drawback.
           There are complaints about unexpected charges and unauthorized subscriptions.
           Some users mention that the app doesn't work properly while the phone is charging or when using headphones.
           Overall, the app receives both positive and negative feedback, with users appreciating its functionality but also pointing out various issues and limitations.
           `}
          </pre>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default report;
