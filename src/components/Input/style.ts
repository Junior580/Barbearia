import styled from 'styled-components'

export const Container = styled.div`
  background-color: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #665360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #f4ede8;

    &::placeholder {
      color: #665360;
    }
  }
  svg {
    margin-right: 16px;
  }
`
