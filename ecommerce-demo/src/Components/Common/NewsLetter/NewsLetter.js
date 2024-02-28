const NewsLetter = () => {
  return (
    <section className="container my-24 mx-auto md:px-6 ">
      <div className="mb-32 text-center lg:text-left ">
        <div className="flex flex-wrap justify-center relative isolate overflow-hidden bg-gray-100 px-6 py-24  rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32 dark:bg-gray-800">
          <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-10/12 lg:w-11/12 xl:w-10/12">
            <div className="grid items-center gap-x-6 lg:grid-cols-2">
              <div className="mb-10 lg:mb-0">
                <h2 className="text-3xl font-bold dark:text-white ">
                  Want product news and updates?
                  <br />
                  <span className="text-primary dark:text-primary-400">
                    Subscribe to our newsletter
                  </span>
                </h2>
              </div>

              <div className="mb-6 flex-row md:mb-0 md:flex">
                <div
                  className="relative mb-3 w-full md:mr-3 md:mb-0 xl:w-96"
                  data-te-input-wrapper-init
                >
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="email"
                    placeholder="Enter your email"
                  />
                  <label
                    htmlFor="email"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Enter your email
                  </label>
                </div>
                <button
                  type="submit"
                  className="inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 ease-linear dark:bg-primary-400 dark:focus:ring-primary-400 dark:hover:shadow-lg dark:shadow-md dark:text-neutral-900 dark:hover:text-neutral-900 dark:hover:bg-primary-500 dark:focus:ring-offset-0 "
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
