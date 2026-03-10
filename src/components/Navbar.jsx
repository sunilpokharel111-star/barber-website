import MagneticButton from "./MagneticButton"

export default function Navbar(){

return(

<div className="glass fixed w-full z-50">

<div className="max-w-6xl mx-auto
flex justify-between items-center
py-4">

<div className="text-xl font-bold">

SIGNATURE SERIES

</div>

<div className="flex gap-8 items-center">

<a href="#">Home</a>
<a href="#services">Services</a>
<a href="#barbers">Barbers</a>
<a href="#gallery">Gallery</a>
<a href="#contact">Contact</a>

<MagneticButton text="Claim Your Chair"/>

</div>

</div>

</div>

)

}