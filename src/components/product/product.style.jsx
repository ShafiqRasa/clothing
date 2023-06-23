import styled from "styled-components";
import Button from "../genral-button/genral-button.component";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 5px;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  & .name {
    width: 90%;
    margin-bottom: 15px;
  }

  & .price {
    width: 10%;
  }
`;
export const EnhancedButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const CategoryCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    & ${BackgroundImage} {
      opacity: 0.8;
    }

    & ${EnhancedButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`;
