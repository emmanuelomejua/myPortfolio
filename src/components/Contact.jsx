import styled from "styled-components"


const Section = styled.section`
    height: 100vh;
    scroll-snap-align: center;
`

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    gap: 50px
`

const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const Title = styled.h1`
    font-weight: 400;
`

const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const Input = styled.input`
    padding: 15px;
    border: none;
    background: #e8e6e6;
    outline: none;

    &:focus{
      outline: 1px solid yellow
    }
`

const TextArea = styled.textarea`
    padding: 15px;
    background: #e8e6e6;
    border: none;
    outline: none;

    &:focus{
      outline: 1px solid yellow
    }
`

const Button = styled.button`
    color: white;
    background: #da4ea2;
    border: none;
    padding: 15px;
    cursor: pointer;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
`

const Right = styled.div`
    flex: 1;
`



const Contact = () => {

  const handleSubmit = (e) => {
      e.preventDefault()
  }

  return (
    <Section>
      <Container>
        <Left>
          <Form onSubmit={handleSubmit}>

          <Title>Contact Us</Title>
          <Input type='text' placeholder="Name"/>
          <Input type='email' placeholder="Email"/>
          <TextArea placeholder="Message" rows={5}/>
          <Button type="submit">Send</Button>

          </Form>
         
        </Left>
        <Right>
          Right
        </Right>
      </Container>
    </Section>
  )
}

export default Contact
