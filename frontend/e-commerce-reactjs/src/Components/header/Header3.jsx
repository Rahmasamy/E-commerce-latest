
import { Box, Container, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, useMediaQuery } from '@mui/material'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import WindowIcon from '@mui/icons-material/Window';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@emotion/react';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import DvrIcon from '@mui/icons-material/Dvr';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './Header1.css';
import { Close, ExpandMore } from '@mui/icons-material';
import Linksx from './Linksx';
export default function Header3() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const theme=useTheme();
  return (
    <Container sx={{display:"flex",alignItems:"center",justifyContent:"space-between",mt:5}}>
      <Box>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          width:"222px",
          // @ts-ignore
          bgcolor:theme.palette.myColor.main,
          // @ts-ignore
          color:theme.palette.text.primary
        }}
      >
        <WindowIcon/>
      <Typography sx={{
        padding:"0",
        textTransform:"capitalize",
        mx:1,
      }}>
        Categories
      </Typography>
      <Box flexGrow={1}/>
        <KeyboardArrowRightIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={
        {
          // @ts-ignore
          ".MuiPaper-root":{width:222, bgcolor:theme.palette.myColor.main,}
        }
        }
      >
        
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
        <PedalBikeIcon fontSize='small'/>
        </ListItemIcon>
        <ListItemText>
            Bikes
        </ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
        <DvrIcon fontSize='small'/>
        </ListItemIcon>
        <ListItemText>
            Electronics
        </ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
        <ListItemIcon>
        <MenuBookIcon fontSize='small'/>
        </ListItemIcon>
        <ListItemText>
            Books
        </ListItemText>
        </MenuItem>
       

        <MenuItem onClick={handleClose}>
        <ListItemIcon>
        <SportsEsportsIcon fontSize='small'/>
        </ListItemIcon>
        <ListItemText>
            Games
        </ListItemText>
        </MenuItem>
       
       
       
      </Menu>
      </Box>
    
   
    {useMediaQuery('(min-width:1200px)') && (
      [{title:"Home",products:"products",Dash:"Dashoard",order:"order",prof:"profile",subLinks:["Add Product","Edit Product"]},
      {title:"Mega Menu",products:"product",Dash:"Dashoard",order:"order",prof:"profile",subLinks:["Add Product","Edit Product"]},
      {title:"Full Screen Menue",products:"product",Dash:"Dashoard",order:"order",prof:"profile",subLinks:["Add Product","Edit Product"]},
      {title:"Pages",products:"product",Dash:"Dashoard",order:"order",prof:"profile",subLinks:["Add Product","Edit Product"]},
      {title:"User Account",products:"product",Dash:"Dashoard",order:"order",prof:"profile",subLinks:["Add Product","Edit Product"]},
      {title:"Vendor Account",products:"product",Dash:"Dashoard",order:"order",prof:"profile",subLinks:["Add Product","Edit Product"]}].map( (obj) => {
        return (
          <Stack flexDirection={"row"} gap={3} alignItems={"center"}  key={obj.title}>
            <Linksx title={obj.title} list2={obj.Dash} list3={obj.products} list4={obj.order} list5={obj.prof}/>
          </Stack >
        )
      }
      )
    )
    }
    
    
      {
        useMediaQuery('(max-width:1200px)') && (
          <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
           </IconButton>
        )
      }
    
    <Drawer 
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
            sx={{".MuiPaper-root.css-1qdun2q-MuiPaper-root-MuiDrawer-paper":{height:"100%"}}} 
          >
          <Box sx={{width:444,mx:"auto",mt:6,position:"relative",pt:10}}>
            <IconButton sx={{":hover":{rotate:"180deg",transition:"0.3s",color:"red"} ,position:"absolute",top:0,right:10}} onClick={toggleDrawer("top", false)}>
              <Close/>   
            </IconButton>
     

      {
      [{mainLink:"Home",subLinks:["link1","link2","link3"]},{mainLink:"Mega menu",subLinks:["link1","link2","link3"]},
      {mainLink:"Full screen menue",subLinks:["link1","link2","link3"]},{mainLink:"Pages",subLinks:["link1","link2","link3"]}
      ,{mainLink:"User account",subLinks:["link1","link2","link3"]},{mainLink:"Vendor accoun",subLinks:["link1","link2","link3"]}].map((item) => {
        return (
          <Accordion key={item.mainLink} sx={{
            bgcolor:"initial"
          }} elevation={0}>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography>{item.mainLink}</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <List sx={{py:0,my:0}}>
        <ListItem disablePadding>
          <ListItemButton>
          
            <ListItemText primary={item.subLinks[0]} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            
            <ListItemText primary={item.subLinks[1]} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            
            <ListItemText primary={item.subLinks[2]} />
          </ListItemButton>
        </ListItem>
       
      </List>
      
      </AccordionDetails>
    </Accordion>
        )
      }
      )
      }

          </Box>
    </Drawer>


    </Container>
  )
}
