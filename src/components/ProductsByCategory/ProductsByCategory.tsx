import { Box, Typography } from "@mui/material";
import FeatureProducts from "modules/LandingPages/Home/components/FeatureProducts/FeatureProducts";
import { useLocation } from "react-router-dom";

const ProductsByCategory = () => {
  const { pathname } = useLocation();
  return (
    <Box bgcolor={"white"} py={{ md: 7,sm:4,xs:2 }} px={2}>
      <Typography fontSize={"medium"} color={"gray"}>
        Home / {`${pathname.charAt(1).toUpperCase()}${pathname.slice(2)}`}
      </Typography>
      <FeatureProducts />
    </Box>
  );
};

export default ProductsByCategory;
