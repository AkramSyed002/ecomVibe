import React from 'react'
import OffersCards from '../../components/OfferCard/OffersCards'
import Header from '../../components/Header/Header'
import FeatureProducts from '../../components/FeatureProducts/FeatureProducts'
import TimeOffers from '../../components/TimeOffers/TimeOffers'
import { Divider } from '@mui/material'
import LimitOfferCards from '../../components/LimtOfferCards/LimitOfferCards'

const HomeContainers = () => {
  return (
    <div>
      <Header/>
      <OffersCards/>
      <FeatureProducts/>
      <Divider/>
      <TimeOffers bgImage={`url(https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/banner-03.jpg)`}/>
      <LimitOfferCards/>
    </div>
  )
}

export default HomeContainers
