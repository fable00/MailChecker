import { Form } from "../../components/Form"
import { Title } from "../../components/Title/styles"
import { Container, Content } from "./styles"

export const Home = () =>{
    return(
        <>
            <Container>
                <Content>
                    <Title>MailChecker</Title>
                    <Form />
                </Content>
            </Container>
        </>
    )
}