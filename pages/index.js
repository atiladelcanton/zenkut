import { useState } from "react";
import Head from "next/head";
import Box from "../src/components/Box";
import MainGrid from "../src/components/MainGrid";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";
import BoxComunitiesAndFriends from "../src/components/BoxComunitiesAndFriends";

function ProfileSidebar(propriedades) {
  return (
    <Box>
      <img
        src={`https://github.com/${propriedades.githubUser}.png`}
        style={{ borderRadius: "8px" }}
      />
      <hr />
      <p>
        <a
          className="boxLink"
          href={`https://github.com/${propriedades.githubUser}`}
        >
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const githubUser = "atila-rampazo";

  const [comunidades, setComunidades] = useState([
    {
      id: new Date().toISOString(),
      title: "Eu odeio acordar cedo",
      image: "https://alurakut.vercel.app/capa-comunidade-01.jpg",
    },
  ]);
  const pessoasFavoritas = [
    "omariosouto",
    "rafaballerini",
    "peas",
    "marcobrunodev",
    "felipefialho",
    "atila-rampazo",
    "atiladelcanton",
  ];
  const handleCreateCommunit = (event) => {
    event.preventDefault();
    const dadosDoForm = new FormData(event.target);
    const comunidade = {
      id: new Date().toISOString(),
      title: dadosDoForm.get("title"),
      image: dadosDoForm.get("image"),
    };
    setComunidades([...comunidades, comunidade]);
  };
  return (
    <>
      <Head>
        <title>AluraKut</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="smallTitle">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet sexy={3} confiavel={3} />
          </Box>
          <Box>
            <h2 className="subTitle">o que você deseja fazer?</h2>
            <form onSubmit={handleCreateCommunit}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>
              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <BoxComunitiesAndFriends
            title="Pessoas da comunidade"
            data={pessoasFavoritas}
          />
          <BoxComunitiesAndFriends title="Comunidades" data={comunidades} />
        </div>
      </MainGrid>
    </>
  );
}
