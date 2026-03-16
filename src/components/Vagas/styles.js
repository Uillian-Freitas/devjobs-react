import styled from "styled-components";

export const Card = styled.div`
background-color: white;
border-radius: 4px;
padding: 20px;
box-shadow: 0 4px 10px rgba(0,0,0,0.1);
text-align: left;
`;

export const Titulo = styled.h3`
font-size: 20px;
color: #182c61;
`;

export const Empresa = styled.p`
font-weight: bold;
font-size: 15px;
`;

export const Local = styled.p`
color: #666;
margin-bottom: 15px;
`;

export const Botao = styled.button`
background-color: #182c61;
color: white;
border: none;
padding: 8px 14px;
border-redius: 4px;
cursor: pointer;

&:hover{
background-color: #0f1d45;
}
`;