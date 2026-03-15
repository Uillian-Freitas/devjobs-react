import { Container, Title, Subtitle } from "./styles";
import Form from "../Form";

function Hero({busca, setBusca}){
    return (
        <Container>
        <Title>Encontre sua próxima vaga em tecnologia</Title>
        <Subtitle>
        Explore oportunidades para desenvolvedores front-end, back-end e full stack.
        </Subtitle>
        <Form busca={busca} setBusca={setBusca}/>
        </Container>

    );
}

export default Hero;