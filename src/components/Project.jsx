import { createEffect, createSignal, For } from 'solid-js';

import ProjectButton from './ProjectButton.jsx';
import Flecha from './Flecha.jsx';

import Smartphone from './Smartphone.jsx'
import Laptop from './Laptop.jsx'

import berrutiSmartphone from '../assets/berrutiSmartphone.png'
import berrutiLaptop from '../assets/berrutiLaptop.png'
import WareraLaptop from '../assets/WareraAppLaptop.png'
import WareraSmartphone from '../assets/WareraAppSmartphone.png'

import logoSolidJS from './svgComponents/LogoSolidJS.jsx';
import logoMotion from './svgComponents/LogoMotion.jsx';
import logoTailwind from './svgComponents/LogoTailwind.jsx';
import logoJavascript from './svgComponents/LogoJavascript.jsx'

const [projects, setProjects] = createSignal([
        {Laptop: berrutiLaptop.src, Smartphone: berrutiSmartphone.src, Summary: <p>Diseño para una <span class="text-[#FFF0DB] font-bold">agencia de transporte interdepartamental</span> en el departamento de Colonia.</p>, Skills: {logoSolidJS, logoMotion, logoTailwind}}, 
        {Laptop: WareraLaptop.src, Smartphone: WareraSmartphone.src, Summary: <p>Aplicación web con <span class="text-[#FFF0DB] font-bold">JavaScript</span>, Tailwind CSS y Chart.js que optimiza builds con <span class="text-[#FFF0DB] font-bold">algoritmos genéticos, UCB, Simulated Annealing y Monte Carlo</span>.
</p>, Skills: {logoJavascript, logoTailwind}}])

export default function Project() {
    const [projectIndex, setProjectIndex] = createSignal(0)
    const [device, setDevice] = createSignal("Laptop")
  
    createEffect(() => {
        const projectButtons = document.getElementsByName('projectButton');
        const ArrowButtons = document.querySelectorAll('circle')

        const [selectedButton, setSelectedButton] = createSignal(projectButtons[0])

        projectButtons.forEach((button) => {
                button.addEventListener('click', function() {
                    selectedButton().removeAttribute('disabled')
                    button.setAttribute('disabled', '')
                    setDevice(button.getAttribute('value'))
                    setSelectedButton(button);
                })
            })

        ArrowButtons.forEach((button) => {
            button.addEventListener('click', function() {
                    console.log("hola")
                    if (button.getAttribute('class') == 'Arrowleft' && projectIndex() != 0) {
                    setProjectIndex(projectIndex() - 1)
                    } else if (button.getAttribute('class') !== 'Arrowleft' && projectIndex() != (projects().length - 1) ) {
                    setProjectIndex(projectIndex() + 1)
                    }
                })
        })})



  return <><div class="w-fit lg:w-[32rem] lg:shrink-0 flex flex-col gap-4">
            <h1 class="w-full uppercase text-[3.625rem] lg:text-[5.5rem] text-center lg:text-left font-urbanist text-[#D3CFCA] leading-[0.95]">Mis <br class="lg:hidden"/><span class="text-[#FFF0DB] font-extrabold"> Proyectos</span></h1>

            <div class="flex w-full gap-4 justify-center lg:justify-start">
                <ProjectButton isDisabled={true} texto="Laptop"/>
                <ProjectButton isDisabled={false} texto="Smartphone"/>
            </div>

            <div class="flex flex-col gap-5">
                <div class="flex gap-4 lg:justify-start justify-center">
                <For each={Object.values(projects()[projectIndex()].Skills)}>
                    {(item) => (
                        <div class="text-[12px] lg:text-[14px] flex gap-2 justify-center text-center drop-shadow-lg font-open-sans text-[#D3CFCA] w-1/3 rounded-full bg-[#21201F] p-2 lg:py-3">{item}</div>
                    )}
                </For>
                
                
                </div>
                <div class="text-[#D3CFCA] drop-shadow-lg text-[15px] lg:text-[18px] font-open-sans bg-[#21201F] p-4 lg:p-6 rounded-2xl lg:leading-relaxed">{projects()[projectIndex()].Summary}</div>
            </div>
        </div>
        <div class="flex w-full lg:w-1/3 self-center">
            <Flecha orientation="left"/>
            {device() == "Laptop" ? <Laptop image={projects()[projectIndex()].Laptop}/> : <Smartphone image={projects()[projectIndex()].Smartphone}/>}
            <Flecha/>
        </div></>
}