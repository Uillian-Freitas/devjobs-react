import { Container, Lista } from "./styles";
import Vagas from "../Vagas";
import { useState } from "react";

function ListaVagas({ busca }){

const [vagas, setVagas] = useState ([
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
]);
function removerVagas(index){
    const novasVagas = vagas.filter ((_, i) => i !== index);
    setVagas(novasVagas);
}

        const buscaNormalizada = busca.toLowerCase()

        

    const vagasFiltradas = vagas.filter((vaga) => 
    vaga.titulo.toLowerCase().includes(buscaNormalizada)||
    vaga.empresa.toLowerCase().includes(buscaNormalizada)||
    vaga.local.toLowerCase().includes(buscaNormalizada)
);


    return(
        <Container>
            <h2>Vagas Disponíveis</h2>
            <Lista>
                {vagasFiltradas.length === 0 ? (
                    <p>Nenhuma vaga encontrada.</p>
                ) : (
            vagasFiltradas.map((vaga, index) => (
                <Vagas
                key={index}
                titulo={vaga.titulo}
                empresa={vaga.empresa}
                local={vaga.local}
                aoCandidatar={() => removerVagas(index)}
                />
            ))
        )}
            </Lista>
        </Container>
    );
}

export default ListaVagas