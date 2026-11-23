import "./App.css";

import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Intro from './components/Intro.jsx'
import Steps from './components/Steps.jsx'
import Tools from './components/Tools.jsx'
import Subscribe from './components/Subscribe.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="page">
      <Header />
      <Nav />
      <main>
        <Intro />
        <Steps />
        <Tools />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}

export default App
