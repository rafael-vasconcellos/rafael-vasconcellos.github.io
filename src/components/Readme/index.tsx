import { Show, createEffect, createSignal } from "solid-js"
import { SolidMarkdown } from "solid-markdown"
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import bash from 'highlight.js/lib/languages/bash'
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/base16/dark-violet.css';
import './style.css'



hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('bash', bash);

export default function Readme( {repoName}: { repoName?: string } ) { 
    const [ content, setReadmeContent ] = createSignal<string>()
    const [ toggle, setToggle ] = createSignal(false)
    let button: HTMLButtonElement | undefined


    createEffect( async() => { 
        if (!content() && toggle() && repoName) { 
            const link = `https://api.github.com/repos/rafael-vasconcellos/${repoName}/readme`
            const download_url = await fetch(link).then(response => { 
                if (response.status === 200) { return response.json() }
            })
            .then(response => response?.download_url)

            if(download_url) { 
                fetch(download_url)
                .then(response => response.text())
                .then(response => { 
                    return response.replaceAll("assets/", `https://raw.githubusercontent.com/rafael-vasconcellos/${repoName}/main/assets/`)
                })
                .then(response => setReadmeContent(response))
                .then(() => hljs.highlightAll())

            } else { setReadmeContent("Readme Not Found!") }
        }

        if (toggle() && button) { button.style.transform = "rotate(180deg)" }
        else if(button) { button.style.transform = "" }

    })


    return(
        <div>
            <div class="px-8 my-2 flex justify-between items-center">
                <b>README</b>
                <button class="bg-zinc-500 p-2 rounded-full"
                ref={button} onClick={() => { setToggle(!toggle()) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>

            <div class="expand py-2">
                <Show when={toggle()}>
                    <Show when={content()} fallback={ 
                        <div class="flex flex-col gap-3">
                            <p class="w-full h-5 bg-gray-800 animate-pulse"></p>
                            <p class="w-[85%] h-5 bg-gray-800 animate-pulse"></p>
                            <p class="w-[95%] h-5 bg-gray-800 animate-pulse"></p>
                            <p class="w-[75%] h-5 bg-gray-800 animate-pulse"></p>
                        </div>
                    }>
                        <Show when={repoName==="soundplayer"}>
                            <iframe src="https://soundplayer.vercel.app/?p=playmaker-356484228/sets/s22" frameborder="0" 
                             class="py-3 mb-4" height="125" width="400"></iframe>
                        </Show>
                        <SolidMarkdown rehypePlugins={[rehypeRaw as any]} children={content()} />
                    </Show>
                </Show>
            </div>
        </div>
    )
}

