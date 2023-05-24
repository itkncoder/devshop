import Layout from "@/layout/layout"
import { Box, Button, Input, Text } from "@chakra-ui/react"
import { CartItem } from "./cart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faShoppingCart } from "@fortawesome/free-solid-svg-icons"

const Checkout = () => {
    return (
        <Box>
            <Layout>
                <Box>
                    <Text fontSize={"2xl"} fontWeight={600} textTransform={"uppercase"} ><FontAwesomeIcon icon={faCheck} /> Chiqarib olish</Text>
                    <Box my={"50px"} display={"flex"} justifyContent={"space-between"} alignItems={"start"} >
                        <Box w={"60%"} p={"5px 25px"} >
                            <Text my={"15px"} fontSize={"2xl"} fontWeight={"600"}>To'ldiring:</Text>
                            <form>
                                <Box display={"flex"} flexDirection={"column"} gap={"25px"} >
                                    <Box>
                                        <Box>
                                            <Text my={"3px"} w={"50%"} display={"flex"} justifyContent={"start"} >Ismingiz va familiyangiz:</Text>
                                        </Box>
                                        <Box>
                                            <Input placeholder="Ism, Familiya" w={"100%"} border={"1px solid rgba(256, 256, 256, 0.1)"} variant={"filled"} />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={"15px"} >
                                            <Text my={"3px"} w={"50%"} display={"flex"} justifyContent={"start"} >Email mangilingiz:</Text>
                                            <Text my={"3px"} w={"50%"} display={"flex"} justifyContent={"start"} >Telegram Usernameingiz:</Text>
                                        </Box>
                                        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={"15px"} >
                                            <Input placeholder="Email..." w={"100%"} border={"1px solid rgba(256, 256, 256, 0.1)"} variant={"filled"} />
                                            <Input placeholder="Telegram username..." w={"100%"} border={"1px solid rgba(256, 256, 256, 0.1)"} variant={"filled"} />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Text my={"3px"} w={"50%"} display={"flex"} gap={"10px"} justifyContent={"start"} >Manzilingiz: <span style={{color: "#385b75", fontWeight: 600}}>Masalan (Toshkent, Yunusobod)</span></Text>
                                        <Box>
                                            <Input placeholder="Manzilingiz: (Toshkent, Yunusobod)" w={"100%"} border={"1px solid rgba(256, 256, 256, 0.1)"} variant={"filled"} />
                                        </Box>
                                    </Box>
                                    <Box display={"flex"} justifyContent={"end"} my={"15px"} >
                                        <Button display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"10px"} bg={"#27374D"} _hover={{bg: "#385b75"}} >Buyurtma berish<FontAwesomeIcon icon={faShoppingCart} /></Button>
                                    </Box>
                                </Box>
                            </form>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} w={"35%"} gap={"10px"} >
                            <Text fontSize={"2xl"} fontWeight={600}>Savatcha:</Text>
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </Box>
                    </Box>
                </Box>
            </Layout>
        </Box>
    )
}

export default Checkout