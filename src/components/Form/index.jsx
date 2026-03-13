import { Container, Input, Button } from "./styles";

function Form(){
    return(
        <Container>
            <Input type="text" placeholder="Buscar vagas..."/>
            <Button type="submit">Buscar</Button>
        </Container>

    );
}

export default Form;