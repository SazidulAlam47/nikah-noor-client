import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { customTheme } from "./theme/customTheme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider value={customTheme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
);
