import {useState} from "react"

export default function Booking(){

const [step,setStep]=useState(1)

return(

<div className="max-w-4xl mx-auto py-24">

<h2 className="text-4xl mb-10">

Book Your Visit

</h2>


{step===1&&(

<div>

Select Barber

<button
onClick={()=>setStep(2)}
className="btn-primary">

Next

</button>

</div>

)}


{step===2&&(

<div>

Select Service

<button
onClick={()=>setStep(3)}
className="btn-primary">

Next

</button>

</div>

)}


{step===3&&(

<div>

Select Time

<button
className="btn-primary">

Confirm Booking

</button>

</div>

)}

</div>

)
}