
import { useRouter } from 'next/router'
import { Card, Grid, Row, Text } from "@nextui-org/react"


export const PokemonCard = ({ name, id, img }) =>{
    const router = useRouter();
    const onClick = () => {
        router.push(`/pokemon/${id}`)
    }

    return(
        <Grid xs={6} sm={3} md={2} mx={1}>
            <Card 
                isHoverable 
                isPressable
                onClick={onClick}
                >
                <Card.Body css={{ p: 1}}>
                    <Card.Image
                        src={img}
                        alt="poke icon"
                        width={100}
                        height={100}
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify="space-between">
                        <Text transform="capitalize">{name}</Text>
                        <Text># {id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}