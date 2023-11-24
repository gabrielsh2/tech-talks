import style from './style.module.css'

export function PokemonList({ pokemonList }) {
  return (
    <div className={style['list']}>
      {pokemonList.map(({ name }) => (
        <div className={style['pokemon']} key={name}>
          {name}
        </div>
      ))}
    </div>
  )
}
