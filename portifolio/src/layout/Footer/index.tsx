import * as S from "./Footer.styles";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";

import { useEffect, useState } from "react";

const Footer = () => {
    const [, setToTop] = useState(false);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setToTop(true);
            } else {
                setToTop(false);
            }
        });
    }, []);

    return (
        <S.FooterContainer>
            <S.FooterContent>
                <S.Call>
                    <S.Email>
                        <h1>Gostou do meu trabalho ?</h1>
                        <h2>Vamos conversar!</h2>
                        <p>gustavotp443@gmail.com</p>
                    </S.Email>
                </S.Call>
                <S.RightSide>
                    <S.Social>
                        <p>Mídias Sociais</p>
                        <ul>
                            <li><a href='https://www.instagram.com/guustavo_007/' rel="noopener noreferrer" target='_blank'><BsInstagram />Instagram</a> </li>
                            <li><a href='https://www.linkedin.com/in/gustavo-teixeira-pardini-0ab2641b7/' rel="noopener noreferrer" target='_blank'><BsLinkedin />Linkedin</a> </li>
                            <li><a href='https://github.com/Gustavotp443' rel="noopener noreferrer" target='_blank'><BsGithub />Github</a> </li>
                        </ul>
                    </S.Social>
                    <S.ToTop>
                        <S.ToTopContent onClick={handleClick}>
                            <h2><AiOutlineArrowUp /></h2>
                            <p>voltar ao topo!</p>
                        </S.ToTopContent>
                    </S.ToTop>
                </S.RightSide>
                <S.Copyright>
                    <p>All Copyrights &copy; 2022 Gustavo Teixeira Pardini </p>
                </S.Copyright>
            </S.FooterContent>
        </S.FooterContainer>
    );
};

export default Footer;
