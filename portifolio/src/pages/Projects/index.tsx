import React from "react";
import Card from "../../components/card";
import Pagination from "../../components/pagination";
import api from "../../services/api";
import * as S from "./projects.styles";


type Data = {
  name:string,
  description:string,
  html_url:string,
  created_at:string
}

const MainPage = () => {
  const [totalData,setTotalData]= React.useState([]);
  const [data, setData] = React.useState<Data[]>([]);
  const [dataOffset, setDataOffset]= React.useState(0);



  async function getData(){
    await api.get("repos")
    .then((resp)=>{
        const maxOffSet= 20 * ( dataOffset + 1 );
        const value= resp.data.slice(dataOffset,maxOffSet);
        setData(value);
        setTotalData(resp.data);
    }).catch((err)=>{
        alert("Erro ao buscar dados: " + err);
    });
  }

  React.useEffect(()=>{
    getData();
  },[dataOffset]);

  return (
    <S.ProjectsSection>
      <S.ProjectContainer>
        <S.Title>
          <h2>Projetos</h2>
        </S.Title>
        <S.CardWrapper>
        {data.map((repos,index)=>{


         return <Card key={index} name={repos.name} desc={repos.description} url={repos.html_url} created={repos.created_at}/>;
        })}
        </S.CardWrapper>
        <S.PaginationWrapper>
          <Pagination size={totalData.length} offset={dataOffset} setOffset={setDataOffset}/>
        </S.PaginationWrapper>
      </S.ProjectContainer>
    </S.ProjectsSection>
  );
};

export default MainPage;
