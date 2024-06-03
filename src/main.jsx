import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { customTheme } from "./theme/customTheme.js";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider.jsx";
import "react-day-picker/dist/style.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider value={customTheme}>
            <QueryClientProvider client={queryClient}>
                <HelmetProvider>
                    <AuthProvider>
                        <RouterProvider router={router} />
                        <ToastContainer />
                        <Toaster />
                    </AuthProvider>
                </HelmetProvider>
            </QueryClientProvider>
        </ThemeProvider>
    </StrictMode>
);
