import React from "react";
import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from "./directory-item.style";

const Item = ({ title, imageUrl, route }) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body className=" body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default Item;
