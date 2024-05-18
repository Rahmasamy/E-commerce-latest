import { KeyboardArrowUp } from '@mui/icons-material'
import { Fab, Zoom, useScrollTrigger } from '@mui/material'



export default function ScrolltoMain() {
 
  
  return (
    <Zoom in={useScrollTrigger({threshold:500})}>
         <Fab size="small" color="primary" aria-label="add" sx={
            {
                position:"fixed",
                bottom:33,
                right:33
            }
          
         }
         onClick={() => {
          window.scrollTo(0,0) 
         }
         }
         
         >
         <KeyboardArrowUp fontSize="small"  />

      </Fab>
    </Zoom>
  )
}
