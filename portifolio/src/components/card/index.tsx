import { create } from "@mui/material/styles/createTransitions";
import React from "react";
import * as S from "./card.styles";
import {AiOutlineArrowRight} from "react-icons/ai";
type DataCard = {
  name:string,
  desc:string,
  url:string,
  created:string
}

const Card = ({name,desc,url,created}:DataCard) => {

  const year= created.slice(0,4);
  const month= created.slice(5,7);
  const day= created.slice(8,10);

  return (
    <S.Card>
      <header>{name}</header>
      <footer>
        <p>{`${day}/${month}/${year}`}</p>
        <i><a href={url} target="_blank" rel="noopener noreferrer"><AiOutlineArrowRight/></a></i>
      </footer>
    </S.Card>
  );
};

export default Card;
