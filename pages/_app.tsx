import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "../theme";

const chakraTheme = extendTheme(theme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
