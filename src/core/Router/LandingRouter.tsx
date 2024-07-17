import React from "react";
import { LANDING_PAGES } from "constant/routes";
import LayoutContainer from "layout/contianer/LayoutContainer";
import { Route, Routes } from "react-router-dom";
import HomePage from "screen/LandingScreens/Home/HomePage";
import AboutPage from "screen/LandingScreens/About/AboutPage";
import ContactPage from "screen/LandingScreens/Contact/ContactPage";
import AllCategoriesPage from "screen/LandingScreens/AllCategories/AllCategories";
import MenPage from "screen/LandingScreens/Men/MenPage";
import WomenPage from "screen/LandingScreens/Women/WomenPage";
import AccessoryPage from "screen/LandingScreens/Accessory/AccessoryPage";
import { ProductContainer } from "modules/LandingPages/Products/products";

const LandingRouter = () => {
  return (
    <Routes>
      <Route path={LANDING_PAGES.HOME} element={<LayoutContainer />}>
        <Route path={LANDING_PAGES.HOME} element={<HomePage />} />
        <Route path={LANDING_PAGES.HOME_PAGE} element={<HomePage />} />
        <Route path={LANDING_PAGES.ABOUT_PAGE} element={<AboutPage />} />
        <Route path={LANDING_PAGES.CONTACT_PAGE} element={<ContactPage />} />
        <Route path={LANDING_PAGES.ALL_CATEGORIES} element={<AllCategoriesPage />} />
        <Route path={LANDING_PAGES.WOMEN} element={<WomenPage />} />
        <Route path={LANDING_PAGES.MEN} element={<MenPage />} />
        <Route path={LANDING_PAGES.ACCESSORIES} element={<AccessoryPage/>} />
        <Route path={`${LANDING_PAGES.PRODUCTS_ID}/:productId`} element={<ProductContainer/>} />
      </Route>
    </Routes>
  );
};

export default LandingRouter;
