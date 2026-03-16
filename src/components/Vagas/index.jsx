import { Card, Titulo, Local, Empresa, Botao } from "./styles";

function Vagas({titulo, empresa, local, aoCandidatar}) {
    return(
        <Card>
            <Titulo>
                {titulo}
            </Titulo>
            <Empresa>
                Empresa: {empresa}
            </Empresa>
            <Local>
                Local: {local}
            </Local>
            <Botao onClick={aoCandidatar}>Candidatar-se</Botao>
        </Card>
    );
}

export default Vagas;
