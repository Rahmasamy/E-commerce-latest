import { ExpandMore, KeyboardArrowRightOutlined } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'

// eslint-disable-next-line react/prop-types
export default function Linksx({title,list2,list3,list4,list5}) {
  return (
    <Box sx={{
        ":hover .paper": {
         display:"block"
        },
        ":hover":{cursor:"pointer"},
        position:"relative","display":"flex",alignItems:"center"}} >
       <Typography variant='body1'>
        {title}
       </Typography>
      <Box  className='paper'  sx={{position:"absolute",top:"100%",minWidth:"170px",
      transform: "translateX(-50%)",left: "50%",display:"none",zIndex:20}} >
        <Paper sx={{mt:3}}>
           <nav>
           <List sx={{py:0,my:0}}>
            <ListItem disablePadding>
              <ListItemButton sx={{
                "display":"flex",p:0,px:1.5
              }}>
              
                <ListItemText primary={list2} />
              </ListItemButton>
            </ListItem>
            <ListItem  sx={{
                ":hover .show": {display:"block"},
                position:"relative"}}
            disablePadding>
              <ListItemButton sx={{
                "display":"flex",p:0,px:1.5
              }}>
                
                <ListItemText primary={list3}
                sx={{
                    "& .MuiTypography-root": {
                        fontSize:"15px",
                        fontWeight:300
                    }
                }}
                />
                <Box flexGrow={1}/>
                <KeyboardArrowRightOutlined fontSize='small'/>
              </ListItemButton>
           <Box sx={{position:'absolute',top:0,left:"100%",display:"none"}} className="show">
             <Paper sx={{ml:1,minWidth:110}}>
                   <nav>
                     <List>
                         <ListItem disablePadding>
                         <ListItemButton sx={{
                     "display":"flex",p:0,px:1.5
                   }}>
                          <ListItemText primary="Add product" />
                         </ListItemButton>
                         </ListItem>
                 
                         <ListItem disablePadding>
                         <ListItemButton sx={{
                     "display":"flex",p:0,px:1.5
                   }}>
                          <ListItemText primary="Edit Product" />
                         </ListItemButton>
                         </ListItem>
                     </List>
                   </nav>
             </Paper>
           </Box>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{
                "display":"flex",p:0,px:1.5
              }}>
                
                <ListItemText primary={list4} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{
                "display":"flex",p:0,px:1.5
              }}>
                
                <ListItemText primary={list5} />
              </ListItemButton>
            </ListItem>
           
          </List>
           </nav>
        </Paper>
      </Box >
       <ExpandMore sx={{fontSize:"16px", ml:1}}/>
     </Box>
  )
}
