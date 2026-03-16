import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 12px 16px;
  background-color: #182c61;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;
