import React from "react";
import * as S from "./error.style";

const Error = () => {
  return (
    <S.ErroContainer>
        <div>
            <h2>Error 404</h2>
            <p>Essa página não existe.</p>
        </div>
    </S.ErroContainer>
  );
};

export default Error;
