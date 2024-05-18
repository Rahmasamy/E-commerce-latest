

import Header1 from './Components/header/Header1';
import './App.css';
import Header2 from './Components/header/Header2';
import Header3 from './Components/header/Header3';

// import Typography from "@mui/material/Typography";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Outlet } from "react-router-dom";
import Hero from './Components/hero/Hero';
import Main from './Components/maincontent/Main';
// @ts-ignore
import Footer from './Components/footer/Footer';
import ScrolltoMain from './scroll/ScrolltoMain';
// import IconSection from './Components/hero/IconSection';
function App() {
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
       <ThemeProvider 
// @ts-ignore
       theme={theme}>
       <CssBaseline />
       <Header1/>
       <Header2/>
       <Header3/>
       <Box bgcolor={theme.
// @ts-ignore
       palette.bg.main}>
        <Hero/>
        <Main/>
        <Footer/>
       </Box >
        <ScrolltoMain/>
       <Outlet />
       </ThemeProvider>
     
      </ColorModeContext.Provider>
      
   
  )
}

export default App
