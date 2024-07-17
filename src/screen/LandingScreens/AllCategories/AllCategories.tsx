import { Box, Grid } from "@mui/material";
import FilterProducts from "components/FilterProducts/FilterProducts";
import ProductsByCategory from "components/ProductsByCategory/ProductsByCategory";
import { COLORS } from "constant/colors";

const AllCategoriesPage = () => {
  return (
    <Box bgcolor={COLORS.black.lightGray} py={{md:10,sm:12}} >
      <Grid container spacing={{md:4}} pt={{md:10,sm:8,xs:5}} >
        <Grid item md={3} sm={4}>
          <FilterProducts />
        </Grid>
        <Grid item md={9} sm={8}>
          <ProductsByCategory />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AllCategoriesPage;
