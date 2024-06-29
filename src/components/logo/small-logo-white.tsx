import { FC } from 'react'
import src from '../../assets/gg_logo_white_transparent.png'
const SmallLogoWhite: FC<{ size?: number }> = ({ size = 100 }) => {
  return <img src={src} width={size} height={size}></img>
}
export default SmallLogoWhite
