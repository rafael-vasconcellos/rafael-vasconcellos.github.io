import { Show, createMemo, createSignal } from "solid-js";
import Socials from "../Socials";
import './style.css'


export default function PersonalCard() { 
    const [ toggle, setToggle ] = createSignal(2)
    const rotate = createMemo(() => toggle()? "rotate-180" : "")
    const animate = createMemo(() => toggle()!==2? "animate-slideLeft" : "")
    const buttonStyle = createMemo(() => toggle()? "-left-8" : "-left-20 rounded-full")
    // cores: bg-gray-800 vs bg-secondary


    return ( 
        <>
            <button class={`bg-zinc-500 absolute ${buttonStyle()} hover:bg-primary flex mx-2 px-1 py-3 items-center`}
            onClick={ () => setToggle(toggle()? 0 : 1) }>
                <Show when={!toggle()}>
                    <div class="w-11 h-11 bg-contain bg-center rounded-full" style={ {"background-image": `url(https://avatars.githubusercontent.com/u/91399064?v=4)`} }></div>
                </Show>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    class={`size-6 ${rotate()}`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>

            <Show when={toggle()}>
                <div class={`${animate()} w-96 h-fit py-6 bg-secondary rounded-3xl relative flex flex-col justify-center items-center`}>
                    <img class='w-28 h-28 rounded-full' src="https://avatars.githubusercontent.com/u/91399064?v=4" />
                    <b class="my-2">Rafael Vasconcelos</b>
                    <div class="my-2 flex flex-col items-center">
                        <div class='flex gap-1 items-center'>
                            <svg class="fill-zinc-400" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                                <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
                            </svg>
                            Rio de Janeiro
                        </div>
                        <div class='flex gap-2 items-center'>
                            <svg class="fill-zinc-400" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                                <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path>
                            </svg>
                            rafael.vasconcelos7497@gmail.com
                        </div>
                    </div>
                    <div class="w-full px-6 py-3">

                        <h1 class="text-xl font-bold my-1">Sobre</h1>
                        <p>Dev Fullstack - Formado em Análise e Desenvolvimento de Sistemas pela Unigranrio em 2023/2</p>
                        <h1 class="text-xl font-bold my-1">Techs</h1>
                        <div class="my-4 flex justify-center gap-1">
                            <img alt="Python" title="Python" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
                            <img alt="Java" title="Java" height="50" width="30" style="padding: 0 4px" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/java/java-original.svg" />
                            <img alt="Go" title="Go" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/go/go-original-wordmark.svg" />
                            <img alt="Typescript" title="Typescript" height="50" width="30" style="padding: 0 4px" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg" />
                            <img alt="Nest" title="Nest" height="50" width="30" style="padding: 0 4px" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/nestjs/nestjs-original.svg" />
                            <img alt="React" title="React" height="30" width="30" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg" />
                            <img alt="SolidJS" title="SolidJS" height="30" width="30" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/solidjs/solidjs-original.svg" />
                            <img alt="Astro" title="Astro" height="30" width="30" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/astro/astro-original.svg" />
                        </div>
                        <div class="my-7">
                            <p>🇧🇷 PT-BR Nativo</p>
                            <p>🇺🇸 EN Intermediário</p>
                        </div>
                        
                    </div>
                    <Socials class="absolute bottom-0" />
                </div>
            </Show>
        </>
    )
}