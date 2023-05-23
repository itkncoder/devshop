import Footer from "@/components/footer/footer"
import Navbar from "@/components/navbar/navbar"
import { Box } from "@chakra-ui/react"

const Layout = ({children}: {children: JSX.Element}) => {
    return (
        <Box bg={"#121212"} minH={"100vh"} color={"black"} >
            <Box>
                <Box borderBottom={"1px solid rgba(256, 256, 256, 0.1)"} mb={"30px"} >
                    <Box maxW={"1280px"} mx={"auto"} >
                        <Navbar/>
                    </Box>
                </Box>
                <Box maxW={"1280px"} mx={"auto"}>
                    {children}
                </Box>
                <Box borderTop={"1px solid rgba(256, 256, 256, 0.1)"} pt={"20px"} color={"white"} shadow={"2xl"} bg={"#121212"} >
                    <Box maxW={"1280px"} mx={"auto"} >
                        <Footer/>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout