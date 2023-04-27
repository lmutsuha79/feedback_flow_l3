import BackHomeBtn from "@/components/auth-components/back-home";
import GoogleBtn from "@/components/auth-components/google-btn";
import { supabase } from "@/lib/supabaseClient";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import Link from "next/link";

async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
  console.log(data);
}

function handleGoogleLoginClick() {
  signInWithGoogle();
}
const Login = () => {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <BackHomeBtn />
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex items-center flex-col space-y-2 text-center">
          {/* <Icons.logo className="mx-auto h-6 w-6" /> */}
          <div>
            <Image
              src={"/images/logo-black.png"}
              width={200}
              height={200}
              alt="logo"
            />
          </div>
          <h1 className="text-primary text-2xl font-semibold tracking-tight">
            Welcome
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Please login with your google account
          </p>
          <GoogleBtn onClickFunction={handleGoogleLoginClick} />
        </div>
        {/* <UserAuthForm /> */}
        <p className="px-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/auth/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    console.log("the user is authenticated");
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  console.log(session);
  return {
    props: {
      jiji: "jiji",
      // initialSession: session,
      // user: session.user,
    },
  };
};

export default Login;
