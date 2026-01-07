import Footer from "./components/Footer"
import Header from "./components/Header"
import Features from "./sections/Features"
import Hero from "./sections/Hero"
import LiveCheck from "./sections/LiveCheck"
import Pricing from "./sections/Pricing"
import FAQ from "./sections/FAQ"

function App() {

  return (
    <div className="flex min-h-screen flex-col">
      <Header/>
      <main className="flex-1">
        <Hero/>
        <LiveCheck/>
        <Features/>
        <Pricing/>
        <FAQ/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
