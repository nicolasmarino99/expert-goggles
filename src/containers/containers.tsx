import styled from "styled-components";

export const ProductsContainer = styled.div`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  display: flex;
  flex-wrap: wrap;
  max-width: 38%;
  max-height: 90vh;
  justify-content: center;
  overflow: overlay;
  @media only screen and (max-width: 812px) {
    max-width: 28em;
    max-height: 32em;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  background: blue;
  color: white;
  width: 70%;
  flex-direction: column;
  justify-content: space-between;
  max-height: 90vh;
  overflow: overlay;
  @media only screen and (max-width: 812px) {
    width: 100%;
    max-height: 20em;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-height: 25em;
  overflow: overlay;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const OrdersWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 1em;
  @media only screen and (max-width: 812px) {
    width: 100%;
    padding: 2em 0;
  }
`;

export const ProductWrapper = styled.div`
  width: 14em;
  @media only screen and (max-width: 812px) {
    width: 100%;
  }
`;
export const ControlsWrapper = styled.div`
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
