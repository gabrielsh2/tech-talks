import { Inter } from 'next/font/google'
import { pokemonService } from '@/service/pokemon'
import { PokemonList } from '@/components/pokemon-list'

const inter = Inter({ subsets: ['latin'] })

function ServerSideDemo({ pokemonList }) {
  return (
    <div className={`main ${inter.className} page-container`}>
      <h1 className="title">Demonstração Server Side</h1>
      <h2>Lista de Pokémons usando request Server Side</h2>
      <PokemonList pokemonList={pokemonList} />
    </div>
  )
}

export default ServerSideDemo

export async function getServerSideProps() {
  const { getPokemonList } = pokemonService()
  const { data } = await getPokemonList()

  console.log(data)

  return {
    props: {
      pokemonList: data?.results
    }
  }
}
