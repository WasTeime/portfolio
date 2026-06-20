import './SideVines.css'

// Боковые лианы из картинок (liana_left / liana_right), тайлятся по высоте экрана.
export default function SideVines() {
  return (
    <div className="vines" aria-hidden>
      <div className="vine vine--left" />
      <div className="vine vine--right" />
    </div>
  )
}
