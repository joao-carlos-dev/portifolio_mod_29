import Titulo from '../../../components/Titulo'
import Paragrafo from '../../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo tipo="principal">
      Olá jovens 👋 Formado em Licenciatura em Física, pelo Instituto Federal de
      Santa Catarina,campus Araranguá, atuando como professor por 6 anos. Nesta
      ano (2023), resolve trocar de área, e depois de algumas pesquisas vi que
      área do T.I tem grandes oportunidades. Em seguida, foi a busca de um curso
      nesta área, para compreender melhor os conceitos envolvidos, depois de
      alguns dias, achei a Escola Britânica de Artes Criativas & Tecnologia
      (EBAC). Desde então, já finalizei o curso TI do Zero ao Pro. Atualmente
      estou cursando Profissão: Desenvolvedor Full Stack Python.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=joao-carlos-dev&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=joao-carlos-dev&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
