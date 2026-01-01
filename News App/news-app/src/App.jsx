import { useState } from "react"
import Navbar  from "./components/Navbar"
import NewsArea from "./components/NewsArea"
import Footer from "./components/Footer"


const App = () => {
  const [category,setCategory] = useState("top")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsArea category={category}/>
      <Footer />

    </div>
  )
}

export default App;