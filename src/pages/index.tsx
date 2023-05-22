import Category from "@/components/category/category"
import Slider from "@/components/slider/slider"
import Layout from "@/layout/layout"
import { Box } from "@chakra-ui/react"

const Index = () => {
    return (
        <Layout>
            <Box>
                <Slider/>
                <Box>
                    <Category title="Yangi Mahsulotlar" desc={<><span style={{fontWeight: 600}} >DEVSHOP</span> dagi eng yangilari</>} />
                    <Category title="Futbolkalar" desc={<><span style={{fontWeight: 600}} >DEVSHOP</span>dagi fulbolkalar</>} />
                    <Category title="Aksesuarlar" desc={<><span style={{fontWeight: 600}} >DEVSHOP</span>dagi Aksesuarlar</>} />
                </Box>
            </Box>
        </Layout>
    )
}

export default Index