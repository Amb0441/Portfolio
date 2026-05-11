import Layout from './components/Layout'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <Layout>
      <Landing />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  )
}

export default App
