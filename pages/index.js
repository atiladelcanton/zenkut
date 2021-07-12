import Head from 'next/head'
import Box from '../src/components/Box'
import MainGrid from '../src/components/MainGrid'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
function ProfileSidebar(propriedades){
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius:'8px' }}/>
    </Box>
  )
}

export default function Home() {
  const githubUser = 'atila-rampazo';

  const pessoasFavoritas = ['omariosouto','rafaballerini','peas','marcobrunodev','felipefialho','atila-rampazo']
  return (
    <>
      <Head>
      <title>AluraKut</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AlurakutMenu />
        <MainGrid>
        <div className="profileArea"  style={{gridArea:'profileArea'}}>
          <ProfileSidebar  githubUser={githubUser}/>
        </div>
        <div className="welcomeArea" style={{gridArea:'welcomeArea'}}>
          <Box>
            <h1 className="smallTitle">
              Bem vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div  className="profileRelationsArea" style={{gridArea:'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Pessoas da comunidade ({pessoasFavoritas.length})</h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                        <a href={`/users/${itemAtual}`} key={itemAtual}>
                          <img src={`https://github.com/${itemAtual}.png`} />
                          <span>{itemAtual}</span>
                        </a>
                      </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
