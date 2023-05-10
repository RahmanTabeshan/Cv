import { Provider } from "react-redux";
import { wrapper } from "@/reduxtoolkit/store";
import "@/styles/globals.css";
import Head from "next/head";
import Setting from "@/components/Settinge/Setting";

function App({ Component, pageProps }) {

    const { store, props } = wrapper.useWrappedStore(pageProps) ;

    return (
        <>
        <Head>
            <title>Rahman Tabeshan</title>
        </Head>
        <Setting />
        <Provider store={store}>
            <Component  {...props}/>
         </Provider>
        </>
        
    );
    
}

export default App;
