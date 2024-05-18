
import   { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { IconButton, useTheme,Box,Typography, Stack, Container} from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import './Header1.css';
import * as React from 'react';
const options = [
  'EN',
  'AR',
];
export default function Header1() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return(
      <Box sx={{
        bgcolor:"#2B3445",
        py:"5px",
        borderBottomRightRadius:"14px"
      }
      }
      >
       <Container>
       <Stack direction={"row"} alignItems={"center"}>
        <Typography sx={{
          mr:2,
          p:"3px 10px",
          bgcolor:"#D23F57",
          borderRadius:"17px",
          fontSize:"10px",
          fontWeight:"bold",
          color:"#fff"
        }}
        variant="body2"
        >
          HOT
        </Typography>
        <Typography
        sx={{
          fontSize:"12px",
          fontWeight:300,
          color:"#fff"
        }}
        variant="body2"
        >
         Free Express Shipping 
        </Typography>
        <Box flexGrow={"1"}/>
        <div>
             {theme.palette.mode === "light" ? (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
         >
          <LightModeOutlined fontSize="small" sx={{
            // @ts-ignore
            color : theme.palette.myColor.main
          }}/>
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlined fontSize="small" sx={{
            // @ts-ignore
            color : theme.palette.text.primary
          }} />
        </IconButton>
      )}
        </div>
        <List
        component="nav"
        aria-label="Device settings"
        className="listItemLang"
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="EN"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          className="listItemLang"
        >
          <ListItemText
            
            secondary={options[selectedIndex]}
            sx={{
              color:theme.palette.text.primary
            }}
            className="listItemLang"
          />
          <ExpandMore sx={{fontSize:"16px"}}/>
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>






        <FacebookIcon
        sx={{
          fontSize:"20px",
          color:"#fff"
        }}
        />
        <TwitterIcon
         sx={{
          fontSize:"20px",
          mx:1,
          color:"#fff"
        }}
        />
        <InstagramIcon
         sx={{
          fontSize:"20px",
          color:"#fff"
        }}
        
        />
        </Stack>
       </Container>
      </Box>
       
    )
 
}
