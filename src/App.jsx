import Aside  from "./components/Aside"
import Header  from "./components/Navigation"
import Contentbody  from "./components/Main"
import './components/main.css'
import Footer  from "./components/Footer"

function App() {

  return (
    <div className="mainApp">
        <Header />
        <Contentbody />
        <Aside />
        <Footer />
    </div> 

  )
}


export default App
