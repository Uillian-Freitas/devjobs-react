import { Card, Titulo, Info } from "./styles";

function Vagas(props) {
    return(
        <Card>
            <Titulo>
                {props.titulo}
            </Titulo>
            <Info>
                Empresa: {props.empresa}
            </Info>
            <Info>
                Local: {props.local}
            </Info>
        </Card>
    );
}

export default Vagas;
