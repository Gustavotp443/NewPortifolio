import React from "react";
import * as S from "./projects.style";
import { Link } from "react-router-dom";

type ClickedProps = {
    clientX: number;
    clientY: number;
};

type Card = {
    id: string;
    image: string;
    href: string;
    description: string;
};

type RecentProjectsProps = {
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    cards: Card[];
};

const RecentProjects: React.FC<RecentProjectsProps> = ({
    index,
    setIndex,
    cards,
}) => {
    const [mousePoints, setMousePoints] = React.useState<ClickedProps[]>([]);

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
        }, 8000);
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
            {/* <S.ButtonContainer>
                <S.SeeMoreProjects to="/projects">
                    Ver Mais Projetos
                </S.SeeMoreProjects>
            </S.ButtonContainer> */}
        </>
    );
};

export default RecentProjects;
