import "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    green: PaletteOptions["main"];
    red: PaletteOptions["main"];
    gray: PaletteOptions["main"];
    neutral: PaletteOptions["main"];
  }

  interface PaletteOptions {
    green: PaletteOptions["main"];
    red: PaletteOptions["main"];
    gray: PaletteOptions["main"];
    neutral?: PaletteOptions["main"];
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
    gray: true;
  }
}
