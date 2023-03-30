import styled from "styled-components"
import logo from '../assets/pic1.jpg'
import line from '../assets/search.png'


const Section = styled.section`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    max-width: 1024px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0px;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`


const Logo = styled.img`
    height: 50px;
    border-radius: 50%;
`

const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;
    list-style: none;
`

const ListItem = styled.li`
    cursor: pointer;
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
   
`

const Button = styled.button`
    padding: 10px;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 5px;
    background: #da4ea2;
     margin-left: 40px;
`

const Navbar = () => {
  return (
    <Section>
        <Container>
           <Links>
                <Logo src={logo} alt=""/>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Studio</ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
           </Links>

           <Icons>
            <Button>Hire Now!</Button>
            <Icon src={line}/>
           </Icons>

        </Container>
    </Section>
  )
}

export default Navbar
