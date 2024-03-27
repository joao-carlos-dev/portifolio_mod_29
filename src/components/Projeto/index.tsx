import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
      perferendis laudantium debitis.
    </Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
