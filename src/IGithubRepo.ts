export type IGithubRepo = {
    name: string
    description: string | null
    homepage: string | null
    language: string | null
    topics: string[]
    contents_url?: string
    html_url: string

    pushed_at: string
    updated_at?: string
    created_at?: string

    ssh_url?: string
    owner?: any

}


export type IGithubContent = {
    name: string
    path: string
    sha: string
    size: number,
    url: string
    html_url: string
    git_url: string
    download_url: string
    type: string
    content: string
    encoding: string,
    _links: {
        self: string
        git: string
        html: string
    }

}




export const reposStatic = []