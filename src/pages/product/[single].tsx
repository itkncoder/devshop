import Category from "@/components/category/category"
import Layout from "@/layout/layout"
import { Box, Text, useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
  Button} from "@chakra-ui/react"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useRouter } from "next/router"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Single = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const router = useRouter()

    return (
        <Box>
            <Layout>
                <Box my={"50px"} >
                    <Text fontSize={"24px"} fontWeight={600} textTransform={"uppercase"} >{router.query.single}</Text>
                    <Box my={"20px"} display={"flex"} justifyContent={"start"} >
                        <Box>
                            <Swiper style={{width: "460px", padding: "0 25px"}} slidesPerView={1} navigation={true} modules={[Navigation]}>
                                <SwiperSlide style={{width: "fit-content"}}>
                                    <Box>
                                        <Image onClick={onOpen} priority style={{cursor: "pointer", width: "400px", height: "420px", objectFit: 'cover', borderRadius: "10px"}} width={600} height={6000} alt="product" src={"https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg"} />
                                    </Box>
                                </SwiperSlide>
                                <SwiperSlide style={{width: "fit-content"}}>
                                    <Box>
                                        <Image onClick={onOpen} priority style={{cursor: "pointer", width: "400px", height: "420px", objectFit: 'cover', borderRadius: "10px"}} width={600} height={6000} alt="product" src={"https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg"} />
                                    </Box>
                                </SwiperSlide>
                            </Swiper>
                        </Box>
                        <Box p={"35px 0 0 50px"} w={"50%"} >
                            <Box w={"100%"} borderBottom={"1px solid rgba(256, 256, 256, 0.1)"} pb={"15px"} display={"flex"} flexDirection={"column"} alignItems={"start"} gap={"5px"} >
                                <Text fontSize={"22px"} fontWeight={600} textTransform={"uppercase"} >{router.query.single}</Text>
                                <Text fontSize={"18px"} >Kategoriyalar: Futbolkalar</Text>
                            </Box>
                            <Box my={"20px"} display={"flex"} alignItems={"center"} gap={"5px"} >
                                <Text fontSize={"20px"} fontWeight={600} >Narxi: $30 - $40</Text>
                            </Box>
                            <Box borderBottom={"1px solid rgba(256, 256, 256, 0.1)"} pb={"25px"}>
                                <Box my={"3px"} display={"flex"} justifyContent={"space-between"} gap={"20px"} alignItems={"center"}>
                                    <Text w={"50%"} display={"flex"} justifyContent={"start"} >Rangi:</Text>
                                    <Text w={"50%"} display={"flex"} justifyContent={"start"} >Kattaligi:</Text>
                                </Box>
                                <Box display={"flex"} justifyContent={"space-between"} gap={"20px"} alignItems={"center"} >
                                    <Select bg={"#121212"} placeholder='Rangini tanlang'>
                                        <option style={{background: "#121212", color: "#DDE6ED"}} value='Oq'>Oq</option>
                                        <option style={{background: "#121212", color: "#DDE6ED"}} value='Qora'>Qora</option>
                                        <option style={{background: "#121212", color: "#DDE6ED"}} value='Yashil'>Yashil</option>
                                    </Select>
                                    <Select bg={"#121212"} placeholder='Kattaligini tanlang'>
                                        <option style={{background: "#121212", color: "#DDE6ED"}} value='xs'>xs</option>
                                        <option style={{background: "#121212", color: "#DDE6ED"}} value='sm'>sm</option>
                                        <option style={{background: "#121212", color: "#DDE6ED"}} value='md'>md</option>
                                    </Select>
                                </Box>
                            </Box>
                            <Box my={"25px"}  >
                                <Box my={"3px"} display={"flex"} justifyContent={"space-between"} gap={"20px"} alignItems={"center"}>
                                    <Text w={"50%"} display={"flex"} justifyContent={"start"} >Soni:</Text>
                                </Box>
                                <Box display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"30px"} >
                                    <NumberInput w={"75px"} defaultValue={"1"} >
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper color={"#DDE6ED"} />
                                            <NumberDecrementStepper color={"#DDE6ED"} />
                                        </NumberInputStepper>
                                    </NumberInput>
                                    <Button display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"10px"} bg={"#27374D"} _hover={{bg: "#385b75"}} >Savatga qo'shish<FontAwesomeIcon icon={faShoppingCart} /></Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box my={"50px"}>
                        <Category title="O'xshash mahsulotlar:" desc={<></>} />
                    </Box>
                </Box>
            </Layout>


            <Modal size={"lg"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={"transparent"} boxShadow={"0"} >
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton color={"#DDE6ED"} />
                    <ModalBody>
                        <Box padding={"20px"} >
                            <Image priority style={{width: "100%", height: "100%", objectFit: 'cover', borderRadius: "15px"}} width={1200} height={1200} alt="product" src={"https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg"} />
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default Single