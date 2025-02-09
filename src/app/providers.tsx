import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider
      options={{ enableCssLayer: true, key: "css", prepend: true }}
    >
      <ThemeProvider theme={theme}>
        <InitColorSchemeScript attribute="class" />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
