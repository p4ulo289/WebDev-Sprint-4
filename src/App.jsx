import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Audience from './components/sections/Audience'
import Contact from './components/sections/Contact'
import Gallery from './components/sections/Gallery'
import Hero from './components/sections/Hero'
import Simulator from './components/sections/Simulator'
import Solution from './components/sections/Solution'
import Team from './components/sections/Team'

export default function App() {
  return (
    <div id="topo">
      <a
        href="#solucao"
        className="absolute top-0 -left-[999px] z-200 rounded-br-md bg-jovi-blue px-5 py-3 text-white focus:left-0"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main>
        <Hero />
        <Solution />
        <Audience />
        <Gallery />
        <Simulator />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
