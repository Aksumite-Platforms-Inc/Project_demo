import { useCartContext } from "../../../Context/CartContext";

function WelcomeBanner() {
  const {
    state: { user },
  } = useCartContext();
  return (
    <div className="relative bg-indigo-200 dark:bg-indigo-500 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block"></div>

      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">
          Good afternoon, {user.username}. 👋
        </h1>
        <p className="dark:text-indigo-200">
          Here is your dashboard. You can manage your products, orders, and
          customers. for more information, you can check the documentation.
          <a
            href="https://www.aksumite.com"
            className="text-indigo-600 hover:underline"
          >
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
