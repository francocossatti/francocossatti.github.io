export default function ProjectButton(props) {
return <button name="projectButton" value={props.texto} class="disabled:bg-[#FFF0DB] disabled:text-[#21201F] text-[14px] md:text-[16px] drop-shadow-lg font-open-sans text-[#D3CFCA] w-hug p-4 md:w-fit md:px-8 md:py-3 rounded-full bg-[#21201F] p-2" disabled={props.isDisabled}>{props.texto}</button>
}