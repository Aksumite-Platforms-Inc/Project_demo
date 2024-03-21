import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCartContext } from "../../Context/CartContext";
import { useEffect } from "react";

function Toast() {
  const {
    state: { toasts },
  } = useCartContext();
  //create a reference to the toast to only run the useEffect when the toasts change
  const toastRef = toasts;
  useEffect(() => {
    if (!toasts) return;

    const notify = () => {
      if (toasts.open) {
        if (toasts.type === "success") {
          toast.success(toasts.message);
        } else {
          toast.error(toasts.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
        toasts.open = false;
      }
    };
    notify();
  }, [toasts]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
        reference={toastRef}
      />
    </>
  );
}

export default Toast;
