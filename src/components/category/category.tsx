import { Box, Text } from '@chakra-ui/react'
import Card from '../card/card'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Category = ({title, desc}: {title: string, desc: JSX.Element}) => {
    return (
        <Box my={"50px"} >
            <Box>
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} >
                    <Text fontSize={"2xl"} color={"#27374D"} fontWeight={"600"} >{title}</Text>
                    <Text fontSize={"lg"} color={"#27374D"} >{desc}</Text>
                </Box>
            </Box>
            <Box my={"30px"}>
                <Swiper slidesPerView={4} navigation={true} modules={[Navigation]}>
                    <SwiperSlide>
                        <Box>
                            <Card/>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box>
                            <Card/>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box>
                            <Card/>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box>
                            <Card/>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box>
                            <Card/>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box>
                            <Card/>
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Box>
    )
}

export default Category