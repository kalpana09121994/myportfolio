import image from '../Images/5.jpg';

export default function About (){
    return <section id='about' className="flex flex-col md:flex-row bg-secondary">
        <div className="md:w-1/2 px-20">
            <img className='px-0..10xc py-10' src={image} alt='about image'/>
        </div>
        <div className="md:w-1/2 flex flex-centre">
            <div className="flex flex-col justify-center text-white">
             <h1 className="text-3xl border-b-4 mb-5 w-[150px] font-bold">About Me</h1>
             <p className="pb-5">Hi my name is R Kalpana. I am a Frontend Web Developer. I build beautiful websites with React.js and Tailwind Css </p>
             <p className="pb-5">I am Proficient in Frontend skills like React.js, Axios, Javascript, Tailwind Css, Css3 and many more. </p>
             <p>In Database i know mysql</p>
             </div>
        </div>
    </section>

}
