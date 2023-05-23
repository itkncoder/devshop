import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
    useDisclosure,
    Text,
    Button,
} from '@chakra-ui/react'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const Card = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box mx={"8px"} >
            <Box p={"20px 15px 20px 15px"} rounded={"2xl"} border={"1px solid rgba(256, 256, 256, 0.1)"} position={"relative"}>
                <Box>
                    <Image priority onClick={onOpen} style={{width: "100%", height: "320px", objectFit: "cover", borderRadius: "20px", cursor: "pointer"}} width={500} height={400} alt='product' src={"https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg"} />
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={"5px 5px 5px 5px"} >
                    <Box cursor={"pointer"} >
                        <Text color={"#DDE6ED"} fontSize={"lg"} fontWeight={"600"} >Product name</Text>
                        <Text color={"#DDE6ED"} maxW={"200px"} overflow={"hidden"} whiteSpace={"nowrap"} textOverflow={"ellipsis"} >Product desdfsdfscription about</Text>
                    </Box>
                    <Box mr={"5px"}>
                        <Button variant={"solid"} size={"sm"} _hover={{bg: "#202e42"}} color={"#DDE6ED"} bg={"#27374D"} >
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Button>
                    </Box>
                </Box>
                <Text bg={"#385b75"} p={"3px 10px"} color={"#DDE6ED"} rounded={"lg"} position={"absolute"} top={"28px"} right={"25px"} >100$</Text>
            </Box>


            <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={"#27374D"} >
                    <ModalHeader>Product name</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={"30px"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                        <Image priority style={{width: "100%", height: "100%", borderRadius: "20px"}} width={1500} height={1500} alt='product' src={"https://www.target.com.au/medias/static_content/product/images/full/62/32/A1766232.jpg?impolicy=product_portrait_hero"} />
                    </ModalBody>
                </ModalContent>
            </Modal>

        </Box>
    )
}

export default Card