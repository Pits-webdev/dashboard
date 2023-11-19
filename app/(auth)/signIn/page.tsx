import Link from "next/link";
import { createUser } from "@/lib/data";

const Signin = () => {
  return (
    <div className="w-full px-5 min-h-[calc(100vh-7vh)]  flex items-center justify-center">
      <div className="max-w-[460px]">
        <h1 className="text-center text-3xl mb-8 text-blue-500">Sign in </h1>
        <p className="text-center">
          You need to Sign in to use this application, if you are Sign in go to
          the{" "}
          <span className="text-blue-500">
            {" "}
            <Link href="login">Login</Link>{" "}
          </span>{" "}
          page
        </p>
        <form className="w-full flex flex-col gap-5 mt-16" action={createUser}>
          <div className="form_group">
            <label htmlFor="name">Name</label>

            <input
              className="input_field"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="form_group">
            <label htmlFor="email">Email</label>

            <input
              className="input_field"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
            />
          </div>

          <div className="form_group">
            <label htmlFor="password">Password</label>

            <input
              className="input_field"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="form_group mt-4">
            <button className="max-w-max py-2 px-16 bg-blue-400 text-white text-lg rounded-xl">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
