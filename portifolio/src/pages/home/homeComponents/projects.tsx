import React from "react";
import * as S from "./projects.style";
import { Link } from "react-router-dom";

type ClickedProps = {
    clientX: number;
    clientY: number;
};

const RecentProjects = () => {
    const [mousePoints, setMousePoints] = React.useState<ClickedProps[]>([]);
    const [index, setIndex] = React.useState(0);

    const cards = [
        {
            id: "1",
            image: "https://i.imgur.com/y6Vj0OB.png",
            href: "https://sams-project-js.vercel.app",
            description:
                "Um sistema de gerenciamento de projetos eficiente e responsivo 1.",
        }, //SAMS
        {
            id: "2",
            image: "https://i.imgur.com/vEn02FG.png",
            href: "https://gustavopokemonpokedex.vercel.app/",
            description:
                "Um sistema de gerenciamento de projetos eficiente e responsivo 2.",
        },
        {
            id: "3",
            image: "https://i.imgur.com/I0Z1hQv.png",
            href: "https://github.com/Gustavotp443/PROJETO-TAREFAS",
            description:
                "Um sistema de gerenciamento de projetos eficiente e responsivo 3.",
        }, //PROJECT TASKS
    ];

    const mod = (n: any, m: any) => {
        const result = n % m;

        return result >= 0 ? result : result + m;
    };

    function getCordenates(e: React.MouseEvent<HTMLElement>) {
        const { clientX, clientY } = e;

        setMousePoints([{ clientX, clientY }]);
        document.querySelector(".card");
        console.log(mousePoints);
    }

    React.useEffect(() => {
        setTimeout(() => {
            setIndex((index + 1) % cards.length);
        }, 6000);
    }, [index]);

    return (
        <>
            <S.ProjectsContainer onMouseOverCapture={getCordenates}>
                <h2>Meus Projetos</h2>
                <p>Projetos Recentes</p>
                <div>
                    <S.CardWrapper>
                        {/* <img className="card card--active" src={image1}/>
        <img className="card card--left" src={image2}/>
        <img className="card card--right" src={image3}/> */}

                        {cards.map((item, i) => {
                            const indexLeft = mod(index - 1, cards.length);
                            const indexRight = mod(index + 1, cards.length);

                            let className = "";

                            if (i === index) {
                                className = "card card--active";
                            } else if (i === indexRight) {
                                className = "card card--right";
                            } else if (i === indexLeft) {
                                className = "card card--left";
                            } else {
                                className = "card";
                            }

                            return (
                                <a
                                    key={item.id}
                                    className={className}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={item.image}
                                        className="img"
                                        alt="Project image"
                                    />
                                </a>
                            );
                        })}
                    </S.CardWrapper>
                </div>
            </S.ProjectsContainer>
            <div>
                <S.DescriptionWrapper>
                    <S.DescriptionText>
                        {cards[index]?.description ||
                            "Descrição não disponível"}
                    </S.DescriptionText>
                </S.DescriptionWrapper>
            </div>

            {/* <S.ButtonContainer>
                <S.SeeMoreProjects to="/projects">
                    Ver Mais Projetos
                </S.SeeMoreProjects>
            </S.ButtonContainer> */}
        </>
    );
};

export default RecentProjects;
