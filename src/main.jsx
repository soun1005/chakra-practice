import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// extend the theme
const colors = {
    custom: {
        900: "#0d203f",
        800: "#163669",
        700: "#1f4b93",
        600: "#2861be",
        500: "#417ad7",
        400: "#6c98e0",
    },
};

const fonts = {
    body: "Tahoma",
    heading: "Courier New",
};

const theme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
