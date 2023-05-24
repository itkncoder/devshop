import Layout from "@/layout/layout"
import { Box, Button, Text } from "@chakra-ui/react"
import { faBasketShopping, faCartShopping, faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

const CartItem = () => {
    return (
        <Box border={"1px solid rgba(256, 256, 256, 0.1)"} bg={"#0a0a0a"} p={"10px 20px"} shadow={"2xl"} rounded={"2xl"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} >
            <Box display={"flex"} alignItems={"start"} gap={"20px"}>
                <Image priority style={{width: "100px", height: "80px", objectFit: "cover", borderRadius: "12px"}} width={120} height={120} alt='product' src={"https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg"} />
                <Box p={"10px"}>
                    <Text color={"#DDE6ED"} fontSize={"18px"} fontWeight={"600"} >Product name</Text>
                    <Text color={"#DDE6ED"} fontWeight={"600"} maxW={"200px"} overflow={"hidden"} whiteSpace={"nowrap"} textOverflow={"ellipsis"} >Narxi: $33</Text>
                </Box>
                </Box>
            <Box pr={"20px"} >
            <Button>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </Box>
        </Box>
    )
}

const Cart = () => {

    return (
        <Box>
            <Layout>
                <Box my={"50px"} >
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} my={"20px"} > 
                        <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"20px"} >
                            <Text fontSize={"2xl"} fontWeight={600} textTransform={"uppercase"} ><FontAwesomeIcon icon={faShoppingCart} /> Savatcha</Text>
                            <Button>Boshqa mahsulotlar</Button>
                        </Box>
                        <Text fontSize={"xl"} fontWeight={600}>To'liq hisob: $121</Text>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                    </Box>
                    <Box my={"25px"} display={"flex"} justifyContent={"end"} alignItems={"center"} gap={"15px"} >
                        <Button>Admin bilan bog'lanish</Button>
                        <Button display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"10px"} bg={"#27374D"} _hover={{bg: "#385b75"}} >Sotib olish!<FontAwesomeIcon icon={faCartShopping}/></Button>
                    </Box>
                </Box>
            </Layout>
        </Box>
    )
}

export default Cart