import { asset } from '../lib/asset.js'
import './SideVines.css'

// Боковые лианы из картинок (liana_left / liana_right), тайлятся по высоте экрана.
export default function SideVines() {
  return (
    <div className="vines" aria-hidden>
      <div className="vine vine--left" style={{ backgroundImage: `url(${asset('liana_left.png')})` }} />
      <div className="vine vine--right" style={{ backgroundImage: `url(${asset('liana_right.png')})` }} />
    </div>
  )
}
