import "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    green: PaletteOptions["primary"];
    neutral: PaletteOptions["primary"];
    red: PaletteOptions["primary"];
    grey: PaletteOptions["primary"];
  }

  interface PaletteOptions {
    green: PaletteOptions["primary"];
    red: PaletteOptions["primary"];
    neutral?: PaletteOptions["primary"];
    grey?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    green: true;
    neutral: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    red: true;
    grey: true;
  }
}
