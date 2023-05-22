import { ChakraProvider } from '@chakra-ui/react'

import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

import "@/styles/globals.css"

function App({ Component, pageProps }: {Component: any, pageProps: any}) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default App;