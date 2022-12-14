import React from "react";
import * as S from "./projects.style";
import image1 from "../../../images/image1.png";
import image2 from "../../../images/image2.png";
import image3 from "../../../images/image3.png";
import { Link } from "react-router-dom";


type ClickedProps ={
  clientX:number,
  clientY:number
}

const RecentProjects = () => {

  const [mousePoints, setMousePoints] = React.useState<ClickedProps[]>([]);
  const [index, setIndex] = React.useState(0);

  const cards=[
    {id:"1", image: image1, href:"https://padoru-opal.vercel.app/"},
    {id:"2", image: image2, href:"https://gustavopokemonpokedex.vercel.app/"},
    {id:"3", image: image3, href:"https://github.com/Gustavotp443/Authentication-Validate-Form"}
  ];

  const mod = (n:any,m:any) => {
    const result = n % m;

    return result >= 0 ? result : result + m;
  };

  function getCordenates(e:React.MouseEvent<HTMLElement>){
    const {clientX, clientY} = e;

    setMousePoints([{clientX, clientY}]);
    document.querySelector(".card");
    console.log(mousePoints);
  }

  React.useEffect(()=>{
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
    },3000);
  },[index]);

  return (
    <>
    <S.ProjectsContainer  onMouseOverCapture={getCordenates}>
      <h2>Meus Projetos</h2>
      <p>Projetos Recentes</p>
      <div>
      <S.CardWrapper>
        {/* <img className="card card--active" src={image1}/>
        <img className="card card--left" src={image2}/>
        <img className="card card--right" src={image3}/> */}

        {cards.map((item,i)=> {
          const indexLeft= mod(index - 1, cards.length);
          const indexRight = mod(index + 1, cards.length);

          let className= "";

          if(i===index){
            className = "card card--active";
          }else if (i===indexRight){
            className="card card--right";
          }else if(i===indexLeft){
            className="card card--left";
          }
          else{
            className="card";
          }

          return (<a key={item.id} className={className} href={item.href} target="_blank" rel="noopener noreferrer"><img src={item.image} className="img"  alt="Project image"/></a>);

        })}

      </S.CardWrapper>
      </div>
    </S.ProjectsContainer>
    <S.ButtonContainer>
      <S.SeeMoreProjects to="/projects">
        Ver Mais Projetos
      </S.SeeMoreProjects>

    </S.ButtonContainer>
    </>
  );
};

export default RecentProjects;
