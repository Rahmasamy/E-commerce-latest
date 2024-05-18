import { Box, Button, Container, Link, Stack, Typography } from '@mui/material'
// @ts-ignore
import hero3 from '../../imgs/hero3.jpg';
// @ts-ignore
import hero4 from '../../imgs/hero4.jpg';
import { ArrowForward } from '@mui/icons-material';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// @ts-ignore
import hero1 from '../../imgs/hero1.jpg';
// @ts-ignore
import hero2 from '../../imgs/hero2.jpg';
import './styles.css';
import IconSection from './IconSection';
export default function Hero() {
  return (
    <Container>
      
     <Box sx={{pt:2,mt:2.5,display:"flex",alignItems:"center",gap:2}}>
       <Swiper
         pagination={{
           dynamicBullets: true,
         }}
         loop={true}
         modules={[Pagination]}
         className="mySwiper"
         
       >
         <SwiperSlide className='parent-two-slider'><img src={hero1} alt="" height={500}  className='img2slider' />
         <Box position={"absolute"} left={"9%"} textAlign={"left"}>
           <Typography
           sx={{color:"#704264",textShadow:"1px 1px #fff"}}
           variant='h5'
           
           >
           LIFE STYLE COLLECTION
           </Typography>
           <Typography
           sx={{
             fontWeight:400,
             color:"#FBF3D5",
             my:1
           }}
           variant='h3'
           >
           Skin Care Products
      
      
           </Typography>
           <Stack
           sx={{
             
             justifyContent:{xs:"center",sm:"left"}
           }}
           direction={"row"}
           alignItems={"center"}
           >
           <Typography
           variant='h4'
           mr={1}
          
           >
             Sale Up To 
           </Typography>
           <Typography
           variant='h4'
           color={"#FBF3D5"}
           >
             30% OFF
           </Typography>
           </Stack>
           <Typography
           sx={{
             color:"#704264",
             fontWeight:300,
             my:1
           }}
           variant='body1'
           
           >
           Feel free for shipping on orders over 99.00$
           </Typography>
           <Button
              sx={{
               px: 5,
               py: 1,
               mt: 2,
               backgroundColor: "#151515",
               boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
               color: "#fff",
               borderRadius: "1px",
               "&:hover": {
                 bgcolor: "#b31b34",
                 boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
               },
             }}
             variant="contained"
           
           
           
           
           >
             Shop Now 
           </Button>
         </Box>
         </SwiperSlide>
         <SwiperSlide className='parent-two-slider'><img src={hero2} alt="" height={500} className='img2slider'/>
         <Box position={"absolute"} left={"9%"} textAlign={"left"}>
           <Typography
           sx={{color:"#704264",textShadow:"1px 1px #fff"}}
           variant='h5'
           
           >
           LIFE STYLE COLLECTION
           </Typography>
           <Typography
           sx={{
             fontWeight:400,
             color:"#FBF3D5",
             my:1
           }}
           variant='h3'
           >
           Clothes
      
      
           </Typography>
           <Stack
           sx={{
             justifyContent:{xs:"center",sm:"left"}
           }}
           direction={"row"}
           alignItems={"center"}
           >
           <Typography
           variant='h4'
           mr={1}
           color={"#ab0000"}
           sx={{
           textShadow:"1px 1px #fadfc3f0"
           }}
           >
             Sale Up To 
           </Typography>
           <Typography
           variant='h4'
           color={"#FBF3D5"}
           >
             30% OFF
           </Typography>
           </Stack>
           <Typography
           sx={{
             color:"#FBF3D5", 
             fontWeight:300,
             my:1
           }}
           variant='body1'
           
           >
           Feel free for shipping on orders over 99.00$
           </Typography>
           <Button
              sx={{
               px: 5,
               py: 1,
               mt: 2,
               backgroundColor: "#151515",
               boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
               color: "#fff",
               borderRadius: "1px",
               "&:hover": {
                 bgcolor: "#b31b34",
                 boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
               },
             }}
             variant="contained"
           
           
           
           
           >
             Shop Now 
           </Button>
         </Box>
         </SwiperSlide>
         
         
        
       </Swiper>
       
       <Box sx={{display:{xs:"none",md:"block"}}}>
         <Box position={"relative"} sx={{objectFit:"cover"}} >
           <img src={hero3} alt="hhh" width={"100%"} height={292} 
           
           />
           <Stack  sx={{position:"absolute",top:"50%",transform:"translateY(-50%)",left:33}}>
             <Typography
             
             variant='caption'
             sx={{
               color:"#fff",
               fontSize:"21px",
               fontWeight:"800",
               textShadow:"1px 1px  #D6DAC8"
             }}
             >
               New Arrivals
             </Typography>
             <Typography
              variant='h6'
              sx={{
                color:"#fff",
                lineHeight:"16px",
                fontWeight:"800",
                textShadow:"1px 1px #D6DAC8",
                mt:1
              }}
             
             
             
             >
             Summer 
             </Typography>
             <Typography
             variant='caption'
             sx={{
               color:"#fff",
               fontSize:"19px",
               fontWeight:"800",
               textShadow:"1px 1px #D6DAC8"
             }}
             
             >
               Salles up to 20% 
             </Typography>
             <Link
             sx={{
               color:"#fff",
               display:"flex",
               alignItems:"center",
               gap:"5px",
               transition:"0.2s",
               "&:hover":{
                 color:"red"
      
               },
               fontWeight:"800",
               textShadow:"1px 1px #D6DAC8"
             }} 
             href="#"
             underline='none'
             >
             Shop Now
             <ArrowForward
             sx={{
               fontSize:"16px",
               fontWeight:"800",
               textShadow:"1px 1px #D6DAC8"
             }}
             />
      
             </Link>
           </Stack>
         </Box>
         <Box sx={{objectFit:"cover"}} position={"relative"}>
           <img src={hero4} alt="hhh" width={333} height={239} />
           <Stack  sx={{position:"absolute",top:"50%",transform:"translateY(-50%)",left:33}}>
             <Typography
             
             variant='caption'
             sx={{
               color:"#fff",
               fontSize:"21px",
               fontWeight:"800",
               textShadow:"1px 1px #D6DAC8"
             }}
             >
               Gaming 4k
             </Typography>
             <Typography
              variant='h6'
              sx={{
                color:"#fff",
                lineHeight:"16px",
                fontWeight:"800",
                textShadow:"1px 1px #D6DAC8",
                mt:1
              }}
             
             
             
             >
             Desktops&
             
             </Typography>
             <Typography
             variant='caption'
             sx={{
               color:"#fff",
               fontSize:"19px",
               fontWeight:"800",
               textShadow:"1px 1px #D6DAC8"
             }}
             
             >
               LAPTOPS 
             </Typography>
             <Link
             sx={{
               color:"#fff",
               display:"flex",
               alignItems:"center",
               gap:"5px",
               transition:"0.2s",
               "&:hover":{
                 color:"red"
      
               },
               fontWeight:"800",
               textShadow:"1px 1px #D6DAC8"
             }} 
             href="#"
             underline='none'
             >
             Shop Now
             <ArrowForward
             sx={{
               fontSize:"16px",
               fontWeight:"800",
               textShadow:"1px 1px #D6DAC8"
             }}
             />
      
             </Link>
           </Stack>
         </Box>
       </Box>
     </Box>
      <IconSection/>
    </Container>
  )
}
