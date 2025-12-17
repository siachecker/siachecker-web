import Footer from "./components/Footer"
import Header from "./components/Header"
import Features from "./sections/Features"
import Hero from "./sections/Hero"
// import Demo from "./sections/Demo"
import EarlyAccess from "./sections/EarlyAccess"

function App() {

  return (
    <div className="flex min-h-screen flex-col">
      <Header/>
      <main className="flex-1">
        <Hero/>
        <Features/>
        {/* <Demo/> */}
        <EarlyAccess/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
