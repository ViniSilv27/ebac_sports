import { useGetJogosQuery } from '../services/api'
import Produto from '../components/Produto'
import * as S from './styles'

const ProdutosConteiner = () => {
  const { data: produtos, isLoading } = useGetJogosQuery()

  if (isLoading) {
    return <h2>Carregando...</h2>
  }

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <Produto key={produto.id} produto={produto} estaNosFavoritos={false} />
      ))}
    </S.Produtos>
  )
}

export default ProdutosConteiner
