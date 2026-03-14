import { Container } from "./styles";
import Vagas from "../Vagas";

const vagas = [
    {
        titulo: "Desenvolvedor Frontend React",
        empresa: "Tech Solutions",
        local: "Remoto"
    },
        {
        titulo: "Desenvolvedor Backend Node",
        empresa: "DevCorp",
        local: "São Paulo"
    },
        {
        titulo: "Desenvolvedor Fullstack",
        empresa: "StartUp Labs",
        local: "Remoto"
    },
];

function ListaVagas(){
    return(
        <Container>
            <h2>Vagas Disponíveis</h2>
            {vagas.map((vaga, index) => (
                <Vagas
                key={index}
                titulo={vaga.titulo}
                empresa={vaga.empresa}
                local={vaga.local}
                />
            ))}
        </Container>
    );
}

export default ListaVagas