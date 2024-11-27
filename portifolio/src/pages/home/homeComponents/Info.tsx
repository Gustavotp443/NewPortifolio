import React from "react";
import * as S from "./info.styles";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { getYearsOld } from "../../../utils/getYearsOld";

const InfoHome = () => {
    return (
        <S.InfoContent>
            <S.TextInfo>
                <div>
                    <p>
                        <span>Gustavo Pardini</span>
                        <br />
                        Desenvolvedor
                        <br />
                    </p>
                </div>
                <S.Subtext>
                    <p>
                        Olá, possuo {getYearsOld()} anos e desenvolvo aplicações
                        web há {getYearsOld() - 18} anos, focado em desenvolver
                        códigos eficientes, escaláveis e limpos. Meu objetivo é
                        sempre entregar soluções eficientes que proporcionem a
                        melhor experiência ao usuário, combinando performance,
                        acessibilidade e design intuitivo.
                    </p>
                    <span>
                        <a
                            href="https://github.com/Gustavotp443"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <BsGithub />
                        </a>
                        <a
                            href="https://www.instagram.com/guustavo_007/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <BsInstagram />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gustavo-teixeira-pardini-0ab2641b7/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <BsLinkedin />
                        </a>
                    </span>
                </S.Subtext>
            </S.TextInfo>
            <S.ImgInfo>
                <img
                    alt="chibi-img"
                    src="https://i.imgur.com/jR3bfHD.jpeg"
                ></img>
            </S.ImgInfo>
        </S.InfoContent>
    );
};

export default InfoHome;
