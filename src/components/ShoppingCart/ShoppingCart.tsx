import { Close, ShoppingBag } from "@mui/icons-material";
import { Badge, Box, Drawer, Typography } from "@mui/material";
import CommonButton from "components/Buttons/CommonButton";
import { COLORS } from "constant/colors";
import { LANDING_PAGES } from "constant/routes";
import { CartContext } from "context/cartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ShoppingCart = (props: any) => {
  const { open, setOpen } = props || {};
  const toggleSlider = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  const handleClose = () => setOpen(false);
  const { inCart, setInCart } = useContext(CartContext);
  const handleRemoveIndividualPro = (removPro: any) => {
    const removeItemFromCart = inCart?.filter(
      (item: any) => item?.id !== removPro?.id
    );
    setInCart(removeItemFromCart);
  };

  const PRODUCTS_IN_CART = inCart;
  const totalPrice: any = PRODUCTS_IN_CART?.reduce(
    (initial: any, current: any) =>
      initial + current.lowPrice * current?.quantity,
    0
  );

  return (
    <Box>
      <StyledBadge badgeContent={inCart?.length} showZero>
        <ShoppingBag onClick={toggleSlider} />
      </StyledBadge>
      <Drawer open={open} anchor="right" onClose={handleClose} sx={{}}>
        <Box
          component={"div"}
          className="flex"
          p={2}
          borderBottom={"1px solid gray"}
        >
          <Typography>Shopping Cart</Typography>
          <Close
            color="error"
            sx={{ cursor: "pointer" }}
            onClick={handleClose}
          />
        </Box>
        <Box
          component="div"
          className="flex column"
          sx={{
            width: {md:450,sm:450,xs:310},
            height: "100%",
            position: "relative",
          }}
        >
          <Box flexGrow={1} height={"96%"} bgcolor={COLORS.black.lightGray}>
            {!PRODUCTS_IN_CART.length ? (
              <Box
                height={"100%"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Typography>Your Cart is empty</Typography>
              </Box>
            ) : (
              <Box
                component={"div"}
                height={"54svh"}
                sx={{
                  overflowY: "scroll",
                }}
              >
                {PRODUCTS_IN_CART?.map((product: any) => (
                  <Box py={1}>
                    <Box display={"flex"} alignItems={"center"} p={"0em 1em"}>
                      <img src={product?.poster} alt="poster" height={"80px"} />
                      <Box component={"nav"} className="flex" flexGrow={1}>
                        <Box pl={1}>
                          <Typography>{product?.title}</Typography>
                          <Typography>
                            {product?.quantity} x ${product?.lowPrice}.00
                          </Typography>
                        </Box>
                        <Close
                          color="error"
                          sx={{
                            width: "25px",
                            height: "25px",
                            border: "2px solid red",
                            borderRadius: "50%",
                            cursor: "pointer",
                            "&:hover": {
                              bgcolor: "red",
                              color: "white",
                            },
                          }}
                          onClick={() => handleRemoveIndividualPro(product)}
                        />
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
          <Box pb={2} >
            {!PRODUCTS_IN_CART.length ? (
              <Box textAlign={"center"} px={2} pt={2}  borderTop={"1px solid gray"}>
                <CommonButton
                  title="Continue Shopping"
                  width="100%"
                  bColor="blue"
                  onClick={() => {
                    navigate(LANDING_PAGES.ALL_CATEGORIES);
                    setOpen(false);
                  }}
                />
              </Box>
            ) : (
              <Box component={"div"} className="flex column">
                <Box>
                  <Box
                    component={"div"}
                    className="flex"
                    p={2}
                    borderBottom={"1px solid gray"}
                    borderTop={"1px solid gray"}
                  >
                    <Typography>Subtotal:</Typography>
                    <Typography>$ {totalPrice}.00</Typography>
                  </Box>
                  <Box textAlign={"center"} my={2} px={2}>
                    <CommonButton
                      title="View Cart"
                      width="100%"
                      bColor="blue"
                    />
                  </Box>
                  <Box textAlign={"center"} px={2}>
                    <CommonButton title="Checkout" width="100%" bColor="blue" />
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default ShoppingCart;
const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -1,
    top: 2,
    color: COLORS.black.black,
    backgroundColor: COLORS.light.white,
    fontWeight: 700,
    fontSize: "12px",
    borderRadius: "50%",
    width: "18px",
    height: "20px",
    border: "1px solid gray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
