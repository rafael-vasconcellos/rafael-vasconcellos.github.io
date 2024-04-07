import { For, Show } from "solid-js";
import { IGithubRepo } from "../IGithubRepo";
import { colors, dateSubtract } from "../utils";
import Readme from "./Readme";


const Repository = function( { repo }: {repo?: IGithubRepo} ) { 
    const language = repo?.language as keyof typeof colors
    const animate = repo? "" : "animate-pulse"

    return (
        <div class={`w-[750px] min-h-44 p-4 ${animate} rounded-3xl flex flex-col gap-3 text-white`} style={ {"background-color": "#161B22"} }>
            <a class="text-2xl inter text-primary" target="_blank" href={repo?.html_url}>{repo?.name}</a>
            <p class="text-zinc-400 max-w-[533px] mb-2">{repo?.description}</p>
            <div class="flex gap-3 px-3 flex-wrap">
                <For each={repo?.topics}>
                    {topic => <span class="px-2 rounded-xl text-nowrap text-primary bg-primary/25">{topic}</span>}
                </For>
            </div>

            <Show when={repo}>
                <div class="py-1 flex gap-10 items-center text-zinc-400">
                    <span class={`flex items-center gap-2`}>
                        <div class="w-3 h-3 rounded-full" style={ {"background-color": colors[language] ?? "white"} }></div>
                        {language}
                    </span>
                    <span>Last update: {dateSubtract(repo?.pushed_at)}</span>
                </div>
            </Show>
            <Show when={repo?.homepage}>
                <div class="py-2">
                    <b class="text-primary mx-1">Deploy link:</b> <a class="hover:underline hover:decoration-solid" target="_blank" href={repo?.homepage ?? ''}>{repo?.homepage}</a>
                </div>
            </Show>
            {repo?.name && <Readme name={repo?.name} />}
        </div>
    )
}

export default Repository