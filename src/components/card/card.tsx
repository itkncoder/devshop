import {
    Box,
    Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({img}: {img: string}) => {
    return (
        <Link href={"/product/t-shirt"}>
            <Box bg={"#0a0a0a"} p={"20px"} shadow={"2xl"} rounded={"2xl"} mx={"8px"} border={"1px solid rgba(256, 256, 256, 0.1)"} >
                <Box position={"relative"}>
                    <Box display={"flex"} justifyContent={"center"} >
                        <Image priority style={{width: "250px", height: "320px", objectFit: "cover", borderRadius: "12px", cursor: "pointer"}} width={500} height={400} alt='product' src={img} />
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} p={"5px 5px 5px 5px"} >
                        <Text color={"#DDE6ED"} textAlign={"center"} fontSize={"18px"} fontWeight={"600"} >Product name</Text>
                        <Text color={"#DDE6ED"} textAlign={"center"} maxW={"200px"} overflow={"hidden"} whiteSpace={"nowrap"} textOverflow={"ellipsis"} >$33</Text>
                    </Box>
                </Box>
            </Box>
        </Link>
    )
}

export default Card