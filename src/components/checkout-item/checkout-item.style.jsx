import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const Name = styled.span`
  width: 23%;
`;
export const Price = styled.span`
  width: 23%;
`;
export const Quantity = styled.span`
  width: 23%;
  display: flex;
`;
export const Arrow = styled.div`
  cursor: pointer;
  margin: 0 10px;
`;
export const Value = styled.div`
  margin: 0 10px;
`;
export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
