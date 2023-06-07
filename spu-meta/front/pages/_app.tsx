import Footer from "@/components/Footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import heaven from "@next/font/local";
import { QueryClient, QueryClientProvider } from "react-query";
const mainFont = heaven({
  src: "../public/font/DB Heavent v3.2.ttf",
});

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <main className={mainFont.className}>
        {/* <Navbar /> */}
        <Component {...pageProps} />
        <Footer />
      </main>
    </QueryClientProvider>
  );
}
