import { setVisibility, visibility } from "../Home"

export default function Tab( props: { visibility: 1 | 2 | 3, name: string } ) {
    return (
        <span data-visibility={visibility() === props.visibility} class='mx-4 py-3 cursor-pointer data-[visibility=true]:selected' 
        onClick={() => { 
            if(visibility() !== props.visibility) {setVisibility(props.visibility)}
        }}>{props.name}</span>
    )
}