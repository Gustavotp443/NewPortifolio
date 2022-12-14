import React from "react";
import * as S from "./pagination.styles";

const Pagination = ({size , offset, setOffset}: {size:number, offset:number, setOffset:any}) => {

const [pages,setPages]=React.useState<number>(0);

React.useEffect(()=>{
  if(size <= 0){
    setPages(1);
  } else if (size>1){
    setPages(Math.ceil(size/20));
  }

},[offset]);

  function handlePrev(){
    setOffset(offset-1);
  }

  function handleNext(){
    setOffset(offset+1);
  }


  return (
    <S.PaginationContainer>
        <S.Button disabled={offset+1<=1} onClick={handlePrev}>Prev</S.Button>
        <p>{`${offset+1} de ${pages}`}</p>
        <S.Button disabled={offset+1>=pages} onClick={handleNext}>Next</S.Button>
    </S.PaginationContainer>
  );
};

export default Pagination;
