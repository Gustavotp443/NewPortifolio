/* eslint-disable react/no-unescaped-entities */
import { getYearsOld } from "../../../utils/getYearsOld";
import * as S from "./HomeBottom.styles";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiGithub,
    SiGit,
    SiTypescript,
    SiCsharp,
    SiSpring,
    SiDotnet,
    SiPhp,
    SiPostgresql,
    SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const HomeBottom = () => {
    return (
        <S.AboutContainer>
            <S.AboutHeader>
                <h1>Sobre</h1>
                <h2>Um pouco sobre mim</h2>
            </S.AboutHeader>
            <S.AboutText>
                <S.TextTop>
                    <p>
                        {" "}
                        Me chamo Gustavo Teixeira Pardini, possuo atualmente{" "}
                        {`${getYearsOld()}`} anos, sou Desenvolvedor Web
                        Fullstack , nascido em Santo André-SP,estou finalizando
                        a graduação em Informática para Negócios na Faculdade de
                        Tecnologia de São Bernardo do Campo. Apaixonado por
                        tecnologia e inovação, possuo experiência como
                        desenvolvedor e colaboro em projetos que demandam
                        soluções criativas e eficientes. Estou sempre em busca
                        de novos desafios para contribuir e crescer.
                    </p>
                </S.TextTop>
                <S.TextBot>
                    <p>
                        Com prática em tecnologias como Node.js, React, Next,
                        JavaScript,TypeScript e PHP, Java, C#, .NET e Spring,
                        proporcionando uma base sólida para aprender e
                        adaptar-me rapidamente a novas ferramentas e linguagens.
                        Além disso, possuo conhecimentos sólidos em Orientação à
                        Objetos , Clean Architeture e melhoria e qualidade de
                        código.
                    </p>
                </S.TextBot>
            </S.AboutText>
            <S.AboutIcons>
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
                <SiTypescript />
                <SiReact />
                <SiGithub />
                <SiGit />
                <FaJava />
                <SiSpring />
                <SiCsharp />
                <SiDotnet />
                <SiPhp />
                <SiPostgresql />
                <SiMysql />
            </S.AboutIcons>
        </S.AboutContainer>
    );
};

export default HomeBottom;
