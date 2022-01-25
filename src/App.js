import './App.css'
import { zodiac } from './data'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'


{/* import the zodiac array */}

function App() {
  return (
    <div className="App">
      {/* import and use the Header. Main, and Footer components here */}
      {/* the Header component needs a string passed in as the `name` prop */}
      <div>
        <Header name='Joey Joe Jo Shabadoo' />
      
        {/* the Footer component needs a year passed in as the `year` prop */}
        <Footer year='1984' />
        {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
        <Main zodiac = {{ zodiac }} />

      </div>
      <h1>Hello world</h1>
    </div>
  )
}

export default App


