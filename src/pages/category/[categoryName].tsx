import Card from "@/components/card/card"
import Layout from "@/layout/layout"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
    Select,
    Button,
  } from '@chakra-ui/react'
import { faFilter, faList } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const CategoryName = () => {

    const router = useRouter()

    return (
        <Box>
            <Layout>
                <Box>
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} my={"50px"} >
                        <Box >
                            <Text display={"flex"} justifyContent={"start"} alignItems={"center"} gap={"10px"} fontWeight={600} fontSize={"2xl"} ><FontAwesomeIcon icon={faList} /> Kategoriya: {router.query.categoryName}</Text>
                        </Box>
                        <Box>
                            <Select bg={"#121212"} placeholder='Filter'>
                                <option style={{background: "#121212", color: "#DDE6ED"}} value='xs'>Eng yangi</option>
                                <option style={{background: "#121212", color: "#DDE6ED"}} value='sm'>Eng eski</option>
                                <option style={{background: "#121212", color: "#DDE6ED"}} value='md'>Eng qimmat</option>
                                <option style={{background: "#121212", color: "#DDE6ED"}} value='md'>Eng arzon</option>
                                <option style={{background: "#121212", color: "#DDE6ED"}} value='md'>Eng mashxur</option>
                            </Select>
                        </Box>
                    </Box>
                    <Box my={"50px"} >
                        <Box display={"flex"} gap={"20px 0"} justifyContent={"center"} alignItems={"center"} flexFlow={"row wrap"} >
                            <Card img="https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg" />
                            <Card img="https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg" />
                            <Card img="https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg" />
                            <Card img="https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg" />
                            <Card img="https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg" />
                            <Card img="https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg" />
                            <Card img="https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg" />
                            <Card img="https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg" />
                            <Card img="https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg" />
                            <Card img="https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg" />
                            <Card img="https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg" />
                            <Card img="https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg" />
                        </Box>
                    </Box>
                    <Box my={"35px"} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"8px"} >
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"10px"} >
                            <Button bg={"#0a0a0a"} border={"1px solid rgba(256, 256, 256, 0.1)"} >1</Button>
                            <Button>2</Button>
                            <Button>3</Button>
                            <Button>4</Button>
                        </Box>
                    </Box>
                </Box>
            </Layout>
        </Box>
    )
}

export default CategoryName