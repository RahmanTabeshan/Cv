import { Provider } from "react-redux";
import { wrapper } from "@/reduxtoolkit/store";
import "@/styles/globals.css";
import Head from "next/head";
import Setting from "@/components/Settinge/Setting";
import { QueryClient, QueryClientProvider } from "react-query";

function App({ Component, pageProps }) {
    const { store, props } = wrapper.useWrappedStore(pageProps);
    const queryClient = new QueryClient();

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
