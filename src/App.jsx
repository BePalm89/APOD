import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ApodMars from "./pages/ApodMars/ApodMars";
import Navbar from "./components/shared/Navbar/Navbar";
import LateralBar from "./components/shared/LateralBar/LateralBar";
import Container from "./styled-components/Container";
import Header from "./styled-components/Header";
import Aside from "./styled-components/Aside";
import Main from "./styled-components/Main";
import Footer from "./styled-components/Footer";

function App() {
  const today = new Date(Date.now()).toISOString().slice(0, 10);

  return (
    <Container>
      <Header>
        <Navbar></Navbar>
      </Header>
      <Aside>
        <LateralBar></LateralBar>
      </Aside>
      <Main>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/apod-mars" element={<ApodMars />}></Route>
        </Routes>
      </Main>
      <Footer>footer</Footer>
    </Container>
  );
}

export default App;
