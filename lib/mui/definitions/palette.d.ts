import "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    green: PaletteOptions["primary"];
    neutral: PaletteOptions["primary"];
  }

  interface PaletteOptions {
    green: PaletteOptions["primary"];
    neutral?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    green: true;
    neutral: true;
  }
}
