import Footer from "@/components/footer/footer"
import Navbar from "@/components/navbar/navbar"
import { Box } from "@chakra-ui/react"

const Layout = ({children}: {children: JSX.Element}) => {
    return (
        <Box bg={"#121212"} minH={"100vh"} color={"#DDE6ED"} >
            <Box>
                <Box borderBottom={"1px solid rgba(256, 256, 256, 0.1)"} mb={"30px"} >
                    <Box maxW={"1280px"} mx={"auto"} >
                        <header>
                            <Navbar/>
                        </header>
                    </Box>
                </Box>
                <Box maxW={"1280px"} mx={"auto"}>
                    <main>
                        {children}
                    </main>
                </Box>
                <Box borderTop={"1px solid rgba(256, 256, 256, 0.1)"} pt={"20px"} color={"white"} bg={"#121212"} >
                    <Box maxW={"1280px"} mx={"auto"} >
                        <footer>
                            <Footer/>
                        </footer>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout