import { Bounce, toast } from "react-toastify";
import formatFirebaseError from "../utils/formatFirebaseError";

const displayError = (error) => {
    toast.error(formatFirebaseError(error), {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
};

export default displayError;