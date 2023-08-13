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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Api from "@/Api/Api";
import { AdminInfo } from "@/reduxtoolkit/AdminInfo/AdminSlice";
import { dateNow } from "@/utils/DateNow";
import { AddDate } from "@/reduxtoolkit/DateNow/DateNowSlice";

function App({ Component, ...pageProps}) {

    const {dateNow} = pageProps ;

    const { store, props } = wrapper.useWrappedStore(pageProps);

    const queryClient = new QueryClient();

    const router = useRouter();

    const LoadUser = async ()=>{
        try {
            const {data} = await Api.Auth.authToken() ;
            store.dispatch(AdminInfo(data.user)) ;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        store.dispatch(AddDate({day:dateNow.day , date:dateNow.date})) ;

        LoadUser() ;

        const handleRouteStart = () => NProgress.start();
        const handleRouteDone = () => NProgress.done();

        NProgress.configure({ showSpinner: false });

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
                <ToastContainer
                    position="top-right"
                    pauseOnHover
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    theme="colored"
                />
            </Provider>
        </QueryClientProvider>
    );
}
App.getInitialProps = async ()=>{
    return {
        dateNow:JSON.parse(JSON.stringify(dateNow)) ,
    }
}
export default App;


