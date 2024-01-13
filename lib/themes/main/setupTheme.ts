"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const setupTheme = createTheme({
  palette,
  typography: {
    fontSize: 16,
    fontFamily: roboto.style.fontFamily,
  },
});

export { setupTheme };
