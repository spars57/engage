import { Container } from '@mui/material'
import Banner from '../../components/banner'
import Companies from '../../components/companies'
import Services from '../../components/services'
import { isMobile } from '../../utils/is-mobile'

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Banner />
      <Companies />
      <Services triggeringPoint={isMobile() ? 800 : 1100} />
    </Container>
  )
}

export default Home
