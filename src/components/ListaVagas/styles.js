import styled from "styled-components";

export const Container = styled.section`
  padding: 40px 20px;
  background-color: #f4f6fb;
  width: 100%;
`;

export const Lista = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;