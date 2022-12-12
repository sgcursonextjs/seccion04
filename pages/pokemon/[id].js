import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import  {LayOut} from '../../components/layouts/layout'

export default function PokemonPage({pokemon}){
    console.log(pokemon)
    return(
        <LayOut title={`Pokemon ${pokemon.name}`}>
             <Grid.Container css={{marginTop: '5px'}} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: '30px'}}>
                        <Card.Body>
                            <Card.Image 
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                width={'100%'}
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display:'flex', justifyContent: 'space-between'}}>
                            <Text h1 transform='capitalize'>{pokemon.name}</Text>
                            <Button
                                color={'gradient'}
                                ghost
                            >Guardar en favorito</Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container direction='row' display='flex' gap={0}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
             </Grid.Container>
        </LayOut>
    )
}

export async function getStaticPaths(){
    const pokemons151 = [...Array(151)].map((value, index) => `${ index + 1}`);
    //console.log(pokemons151)
    return{
        paths: pokemons151.map( id => ({
            params: { id }
        })),
        fallback: false
    }
}


export async function getStaticProps({params}){
    const { id } = params;

    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                          .then( res => res.ok ? res.json() : Promise.reject(res))
                          .then( res => res)
                          .catch( err => console.warn(err));

    return{
        props:{
            pokemon: data
        }
    }
}
