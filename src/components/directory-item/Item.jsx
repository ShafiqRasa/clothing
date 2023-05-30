import React from "react";
import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
  Header,
  Text,
} from "./directory-item.style";

const Item = ({ title, imageUrl }) => {
  return (
    <DirectoryItemContainer to={`shop/${title}`}>
      <BackgroundImage
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <Body className=" body">
        <Header>{title}</Header>
        <Text>Shop Now</Text>
      </Body>
    </DirectoryItemContainer>
  );
};

export default Item;
