import { Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
export default function IconSection() {
    const theme = useTheme();
  return (
    <Container
    sx={{ mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}
    >
      <Stack direction={"row"} alignItems={"center"} sx={{flexWrap:"wrap"}}
        divider={
            useMediaQuery("(min-width:600px)") ? (
              <Divider orientation="vertical" flexItem />
            ) : null
          }
        // justifyContent={useMediaQuery('(min-width:600px)') ? "center" :"left"}
        
      
      >
       <MyBox icon={<ElectricBoltIcon/>}title={"Fast Delivery"}
          subTitle={"Start from $10"}/>
       <MyBox icon={<CreditScoreOutlinedIcon/>} title={"Money Guarantee"}
          subTitle={"7 Days Back"}/>
       
       <MyBox icon={<WorkspacePremiumOutlinedIcon/>}  title={"365 Days"}
          subTitle={"For free return"}/>
       
       <MyBox icon={<AccessAlarmOutlinedIcon/>} title={"Payment"}
          subTitle={"Secure system"}/>
       
      </Stack>
    </Container>
  )
}


// eslint-disable-next-line react/prop-types
const MyBox=({icon,title,subTitle})=> {
  const theme = useTheme();
  return (
    <Box
    sx={{
        width:200,
        display:"flex",
        flexGrow:1,
        alignItems:"center",
        gap:3,
        py:1.6,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
    }}
    
    
    
    >
     {icon} 
    
     <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="body1"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  )
}

