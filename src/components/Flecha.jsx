export default function Arrow(props) {
    var d = null;

    if (props.orientation == "left") {
        d = "M158 48 L82 128 L158 208";
    } else {
        d = "M98 48 L174 128 L98 208";
    }

    const className = `Arrow${props.orientation}`

    return <svg class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" role="img" aria-label="Flecha">
        <circle class={className} cx="128" cy="128" r="125" fill="#00000056"/>
    <path d={d} fill="none" stroke="#ffffff" stroke-width="16" stroke-linecap="round" stroke-linejoin="miter"/>
    </svg>
}