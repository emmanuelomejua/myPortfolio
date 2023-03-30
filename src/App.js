import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";

const Container = styled.main`
  height: 100vh;
  color: white;
  //  background-color: purple;
  // background: rebeccapurple;
  background: blueviolet;
  scroll-style-type: y mandatory;
  scroll-behaviour: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`
function App() {
  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  );
}

export default App;

