import { Provider } from "react-redux";
import { wrapper } from "@/reduxtoolkit/store";
import "@/styles/globals.css";

function App({ Component, pageProps }) {

    const { store, props } = wrapper.useWrappedStore(pageProps) ;

    return (
        <Provider store={store}>
            <Component  {...props}/>
         </Provider>
    );
    
}

export default App;
