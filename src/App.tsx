import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signin } from "./pages/Sigin"
import Repo from "./pages/Repo"



function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/repo" element={<Repo />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
