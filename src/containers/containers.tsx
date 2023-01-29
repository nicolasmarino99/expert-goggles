import styled from "styled-components";

export const CardContainer = styled.div`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  display: flex;
  max-height: 32em;
  flex-wrap: wrap;
  max-width: 28em;
  overflow: overlay;
`;

export const ListContainer = styled.div`
  display: flex;
  background: blue;
  color: white;
  width: 60%;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
