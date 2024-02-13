"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import palette from "./palette";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const setupTheme = createTheme({
  palette,
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export { setupTheme };
