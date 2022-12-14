import React from "react";
import * as S from "./info.styles";
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";

const InfoHome = () => {
  return (
    <S.InfoContent>
        <S.TextInfo>
            <div>
                <p><span>Gustavo Pardini</span><br />Desenvolvedor <br />Front end</p>
            </div>
            <S.Subtext>
                <p>Olá, possuo 19 anos e desenvolvo aplicações web desde 2022, focado em desenvolver códigos eficientes e limpos. Sempre buscando garantir a melhor experiência de usuário.</p>
                <span>
                    <a href='https://github.com/Gustavotp443' rel="noopener noreferrer" target='_blank'><BsGithub /></a>
                    <a href='https://www.instagram.com/guustavo_007/' rel="noopener noreferrer" target='_blank'><BsInstagram /></a>
                    <a href='https://www.linkedin.com/in/gustavo-teixeira-pardini-0ab2641b7/' rel="noopener noreferrer" target='_blank'><BsLinkedin /></a>
                </span>
            </S.Subtext>
        </S.TextInfo>
        <S.ImgInfo>
            <img alt="chibi-img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/198a757d-7c3c-4749-8472-24a56d86f335/dfhm47s-6a16772e-1cf8-4d86-a47f-79e3126efa7b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE5OGE3NTdkLTdjM2MtNDc0OS04NDcyLTI0YTU2ZDg2ZjMzNVwvZGZobTQ3cy02YTE2NzcyZS0xY2Y4LTRkODYtYTQ3Zi03OWUzMTI2ZWZhN2IucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LM2tgJLx9-Bmc73HCgVEzELANMX2E9WiiRHqXdKq1WU"></img>
        </S.ImgInfo>
    </S.InfoContent>
  );
};

export default InfoHome;
