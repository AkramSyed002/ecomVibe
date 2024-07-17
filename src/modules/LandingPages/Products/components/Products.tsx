import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import  { useContext, useState } from "react";
import { FEATURE_PRODUCTS } from "constant/data";
import { useParams } from "react-router-dom";
import { COLORS } from "constant/colors";
import { CartContext } from "context/cartContext";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const Products = () => {
  const { productId }: any = useParams();
  const { inCart, handleCart } = useContext(CartContext);
  
  let productData: any = FEATURE_PRODUCTS.find(
    (p: any) => p.id === parseInt(productId)
  );
  const [quantity, setQuantity] = useState(productData?.quantity || 0);

  let productWithUpdatedQuantity = { ...productData };

  const handleInc = () => {
    setQuantity((prev: any) => prev + 1);
    productWithUpdatedQuantity = {
      ...productWithUpdatedQuantity,
      quantity: 1 + quantity,
    };
    console.log(productWithUpdatedQuantity);
  };

  const handleDec = () => {
    if (quantity > 1) {
      setQuantity((prev: any) => prev - 1);
      productWithUpdatedQuantity = {
        ...productWithUpdatedQuantity,
        quantity: quantity,
      };
    }
  };
  const productAlreadyExist = () => {
    const productExist = inCart.find(
      (e: any) => e.id === productWithUpdatedQuantity.id
    );
    if (productExist) {
      return true;
    } else {
      return false;
    }
  };

  if (!productWithUpdatedQuantity) {
    return <h2>Product not found</h2>;
  }
  return (
    <Box mt={15}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={6} sm={6} xs={12}>
            <Box
            height={{md:"600px",sm:"550px",xs:'auto'}}
            >
            <img
              src={productWithUpdatedQuantity.poster}
              alt="img"
              width={"100%"}
              height={'100%'}
              style={{
                objectFit: "cover",
              }}
            />
            </Box>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Typography color={COLORS.black.blackGray}>
              Home/ {productWithUpdatedQuantity.category} /{" "}
              {productWithUpdatedQuantity.title}
            </Typography>
            <Typography
              sx={{
                p: 2,
              }}
            >
              {productWithUpdatedQuantity.category}
            </Typography>
            <Typography
              sx={{
                fontSize: { md: "2.5em", sm: "2em", xs: "2em" },
                fontWeight: "bold",
              }}
            >
              {productWithUpdatedQuantity.title}
            </Typography>
            <Typography
              sx={{
                fontSize: { md: "1.5em", sm: "1.3em", xs: "1.2em" },
                fontWeight: "bold",
                p: 1,
              }}
            >
              ${productWithUpdatedQuantity.lowPrice}.00 - $
              {productWithUpdatedQuantity.highPrice}.00 +{" "}
              <span style={{ fontSize: ".6em", fontWeight: "lighter" }}>
                Free Shipping
              </span>{" "}
            </Typography>
            <Typography
              sx={{
                color: COLORS.black.black,
                fontStyle:'italic',
                fontWeight:100,
                p:1
              }}
            >
              Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
              mauris vitae erat consequat auctor eu in elit. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus
              condimentum sit amet a augue. Sed non neque elit sed .
            </Typography>

            <Box alignItems={"center"} py={{ md: 0, sm: 0, xs: 1 }}>
              <Box display={"flex"} alignItems={"center"} py={2} >
                {" "}
                <Typography sx={{ fontWeight: "bold" }}>Quantity:</Typography>
                <Button
                  sx={{ cursor: "pointer", color: COLORS.black.black, p: 0,width:'10px' }}
                  disableRipple
                  startIcon={
                    <ExpandLess
                      sx={{ cursor: "pointer", color: COLORS.black.black }}
                    />
                  }
                  disabled={productAlreadyExist()}
                  onClick={() => handleInc()}
                />
                <Typography fontWeight={400}>{quantity || 0}</Typography>
                <Button
                  sx={{ cursor: "pointer", color: COLORS.black.black, p: 0 ,width:'10px'}}
                  disableRipple
                  endIcon={
                    <ExpandMore
                      sx={{ cursor: "pointer", color: COLORS.black.black }}
                    />
                  }
                  disabled={productAlreadyExist()}
                  onClick={handleDec}
                />
              </Box>
              <Button
                variant="contained"
                sx={{ borderRadius: "0",width:{md:"40%",sm:"60%",xs:'80%'} }}
                disabled={quantity === 0}
                onClick={() => {
                  handleCart(productWithUpdatedQuantity, quantity);
                }}
              >
                {productAlreadyExist() ? "Remove from cart" : "Add to cart"}
              </Button>
            </Box>
            <br />
            <Divider />
            <Typography p={2}>
              Category : {productWithUpdatedQuantity.category}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </Box>
  );
};

export default Products;
