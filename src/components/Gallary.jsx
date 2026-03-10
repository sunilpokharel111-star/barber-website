export default function Gallery(){

return(

<div id="gallery"
className="max-w-6xl mx-auto py-24">

<h2 className="text-4xl mb-10">

Real Results

</h2>

<div className="grid md:grid-cols-3 gap-6">

<img loading="lazy"
src="/img1.jpg"
className="rounded-xl hover:scale-105 transition"/>

<img loading="lazy"
src="/img2.jpg"
className="rounded-xl hover:scale-105 transition"/>

<img loading="lazy"
src="/img3.jpg"
className="rounded-xl hover:scale-105 transition"/>

</div>

</div>

)
}