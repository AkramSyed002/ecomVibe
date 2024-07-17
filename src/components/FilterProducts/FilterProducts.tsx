import { ChevronRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Rating,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { COLORS } from "constant/colors";
import { FEATURE_PRODUCTS } from "constant/data";
import React from "react";

const FilterProducts = () => {
  const [value, setValue] = React.useState<number[]>([0, 100]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box px={3} pt={{md:0,sm:0,xs:10}}>
      <Box display={"flex"}>
        <TextField
          type="search"
          size="small"
          placeholder="Search Products..."
          InputProps={{
            style: {
              borderRadius: "0px",
              backgroundColor: "white",
            },
          }}
          fullWidth
        />
        <Button
          size="small"
          variant="contained"
          sx={{
            ml: 1,
            borderRadius: "0px",
            minWidth: "2px",
          }}
        >
          <ChevronRight />
        </Button>
      </Box>

      <Box pt={{ md: 6,sm:4,xs:2 }}>
        <Typography fontSize={"1.4em"}>Filter by Price</Typography>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
          size="small"
          sx={{
            color: "black",
            width: "96%",
            ml: 0.7,
          }}
        />
        <Box display={"flex"} justifyContent={"space-between"}>
          <Button
            size="small"
            variant="contained"
            sx={{
              borderRadius: "0px",
              px: 2,
            }}
          >
            Filter
          </Button>
          <Typography
            fontSize={".9em"}
            fontWeight={"bold"}
            height={"20px"}
            mt={"auto"}
          >
            <small style={{ fontWeight: "lighter" }}>Price: </small>
            {`${value[0]}$ \u2013\u2013${value[1]}$`}
          </Typography>
        </Box>
        <Box py={{ md: 6 }}>
          <Typography fontSize={"1.4em"} fontWeight={"light"} pb={2}>
            Categories
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography fontWeight={"light"}>Accesories</Typography>
            <Typography fontWeight={"light"}>(7)</Typography>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"} py={2}>
            <Typography fontWeight={"light"}>Women</Typography>
            <Typography fontWeight={"light"}>(71)</Typography>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography fontWeight={"light"}>Men</Typography>
            <Typography fontWeight={"light"}>(17)</Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          background: COLORS.black.lightGray,
        }}
      >
        <Typography fontSize={"1.4em"} fontWeight={"light"} pb={2}>
          Our Best Sellers
        </Typography>

        <Box>
          {FEATURE_PRODUCTS.slice(0, 5).map((product: any) => (
            <Box py={1}>
              <Box display={"flex"} alignItems={"center"}>
                <img src={product.poster} alt="poster" height={"80px"} />
                <Box pl={1}>
                  <Typography>{product.title}</Typography>
                  <Rating
                    sx={{ color: COLORS.black.blackGray }}
                    size="small"
                    name="no-value"
                    value={null}
                  />
                  <Typography>${product.price}.00</Typography>
                </Box>
              </Box>
              <Divider sx={{ pb: 2 }} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FilterProducts;
