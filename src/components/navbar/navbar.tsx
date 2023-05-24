import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    Text,
    useDisclosure,
    Button,
} from '@chakra-ui/react'
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from 'next/link'

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box >
            <Box py={"25px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                <Box>
                    <Text fontSize={"30px"} fontWeight={600} color={"#DDE6ED"} >DEVSHOP</Text>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"25px"} >
                    <Link href={"/cart"}>
                        <Button colorScheme='black' variant='ghost' >
                            <FontAwesomeIcon cursor={"pointer"} color="#DDE6ED" size="xl" icon={faCartShopping} />   
                        </Button>
                    </Link>
                    <Button colorScheme='black' variant='ghost' onClick={onOpen} >
                        <FontAwesomeIcon cursor={"pointer"} color="#DDE6ED" size="xl" icon={faBars} />
                    </Button> 
                </Box>
            </Box>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size={"sm"}
            >
                <DrawerOverlay />
                <DrawerContent color={"#DDE6ED"} bg={"#121212"} >
                    <DrawerCloseButton />
                    <DrawerHeader>Navigatsiya</DrawerHeader>

                    <DrawerBody>
                        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"15px"} >
                            <Link href={"/"}>
                                <Text fontSize={"xl"} _hover={{textDecoration: "underline"}} >Yangilari</Text>
                            </Link>
                            <Link href={"/"}>
                                <Text fontSize={"xl"} _hover={{textDecoration: "underline"}} >Fulbolkalar</Text>
                            </Link>
                            <Link href={"/"}>
                                <Text fontSize={"xl"} _hover={{textDecoration: "underline"}} >Aksesuarlar</Text>
                            </Link>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </Box>
    )
}

export default Navbar