import styled from "styled-components";
import {
  BaseBtn,
  GoogleSignIn,
  Inverted,
} from "../genral-button/genral-button.style";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  // nesting styles based on components in styled-components
  ${BaseBtn},
  ${GoogleSignIn},
  ${Inverted} {
    margin-top: auto;
    font-size: 14px;
  }
  /** end **/
`;
export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
