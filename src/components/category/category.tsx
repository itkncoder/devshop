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
                    <Text fontSize={"2xl"} color={"#DDE6ED"} fontWeight={"600"} >{title}</Text>
                    <Text fontSize={"lg"} color={"#DDE6ED"} >{desc}</Text>
                </Box>
            </Box>
            <Box my={"30px"}>
                <Swiper slidesPerView={4.2} navigation={true} modules={[Navigation]}>
                    <SwiperSlide>
                        <Box>
                            <Card img="https://merchshop.in/wp-content/uploads/2019/06/Apple-Developer-t-shirt-white.jpg" />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box>
                            <Card img="https://cdn.shopify.com/s/files/1/0604/4064/1775/products/t-shirt-mockup-of-a-bearded-man-posing-in-front-of-a-patterned-wall-m4201-r-el2.png?v=1663221938" />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box>
                            <Card img='https://images.teemill.com/ypbcmqvqg1zjwipnlkl1do3l9uvjgf4egvau3tkd6h3ns9on.png.jpg?w=1080&h=auto' />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box>
                            <Card img='https://www.swagshirts99.com/wp-content/uploads/2017/06/IMG_5247.jpg' />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box>
                            <Card img='https://www.teez.in/cdn/shop/products/Google-Developer-T-Shirt-1_1024x1024.jpg?v=1589184968' />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box>
                            <Card img='https://www.getdigital.eu/images/productsMore/__generated__resized/1100x1100/20156false_false_model.jpg' />
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Box>
    )
}

export default Category