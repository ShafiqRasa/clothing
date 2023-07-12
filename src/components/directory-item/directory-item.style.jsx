import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  /** 
  one more cool styled-components feature!
  we can pass props same as normal components to the styles components using below syntax
  */
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  @media screen and (max-width: 800px) {
    padding: 0 10px;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  /** we can select by the tag name as well, nesting SASS styling into styled-components */
  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  }
  p {
    font-weight: lighter;
    font-size: 16px;
  }
  &:hover {
    cursor: pointer;
    /** this way you can select an styled component! 
        Sice BackgroundImage is a styled component which we defined just above,
        we need to select it once again while hovering!
    */
    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & ${Body} {
      opacity: 0.9;
    }
  }
  /* &.large {
    height: 380px;
  } */
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;
