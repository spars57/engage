import JoanaPerez from '../../assets/agents/joana-perez.jpg'

import AngiCosta from '../../assets/agents/angi-costa.jpg'
import MadalenaAragao from '../../assets/agents/madalena-aragão.jpg'
import MafaldaCreative from '../../assets/agents/mafalda-creative.jpg'
import Marble from '../../assets/agents/marble.jpg'
import MarianaBossy from '../../assets/agents/mariana-bossy.jpg'
import MiaGomes from '../../assets/agents/mia-gomes.jpg'
import MoveMind from '../../assets/agents/move-mind.jpg'
import Numeiro from '../../assets/agents/numeiro.jpg'

type InfluencersMapperItem = {
  name: string
  image70Opacity: string
  image100Opacity: string
  instagramUrl?: string
  linkedInUrl?: string
  facebookUrl?: string
  youtubeUrl?: string
  twitterUrl?: string
  tiktokUrl?: string
}

export type InfluencersMapper = InfluencersMapperItem[]

const Mapper: InfluencersMapper = [
  {
    name: 'Joana Perez',
    image70Opacity: JoanaPerez,
    image100Opacity: JoanaPerez,
    instagramUrl: 'https://www.instagram.com/a.joana.perez/',
    tiktokUrl: 'https://www.tiktok.com/@joana.perez',
    youtubeUrl: 'https://www.youtube.com/@joana_perez',
  },
  {
    name: 'Mafalda Creative',
    image70Opacity: MafaldaCreative,
    image100Opacity: MafaldaCreative,
  },
  {
    name: 'Mariana Bossy',
    image70Opacity: MarianaBossy,
    image100Opacity: MarianaBossy,
  },
  {
    name: 'Beatriz Albergaria',
    image70Opacity:
      'https://yt3.googleusercontent.com/yEL7TT5517cvwtsIq9NJO2RpeqcORQ3UvXxLck3TX_DvoRHcIdb6qWzp5vQBXZq1U2UpAODKHQ=s900-c-k-c0x00ffffff-no-rj',
    image100Opacity:
      'https://yt3.googleusercontent.com/yEL7TT5517cvwtsIq9NJO2RpeqcORQ3UvXxLck3TX_DvoRHcIdb6qWzp5vQBXZq1U2UpAODKHQ=s900-c-k-c0x00ffffff-no-rj',
  },
]

export const CategoriesMapper1: InfluencersMapper = [
  {
    name: 'Margarida Corceiro',
    image70Opacity:
      'https://www.hiper.fm/wp-content/uploads/2023/02/Margarida-Corceiro-2.png',
    image100Opacity:
      'https://www.hiper.fm/wp-content/uploads/2023/02/Margarida-Corceiro-2.png',
  },
  {
    name: 'Diogo Silva',
    image70Opacity:
      'https://cdn.cmjornal.pt/images/2024-04/img_1200x1200$2024_04_17_15_09_49_1630968.jpg',
    image100Opacity:
      'https://cdn.cmjornal.pt/images/2024-04/img_1200x1200$2024_04_17_15_09_49_1630968.jpg',
  },
  {
    name: 'Diogo da Silva',
    image70Opacity: MoveMind,
    image100Opacity: MoveMind,
  },
  {
    name: 'Madalena Aragão',
    image70Opacity: MadalenaAragao,
    image100Opacity: MadalenaAragao,
  },
]

export const CategoriesMapper2: InfluencersMapper = [
  {
    name: 'Angi Costa',
    image70Opacity: AngiCosta,
    image100Opacity: AngiCosta,
  },
  {
    name: 'Marble',
    image70Opacity: Marble,
    image100Opacity: Marble,
  },
  {
    name: 'João Barbosa',
    image70Opacity: Numeiro,
    image100Opacity: Numeiro,
  },
  {
    name: 'Mia Gomes',
    image70Opacity: MiaGomes,
    image100Opacity: MiaGomes,
  },
]

export default Mapper
