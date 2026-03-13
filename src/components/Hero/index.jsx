import { Container, Title, Subtitle } from "./styles";
import Form from "../Form";

function Hero(){
    return (
        <Container>
        <Title>Encontre sua próxima vaga em tecnologia</Title>
        <Subtitle>
        Explore oportunidades para desenvolvedores front-end, back-end e full stack.
        </Subtitle>
        <Form/>
        </Container>

    );
}

export default Hero;