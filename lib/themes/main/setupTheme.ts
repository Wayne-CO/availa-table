"use client";
import { Roboto } from "next/font/google";
import { cyan } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const setupTheme = createTheme({
  palette: {
    primary: cyan,
  },
  typography: {
    fontSize: 16,
    fontFamily: `"${roboto.style.fontFamily}, Arial, sans-serif"`,
  },
});

export { setupTheme };
