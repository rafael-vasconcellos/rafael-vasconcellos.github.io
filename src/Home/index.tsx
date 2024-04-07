import { For, createEffect, createSignal } from 'solid-js'
import Repository from '../components/Repository'
import Tab from '../components/Tab'
import PersonalCard from '../components/PersonalCard'
import { IGithubRepo } from '../IGithubRepo'



export const [ visibility, setVisibility ] = createSignal<1 | 2 | 3>(1)

async function getRepos(): Promise<IGithubRepo[]> {
    return await fetch("https://api.github.com/users/rafael-vasconcellos/repos")
    .then(response => { 
        if (response.status===200) { return response.json() }
        else { return [] }
    })
}


export default function App() { 
  const [ repos, setRepos ] = createSignal<IGithubRepo[]>([])
  const [ list, setList ] = createSignal<IGithubRepo[]>([])


  createEffect(async() => { 
      if (!repos()?.length) { 
        const response = await getRepos()
        if(response?.length) { setRepos(response) }
      } 

      else if (visibility()===1) { 
          const front_end_list = repos().filter(repo => { 
              return repo.topics.some(topic => topic==="front-end" || topic==="landing-page")

          }).sort( (b, a) => b.topics.length>a.topics.length? -1 : 0)

          if ( !list().includes(front_end_list[0]) ) { setList(front_end_list) }

      } else if (visibility()===2) {
          const server_side_list = repos().filter(repo => repo.topics.includes("server-side"))
          .sort( (b, a) => b.topics.length>a.topics.length? -1 : 0)
          if ( !list().includes(server_side_list[0]) ) { setList(server_side_list) }

      } else if (visibility()===3) {
          const others_list = repos().filter(repo => { 
              const cond1 = !repo.topics.includes("front-end")
              const cond2 = !repo.topics.includes("landing-page")
              const cond3 = !repo.topics.includes("server-side")
              return (cond1 && cond2 && cond3)
          })
          .sort( (b, a) => b.topics.length>a.topics.length? -1 : 0)
          if ( !list().includes(others_list[0]) ) { setList(others_list) }
      }
  })

  return ( 
      <main class='flex px-6 gap-20'>
        <section class='h-screen flex justify-center items-center'>
          <PersonalCard />
        </section>

        <section>
          <nav class='px-2 py-4 mb-5 text-zinc-400'>
              <Tab name='front-end' visibility={1} />
              <Tab name='server-side' visibility={2} />
              <Tab name='others' visibility={3} />
          </nav>
          <section class='px-6 py-8 flex flex-col gap-8'>
            <For each={list()}>
                {repo => <Repository repo={repo} />}
            </For>
          </section>
        </section>
      </main>
  )
}


/*
    sobre, cursos profissionalizantes, interesses futuros
    título específico, exp, área(s) de atuação, serviços oferecidos, imagens, 

    feito: tecnologias
*/
