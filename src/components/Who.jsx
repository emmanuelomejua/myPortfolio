import styled from "styled-components"
import three from '../assets/thres.jpg'
import line from '../assets/line.png'

const Section = styled.section`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    width: 1024px;
    gap: 200px;
`

const Left = styled.div`
    flex: 1;
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
      animation: animate 2s infinite ease alternate;

      @keyframes animate {
        to{
          transform: translateY(30px)
        }
      }
`

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
   
`

const Title = styled.h2`
    font-size: 54px;
    text-transform: capitalize;
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


const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
        <Image src={three}/>
        </Left>

        <Right>
          <Title>Think Outside the square space</Title>
          <WhatWeDo>
            <Line src={line}/>
            <Text>Who we are</Text>
          </WhatWeDo>
          <Desc>a creative group of developers with passion for arts</Desc>
          <Button>See or works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who
