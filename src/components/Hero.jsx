import MagneticButton from "./MagneticButton"
import {motion} from "framer-motion"

export default function Hero(){

return(

<div className="h-screen flex items-center">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:.6}}>

<h1 className="text-6xl mb-6">

Precision Cuts
for Modern Gentlemen

</h1>

<p className="text-gray-300 mb-8">

Premium fades, tapers and beard grooming

</p>

<div className="flex gap-4">

<MagneticButton
text="Claim Your Chair"
/>

<button
className="btn-ghost">

Explore Styles

</button>

</div>

</motion.div>


<div>

<img
src="/img.png"
className="rounded-xl"/>

</div>

</div>

</div>

)
}