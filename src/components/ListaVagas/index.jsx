import { Container, Lista } from "./styles";
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
    function ListaVagas({ busca }){

    const vagasFiltradas = vagas.filter((vaga) => 
    vaga.titulo.toLowerCase().includes(busca.toLowerCase()));

    return(
        <Container>
            <h2>Vagas Disponíveis</h2>
            <Lista>
            {vagasFiltradas.map((vaga, index) => (
                <Vagas
                key={index}
                titulo={vaga.titulo}
                empresa={vaga.empresa}
                local={vaga.local}
                />
            ))}
            </Lista>
        </Container>
    );
}

export default ListaVagas