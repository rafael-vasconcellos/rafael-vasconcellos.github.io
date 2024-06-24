import Socials from "./Socials";


export default function Footer() { 

    return( 
        <footer class="py-4 my-4 text-zinc-400">
            <Socials />
            <p class="text-center">Rafael Vasconcelos</p>
            <p class="text-center py-2">{new Date().getFullYear()}</p>
        </footer>
    )
}