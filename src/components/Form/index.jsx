import { Container, Input, Button } from "./styles";


function Form({ busca, setBusca }){

    return(
        <Container>
            <Input type="text" placeholder="Buscar vagas..." 
            value={busca} 
            onChange={(evento) => setBusca(evento.target.value)}/>
            <Button type="submit">Buscar</Button>
        </Container>

    );
}

export default Form;