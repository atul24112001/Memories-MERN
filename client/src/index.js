import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import App from "./App"
import { Store } from "./store";

const theme = createTheme({
    palette: {
        primary: {
            main: "#fe4237",
        },
        secondary: {
            main: "#689775",
        },
        warning: {
            main: "#ad8174",
        }
    },
})

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <ThemeProvider theme={theme}>
        <Provider store={Store}>
            <App />
        </Provider>
    </ThemeProvider>
);

// ReactDOM.render(
//     <ThemeProvider theme={theme}>
//         <Provider store={Store}>
//             <App />
//         </Provider>
//     </ThemeProvider>,
//     document.getElementById("root"));