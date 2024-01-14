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

const palette = {
  green: {
    main: "#00B712",
  },
};

export default palette;
