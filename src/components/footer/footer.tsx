import { Box, Text } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <Box py={"35px"} >
            <Box>
                <Box>
                    <Box>
                        <Text fontWeight={600} my={"3px"} >Kategoriyalar:</Text>
                        <a href="/"><Text _hover={{textDecoration: "underline"}}>Yangilari</Text></a>
                        <a href="/"><Text _hover={{textDecoration: "underline"}}>Futbolkalar</Text></a>
                        <a href="/"><Text _hover={{textDecoration: "underline"}}>Aksesuarlar</Text></a>
                    </Box>
                </Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                <Text color={"#DDE6ED"} fontSize={"18px"} >© Copyright {new Date().getFullYear()} | devshop.uz</Text>
                <Box>
                    <Text my={"3px"} fontSize={"lg"} fontWeight={"600"} color={"#DDE6ED"} >Bizga qo'shiling</Text>
                    <Box display={"flex"} flexDirection={"column"} >
                        <a href="/"><Text _hover={{textDecoration: "underline"}}>Telegram</Text></a>
                        <a href="/"><Text _hover={{textDecoration: "underline"}}>Instagram</Text></a>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer