import Banner from '../../components/banner'
import CompanyStats from '../../components/company-stats'
import LogoCarousel from './logo-carousel.tsx'
import WhatWeOffer from '../../components/what-we-offer-services/index.tsx'
import TalentHomeSection from '../../components/talent-home-section'

const Home = () => {
  return (
    <>
      <Banner />
      <LogoCarousel />
      <CompanyStats />
      <WhatWeOffer />
      <TalentHomeSection />
    </>
  )
}

export default Home
