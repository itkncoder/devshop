import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import Image from "next/image";
import { Box, Button, Text } from "@chakra-ui/react";

const SliderItem = () => {
    return (
        <Box cursor={"grab"} position={"relative"}>
            <Box w={"100%"} px={"55px"} >
                <Box shadow={"2xl"} rounded={"150px"} >
                    <Image alt={"product"} width={1280} style={{width: "100%", height: "600px", objectFit: "cover", borderRadius: "40px"}} height={1000} priority src={"https://themes.3rdwavemedia.com/wp-content/uploads/2018/11/top-10-programming-tshirts-for-developers.jpg"} />
                </Box>
            </Box>
            <Box p={'20px'} position={"absolute"} zIndex={"2"} bottom={"80px"} left={"100px"} >
                <Box>
                    <Text color={"#DDE6ED"} fontSize={"26px"} fontWeight={600} >Developer T-shirt</Text>
                    <Text color={"#DDE6ED"} opacity={".9"} fontSize={"18px"} maxW={"550px"} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quaerat atque deserunt.</Text>
                </Box>
                <Box mt={"20px"}>
                    <Button variant={"solid"} color={"#DDE6ED"} rounded={"lg"} _hover={{bg: "#27374D"}} size={"lg"} bg={"#385b75"} py={"10px"} height={"fit-content"} px={"70px"} >To'liq</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default function Slider() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <SliderItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem/>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem/>
                </SwiperSlide>
            </Swiper>
        </>
    );
}