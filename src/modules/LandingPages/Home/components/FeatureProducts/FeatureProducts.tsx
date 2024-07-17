import { ShoppingCart } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import { COLORS } from "constant/colors";
import { FEATURE_PRODUCTS } from "constant/data";
import { LANDING_PAGES } from "constant/routes";
import { CartContext } from "context/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FeatureProducts = () => {
  const useCartContext = useContext(CartContext);
  const { handleCart } = useCartContext;
  return (
    <Box
      sx={{
        background: COLORS.black.lightGray,
        mt: 8,
        py: 1,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { md: "3em", sm: "2.5em", xs: "2em" },
          p: { md: 4, sm: 3, xs: 1 },
        }}
      >
        Featured Products
      </Typography>

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {FEATURE_PRODUCTS.map((product: any, i: number) => (
            <Grid item md={3} sm={6} xs={12} key={product.id}>
              <Link
                to={`${LANDING_PAGES.PRODUCTS_ID}/${product.id}`}
                // params:any={{ i: i }}
              >
                <Box
                  position={"relative"}
                  height={"300px"}
                  width={"100%"}
                  textAlign={"center"}
                  key={product.id}
                >
                  <Poster>
                    <img
                      width={"100%"}
                      height={"100%"}
                      src={product.poster}
                      alt={product.poster}
                    />
                  </Poster>
                  <Icon>
                    <ShoppingCart
                      sx={IconBtn}
                      onClick={() => {
                        if (product.quantity !== 0) {
                          handleCart(product, product?.quantity);
                        }
                      }}
                    />
                  </Icon>
                </Box>
              </Link>
              <Typography sx={{ pb: 1, pt: 1, fontWeight: "bold" }}>
                {product.title}
              </Typography>
              <Typography sx={{ color: COLORS.black.blackGray }}>
                {product.category}
              </Typography>
              <Typography>
                ${product.lowPrice}.00 - ${product.highPrice}.00
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureProducts;

const IconBtn = {
  right: 10,
  top: 10,
  color: COLORS.black.black,
  fontSize: "1.6em",
  position: "absolute",
  zIndex: 999,
  bgcolor: "white",
  borderRadius: "50%",
  p: "3px",
  cursor: "pointer",
  boxShadow: "2px 3px 4px gray",
  transition: "all .5s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
};

const Poster = styled.div`
  height: 300px;
  width: 100%;
  z-index: 99;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Icon = styled.div`
  height: 300px;
  width: 100%;
  position: absolute;
  background-color: rgba(179, 179, 179, 0.3);
  z-index: 111;
  opacity: 0;
  transition: all 0.7s ease;
  &:hover {
    opacity: 1;
  }
`;
