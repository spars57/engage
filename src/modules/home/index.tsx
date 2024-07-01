import Banner from '../../components/banner'
import Services from '../../components/services'
import LogoCarousel from './logo-carousel.tsx'
import WhatWeOffer from '../../components/what-we-offer-services/index.tsx'

const Home = () => {
  return (
    <>
      <Banner />
      <LogoCarousel />
      <Services />
      <WhatWeOffer />
    </>
  )
}

export default Home
