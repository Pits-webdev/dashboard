import { createKunde } from "@/lib/actions";

const addKunde = () => {
  return (
    <div className="w-full px-5 min-h-[calc(100vh-7vh)]  flex items-center justify-center">
      <div className="w-[33%]">
        <h1 className="text-center text-3xl mb-8 text-blue-500">neuer Kunde</h1>

        <form className="w-full flex flex-col gap-5 mt-16" action={createKunde}>
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

          <div className="form_group mt-4">
            <button className="max-w-max py-2 px-16 bg-blue-400 text-white text-lg rounded-xl">
              neuer Kunde
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addKunde;
