import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import { pokemonService } from '@/service/pokemon'
import { PokemonList } from '@/components/pokemon-list'

const inter = Inter({ subsets: ['latin'] })

function ClientSideDemo() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { getPokemonList } = pokemonService()
      const { data } = await getPokemonList()

      setPokemonList(data?.results)
    }

    fetchData()
  }, [])

  return (
    <div className={`main ${inter.className} page-container`}>
      <h1 className="title">Demonstração Client Side</h1>
      <h2>Lista de Pokémons usando request Client Side</h2>
      <PokemonList pokemonList={pokemonList} />
    </div>
  )
}

export default ClientSideDemo
