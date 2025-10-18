import TinaProvider from "../.tina/components/TinaProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TinaProvider>
      <Component {...pageProps} />
    </TinaProvider>
  );
}
