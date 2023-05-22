import Footer from "@/components/footer/footer"
import Navbar from "@/components/navbar/navbar"
import { Box } from "@chakra-ui/react"

const Layout = ({children}: {children: JSX.Element}) => {
    return (
        <Box bg={"#DDE6ED"} minH={"100vh"} color={"black"} >
            <Box>
                <Box shadow={"2xl"} bg={"#27374D"} >
                    <Box maxW={"1280px"} mx={"auto"} >
                        <Navbar/>
                    </Box>
                </Box>
                <Box maxW={"1280px"} mx={"auto"}>
                    {children}
                </Box>
                <Box color={"white"} shadow={"2xl"} bg={"#27374D"} >
                    <Box maxW={"1280px"} mx={"auto"} >
                        <Footer/>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout