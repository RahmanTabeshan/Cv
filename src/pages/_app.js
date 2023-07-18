import { Provider } from "react-redux";
import { wrapper } from "@/reduxtoolkit/store";
import "@/styles/globals.css";
import Head from "next/head";
import Setting from "@/components/Settinge/Setting";
import { QueryClient, QueryClientProvider } from "react-query";
import NProgress from "nprogress";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "nprogress/nprogress.css";

function App({ Component, pageProps }) {
    
    const { store, props } = wrapper.useWrappedStore(pageProps);
    const queryClient = new QueryClient();
    const router = useRouter() ;
  
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();
    
    NProgress.configure({showSpinner : false})

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);
 
    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <Head>
                <title>Rahman Tabeshan</title>
            </Head>
            <Setting />
            <Provider store={store}>
                <Component {...props} />
            </Provider>
        </QueryClientProvider>
    );
}

export default App;
