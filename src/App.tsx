import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";


function App() {
  return(
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<ProductsPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
    </Routes>
    </>
  )
}

export default App;
