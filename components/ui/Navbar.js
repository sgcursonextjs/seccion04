import Image from "next/image";
import Link from "next/link";
import { Spacer, Text, useTheme } from "@nextui-org/react";


export function Navbar(){

    const { theme } = useTheme();
    //console.log(theme)

    return(
        <>
        <nav style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '0px 20px',
            backgroundColor: theme.colors.gray100.value
        }}>

            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                alt="Icono pokemon"
                width={70}
                height={70}
            />

            <Link href="/" style={{ display: 'flex'}}>
                <>
                <Text color="white" h2>P</Text>
                <Text color="white" h3>okémon</Text>
                </>
            </Link>

            <Spacer css={{ flex: 1}}></Spacer>

           <Link href="/favorites" className="link_favorites">
                <Text color="white">Favorites</Text>
           </Link>
        </nav>
        </>
    )
}