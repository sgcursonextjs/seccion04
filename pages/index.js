//import { Button } from "@nextui-org/react";
//import axios from "axios";
import Image from "next/image";
import { Text, Card, Grid, Row } from "@nextui-org/react";
import { LayOut } from "../components/layouts/layout";
import { PokemonCard } from "../components/pokemon";

export default function HomePage( {pokemons}  ) {

  return (
    <>
     <LayOut title="PokeApp">
      <Grid.Container gap={2} justify="flex-start">
        {
          pokemons.map(({name, id, img}) => (
            <PokemonCard key={id} name={name} id={id} img={img} /> 
          ))
        }
      </Grid.Container>

     </LayOut>
    </>
  )
}


export async function getStaticProps( ctx ){

  const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
                          .then( res => res.ok ? res.json() : Promise.reject(res))
                          .then( res => res)
                          .catch( err => console.warn(err));
  const pokemons = await data.results.map(( poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ i + 1}.png`
  }))
  return{
    props:{
      pokemons
    }
  }
}
