import { For, createEffect, createSignal } from 'solid-js'
import Repository from '../components/Repository'
import Tab from '../components/Tab'
import PersonalCard from '../components/PersonalCard'
import { IGithubRepo } from '../IGithubRepo'
import Footer from '../components/Footer'



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

          }).sort( (b, a) => b.topics?.length>a.topics?.length? -1 : 0)
          .sort((b, a) => { 
            if (a.topics?.length===b.topics?.length) { 
                if (b.homepage && !a.homepage) { return -1 }
                const n = Math.round(Math.random())
                return n? -1 : 0
            }

            return 0
          })
          if (list()?.length !== front_end_list?.length) { setList(front_end_list) }

      } else if (visibility()===2) {
          const server_side_list = repos().filter(repo => repo.topics.includes("server-side"))
          .sort( (b, a) => b.topics.length>a.topics.length? -1 : 0)
          if (list()?.length !== server_side_list?.length) { setList(server_side_list) }

      } else if (visibility()===3) { 
          const condition = (repo: IGithubRepo) => { 
              const cond1 = !repo.topics.includes("front-end")
              const cond2 = !repo.topics.includes("landing-page")
              const cond3 = !repo.topics.includes("server-side")
              return (cond1 && cond2 && cond3)
          }

          const others_list = repos().filter(repo => condition(repo))
          .sort( (b, a) => b.topics.length>a.topics.length? -1 : 0)
          if (list()?.length !== others_list?.length) { setList(others_list) }
      }
  })

  return ( 
      <>
        <main class='h-auto min-h-screen mb-12 flex'>
            <section class='w-full h-full px-11 min-w-[360px] flex flex-col items-center'>
                <nav class='px-2 py-4 mb-5 text-zinc-400'>
                    <Tab name='front-end projects' visibility={1} />
                    <Tab name='server-side projects' visibility={2} />
                    <Tab name='others projects' visibility={3} />
                </nav>
                <section class='py-8 flex flex-col gap-8'>
                    <For each={list()}>
                        {repo => <Repository repo={repo} />}
                    </For>
                </section>
            </section>

            <section class={`h-[600px] py-8 pr-8 sticky top-0 flex items-center`}>
                <PersonalCard />
            </section>
        </main>
        <Footer />
      </>
  )
}


/*
    sobre, cursos profissionalizantes, interesses futuros
    título específico, exp, área(s) de atuação, serviços oferecidos, imagens, 

    feito: tecnologias
*/
