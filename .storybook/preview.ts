import type { Preview } from "@storybook/react";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

/* TODO: update import for your custom Material UI themes */
import theme from "../lib/mui/themes/main";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true, // Adds the description and default columns
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withProvider = withThemeFromJSXProvider({
  themes: {
    // Provide your custom themes here
    main: theme,
  },
  defaultTheme: "main",
  GlobalStyles: CssBaseline,
  Provider: ThemeProvider,
});

const preview: Preview = {
  parameters,

  decorators: [
    // @ts-expect-error Not sure about this error.
    withProvider,
  ],
};

export default preview;
