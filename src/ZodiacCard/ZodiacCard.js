import './ZodiacCard.css'

export default function ZodiacCard(props) {
  return <div className='zodiac-card'>
    <p>
      {/* in this component,  use the `name` and `dates` props to render the name and dates of the sign, as well as load the correct image  from the public directory */}
      {props.name} {props.date} 
    </p>
    <img src={ `/images/${props.name}.png` } />
  </div>

}
