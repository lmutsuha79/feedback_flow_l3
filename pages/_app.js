// export default function App({ Component, pageProps }) {

//   return <Component {...pageProps} />
// }

import "@/styles/globals.css";
import { Inter } from "next/font/google";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import { createContext, useEffect, useState } from "react";
import LoadingScreen from "@/components/ui/loading-screen";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const DashboardContext = createContext();

export default function App({ Component, pageProps }) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  const [currentApp, setCurrentApp] = useState();

  const Dashboard_States = {
    currentApp,
    setCurrentApp,
  };


  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <ToastContainer />

      <LoadingScreen />
      <DashboardContext.Provider value={Dashboard_States}>
        <div id="app_wrapper_none_loading_screen" className="w-screen h-screen">
          <Component {...pageProps} />
        </div>
      </DashboardContext.Provider>
    </SessionContextProvider>
  );
}
