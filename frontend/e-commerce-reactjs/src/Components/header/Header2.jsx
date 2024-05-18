import { Container, IconButton, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import PersonIcon from "@mui/icons-material/Person";
import Badge from '@mui/material/Badge';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import * as React from 'react';
import { ExpandMore } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
const options = [
  'All Categories',
  'Cars',
  'Clothes',
  'Electronics'
  
];


const Search = styled("div")(({ theme }) => ({
  flexGrow:"0.4",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border:"1px solid gray",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: "150px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "200px",
  },
  [theme.breakpoints.down("sm")]: {
    display:"none"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
export default function Header2() {
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
  const theme=useTheme();
  return (
    <Container sx={{ my: 3, display: "flex",justifyContent:"space-between" }}>
      <Stack alignItems={"center"}>
        <ShoppingCartIcon />
        <Typography variant="body2">E-commerce</Typography>
      </Stack>
      {/********************************************/}
      <Search sx={{
        borderRadius:"22px",
        display:"flex",
        justifyContent:"space-between"
      }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <div>
        <List
          component="nav"
          aria-label="Device settings"
          // @ts-ignore
          sx={{ bgcolor: theme.palette.myColor.main,
          borderBottomRightRadius:"22px",
          borderTopRightRadius:"22px",
          // @ts-ignore
          
          p:"5px",
          }}
        >
          <ListItemButton
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
             
              secondary={options[selectedIndex]}
              // @ts-ignore
              sx={{ color : theme.palette.text.primary,width:80,textAlign:"center","&:hover":{cursor:"pointer"}}}
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
              sx={{fontSize:"11px"}}
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
       </div>
      </Search>
      {/********************************************/}
      <Stack direction={"row"} alignItems={"center"} gap={"6px"}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <IconButton>
          <PersonIcon />
        </IconButton>
      </Stack>




    
    </Container>
  );
}
