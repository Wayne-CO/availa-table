"use client";
import { cyan } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const setupTheme = createTheme({
  palette: {
    primary: cyan,
  },
  typography: {
    fontSize: 16,
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export { setupTheme };
