export default function Laptop(props) {
    return <svg class="w-full" viewBox="0 0 281 167" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<a href={props.href}><path d="M209.762 140.727H70.2625V144.907H209.762V140.727Z" fill="#333333"/>
<path d="M246.73 0H33.2949C28.6723 0 24.9249 3.7429 24.9249 8.36V134.457C24.9249 139.074 28.6723 142.817 33.2949 142.817H246.73C251.353 142.817 255.1 139.074 255.1 134.457V8.36C255.1 3.7429 251.353 0 246.73 0Z" fill="#111111"/>
<path d="M140.012 10.45C141.168 10.45 142.105 9.51429 142.105 8.36002C142.105 7.20574 141.168 6.27002 140.012 6.27002C138.857 6.27002 137.92 7.20574 137.92 8.36002C137.92 9.51429 138.857 10.45 140.012 10.45Z" fill="#333333"/>
<path d="M140.012 9.05666C140.398 9.05666 140.71 8.74476 140.71 8.36C140.71 7.97524 140.398 7.66333 140.012 7.66333C139.627 7.66333 139.315 7.97524 139.315 8.36C139.315 8.74476 139.627 9.05666 140.012 9.05666Z" fill="black"/>
<path d="M244.637 17.4167H35.3875V135.153H244.637V17.4167Z" fill="white"/>
<g filter="url(#filter0_n_180_149)">
<rect x="35.5125" y="17.1" width="209" height="118" fill="url(#pattern0_180_149)"/>
</g>
<path d="M14.4625 142.817H265.562L276.025 153.267H4L14.4625 142.817Z" fill="#F0F0F0"/>
<g filter="url(#filter1_d_180_149)">
<path d="M4 153.267H276.025V155.357C276.025 157.447 273.932 158.84 271.84 158.84H8.185C6.0925 158.84 4 157.447 4 155.357V153.267Z" fill="#D4D4D4"/>
</g>
<path d="M163.03 144.21H116.995C116.225 144.21 115.6 144.834 115.6 145.603V148.39C115.6 149.16 116.225 149.783 116.995 149.783H163.03C163.8 149.783 164.425 149.16 164.425 148.39V145.603C164.425 144.834 163.8 144.21 163.03 144.21Z" fill="#E6E6E6"/>
<defs>
<filter id="filter0_n_180_149" x="35.5125" y="17.1" width="209" height="118" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feTurbulence type="fractalNoise" baseFrequency="2 2" stitchTiles="stitch" numOctaves="3" result="noise" seed="9443" />
<feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
<feComponentTransfer in="alphaNoise" result="coloredNoise1">
<feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
</feComponentTransfer>
<feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
<feFlood flood-color="rgba(0, 0, 0, 0.05)" result="color1Flood" />
<feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
<feMerge result="effect1_noise_180_149">
<feMergeNode in="shape" />
<feMergeNode in="color1" />
</feMerge>
</filter>
<pattern id="pattern0_180_149" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image" transform="matrix(0.00069621 0 0 0.00123312 -0.00127093 0)"/>
</pattern>
<filter id="filter1_d_180_149" x="0" y="153.267" width="280.025" height="13.5733" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_180_149"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_180_149" result="shape"/>
</filter>
<image id="image" preserveAspectRatio="none" width={1450} height={900} href={props.image}/>
</defs></a>
</svg>
}