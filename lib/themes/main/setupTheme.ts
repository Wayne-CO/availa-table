"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

declare module "@mui/material/styles" {
  interface Palette {
    green: Palette["primary"];
  }

  interface PaletteOptions {
    green?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    green: true;
  }
}

const setupTheme = createTheme({
  palette: {
    green: {
      main: "#00B712",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: roboto.style.fontFamily,
  },
});

export { setupTheme };
