export const colors = {
    TypeScript: "#3178c6",
    CSS: "#563d7c",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Java: "#b07219"
}


export function dateSubtract(updatedAt?: string, name?: string) { 

    // Suponha que "updatedAt" seja uma data no formato ISO. ex.: "2022-01-01T00:00:00Z"
    // Crie objetos de data para "updatedAt" e a data atual
    let updatedAtDate: any = new Date(updatedAt ?? "");
    let currentDate: any = new Date();
    if(!updatedAt || isNaN(updatedAtDate.getTime())) { return "Invalid date!" }


    // Calcule a diferença em milissegundos
    /* o objeto Date em JavaScript armazena a data como o número de milissegundos desde a época Unix (1º de janeiro de 1970) */
    let differenceInMilliseconds = currentDate - updatedAtDate;

    // Converta a diferença para minutos, horas, dias, etc.
    class Units { 
        constructor( public differenceInMilliseconds: number ) {}
        differenceInSeconds = {
            value: Math.floor(this.differenceInMilliseconds / 1000),
            name: "second"
        }
        differenceInMinutes = {
            value: Math.floor(this.differenceInSeconds.value / 60),
            name: "minute"
        }
        differenceInHours = {
            value: Math.floor(this.differenceInMinutes.value / 60),
            name: "hour"
        }
        differenceInDays = {
            value: Math.floor(this.differenceInHours.value / 24),
            name: "day"
        }
        differenceInWeeks = {
            value: Math.floor(this.differenceInDays.value / 7),
            name: "week"
        }
        differenceInMonths = {
            value: Math.floor(this.differenceInWeeks.value / 4),
            name: "month"
        }
        differenceInYears = {
            value: Math.floor(this.differenceInMonths.value / 12),
            name: "year"
        }
    }

    const units: Units & {[key: string]: any} = new Units(differenceInMilliseconds)
    for(let unit of Object.keys(units).reverse()) { 
        if (units[unit].value > 0) { 
            const q = units[unit].value>1? "s" : ""
            return units[unit].value+ " " + units[unit].name + q
        }
    }

    return "Just now!"

    // Agora você pode criar uma string que expressa a diferença
/*     let differenceString = units.differenceInYears + ' anos, ' +
                        (units.differenceInMonths % 12) + ' meses, ' +
                        (units.differenceInWeeks % 4) + ' semanas, ' +
                        (units.differenceInDays % 7) + " dias, " + 
                        (units.differenceInHours % 24) + " horas, " + 
                        (units.differenceInMinutes % 60) + " minutos, e " + 
                        (units.differenceInSeconds % 60) + " segundos atrás"; */

}


export const repoMock = {
    name: "RepoName",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsa perspiciatis?`,
    topics: ['t1', 't2', 't3'],
    language: "TypeScript" as "TypeScript",
    updated_at: "2022-01-01T00:00:00Z"
}