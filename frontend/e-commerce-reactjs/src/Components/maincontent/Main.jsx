import { Box, CircularProgress, Container, IconButton, Stack, Typography } from "@mui/material";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTheme } from "@emotion/react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Rating from "@mui/material/Rating";
import Dialog from "@mui/material/Dialog";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";
import { motion } from "framer-motion";
export default function Main() {
  const theme = useTheme();

 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAlignment = (event, newValue) => {
    if(newValue !==null){
      setData(newValue)
    }
   
  };
  const allProductsAPI = "products?populate=*";
  // @ts-ignore
  const menCategoryAPI = "products?populate=*&filters[cat][$eq]=man";
  // @ts-ignore
  const womenCategoryAPI = "products?populate=*&filters[cat][$eq]=woman";
  const [Data,setData]=React.useState(allProductsAPI);
  
  
  const { data, error, isLoading } = useGetproductByNameQuery(Data);
  const [clickedProduct,setClickedProduct]=React.useState({});
  console.log(data);
  console.log(error);
  console.log(isLoading);
  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container
        sx={{
          py: 11,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">
          {
            // @ts-ignore
            error.error
          }
        </Typography>

        <Typography variant="h6">Please try again later</Typography>
      </Container>
    );
  }
  
  if(data){
    return (
      <Container
        sx={{
          py: 9,
        }}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <Box>
            <ToggleButtonGroup
              value={Data}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
              sx={{
                ".Mui-selected": {
                  border: "1px solid rgba(233, 69, 96, 0.5) !important",
                  color: "#e94560 !important",
                  backgroundColor: "initial",
                },
              }}
            >
              <ToggleButton
                className="mybutton"
                value={allProductsAPI}
                aria-label="left aligned"
                color="error"
                // @ts-ignore
                sx={{ color: theme.palette.text.primary }}
              >
                All Products
              </ToggleButton>
              <ToggleButton
                className="mybutton"
                value={menCategoryAPI}
                aria-label="centered"
                sx={{
                  mx: "16px !important",
                  color:
                    // @ts-ignore
                    theme.palette.text.primary,
                }}
              >
                Men Category
              </ToggleButton>
              <ToggleButton
                className="mybutton"
                value={womenCategoryAPI}
                aria-label="right aligned"
                // @ts-ignore
                sx={{ color: theme.palette.text.primary }}
              >
                Woman Category
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Stack>
        <Stack
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {data.data.map((item) => {
            return (
              <Card
               component={motion.section}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  ":hover .MuiCardMedia-root ": {
                    rotate: "1deg",
                    scale: "1.1",
                    transition: "0.35s",
                  },
                }}
                key={item.id}
              >
            
                <CardMedia
                  sx={{ height: 277 }}
                 
                  // @ts-ignore
                  
                  image={`${item.attributes.productimg.data[0].attributes.url}`}
                  // image={`${item.attributes.productimg.data[0].attributes.url}`}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                     {item.attributes.productTitle

                     }
                    </Typography>
  
                    <Typography variant="subtitle1" component="p">
                      {item.attributes.productPrice}$
                    </Typography>
                  </Stack>
  
                  <Typography variant="body2" color="text.secondary">
                  {item.attributes.productDescription}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    sx={{ textTransform: "capitalize" }}
                    size="large"
                    onClick={() => {
                      handleClickOpen(),
                      setClickedProduct(item)

                    }
                    }
                  >
                    <ShoppingCartIcon fontSize="small" sx={{ mr: 1 }} />
                    Add to cart
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    sx={{
                      ".MuiPaper-root": {
                       minWidth:{xs:"90%",md:800}
                      }
                    }}
                  >
                <IconButton sx={{":hover":{rotate:"180deg",transition:"0.3s",color:"red"} ,position:"absolute",top:0,right:10}} 
                onClick={handleClose}>
                 <Close/>   
                 </IconButton>
                    {/* <DialogTitle id="alert-dialog-title">
                      {"Add to Cart"}
                    </DialogTitle> */}
                  <ProductDetails clickedProduct={clickedProduct}/>  
                      
                   
                  </Dialog>
                  <Button size="small">
                    <Rating
                      precision={0.1}
                      name="read-only"
                      value={item.attributes.productRating}
                      readOnly
                    />
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Stack>
      </Container>
    );
  }
  if(isLoading){
    return(
      <Typography variant="h6" color="initial">
       Loading..............
      </Typography>
    )
  }
}
