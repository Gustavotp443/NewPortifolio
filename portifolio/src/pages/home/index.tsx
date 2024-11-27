import React from "react";
import * as S from "./home.styles";
import HomeBottom from "./homeComponents/HomeBottom";
import InfoHome from "./homeComponents/Info";
import RecentProjects from "./homeComponents/projects";
import * as P from "./homeComponents/projects.style";

const Home = () => {
    const [index, setIndex] = React.useState(0);

    const cards = [
        {
            id: "1",
            image: "https://i.imgur.com/y6Vj0OB.png",
            href: "https://sams-project-js.vercel.app",
            description: `Sistema em desenvolvimento para oficinas mecânicas referente ao TCC do curso Informática para Negócios da Fatec SBC, com autenticação segura e integração via API REST.
            Construído com tecnologias como TypeScript, Node.js, React e PostgreSQL, oferece uma solução escalável e modular para o setor automotivo.
                `,
        },
        {
            id: "2",
            image: "https://i.imgur.com/vEn02FG.png",
            href: "https://gustavopokemonpokedex.vercel.app/",
            description: `Aplicação interativa com informações detalhadas de pokémons,
            consumindo a PokeAPI. Desenvolvido com Next.js e TypeScript, a interface é responsiva e exibe cards dinâmicos por tipo de Pokémon,
            oferecendo uma experiência visual imersiva.`,
        },
        {
            id: "3",
            image: "https://i.imgur.com/I0Z1hQv.png",
            href: "https://github.com/Gustavotp443/PROJETO-TAREFAS",
            description: `Sistema de gerenciamento de tarefas com funcionalidades de listagem,
            filtragem e paginação. Criado com Node.js, Prisma e Next.js, é altamente escalável e otimizado para CRUD,
            com uma interface moderna usando Tailwind CSS. Ideal para quem busca produtividade.`,
        },
    ];

    return (
        <S.HomeContainer>
            <S.HomeWrapper>
                <InfoHome />
                <RecentProjects
                    index={index}
                    setIndex={setIndex}
                    cards={cards}
                />
                <div>
                    <P.DescriptionWrapper>
                        <P.DescriptionText>
                            {cards[index]?.description ||
                                "Descrição não disponível"}
                        </P.DescriptionText>
                    </P.DescriptionWrapper>
                </div>
                <HomeBottom />
            </S.HomeWrapper>
        </S.HomeContainer>
    );
};

export default Home;
