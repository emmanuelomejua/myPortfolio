import styled from "styled-components"
import Navbar from "./Navbar"
import line from '../assets/line.png'
import three from '../assets/thre.jpg'


const Section = styled.section`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: space-between;
    width: 1024px;
`

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
`

const Title = styled.h2`
    font-size: 54px;
   
`

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Line = styled.img`
    height: 2.5px;
    width: 50px;
    color: white;
`

const Text = styled.h4`
    color:  #da4ea2;
`

const Button = styled.button`
    color: white;
    background: #da4ea2;
    border: none;
    font-weight: 500;
    width: max-content;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px
`

const Desc = styled.p`
    color: lightgray;
`

const Right = styled.div`
    flex: 3;
    position: relative;
`

const Image = styled.img`
  width: 500px;
  height : 350px;
  object-fit: contain;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  // animation: animate 2s infinite ease alternate;

  // @keyframes animate {
  //   to{
  //     transform: translateY(30px)
  //   }
  // }
`

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Think. Make. Solve</Title>
          <WhatWeDo>
            <Line src={line}/>
            <Text>What we Do</Text>
          </WhatWeDo>
          <Desc>We enjoy creating human centered digital experience</Desc>
          <Button>Learn More</Button>
        </Left>

        <Right>
          <Image src={three}/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
