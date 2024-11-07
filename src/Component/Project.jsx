import rkresidency from '../Images/rkresidency.jpg';
import weatherapp from '../Images/weatherapp.png';
import quiz from '../Images/quiz.jpg';
export default function Project() {
    return <section id='project' className="flex flex-col py-20 px-5 justify-center bg-primary text-white ">
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
        <h1 className="text-4xl border-b-4 mb-5 w-[140px] font-bold">Projects</h1>
        <p> These are some of my best Projects. I have built these with React, and Tailwind Css. Check them out.</p>
        </div>
        
        </div>

        <div className="w-full">
        <div className="flex  flex-col md:flex-row  px-10 gap-5">
            <div className="relative">
           <img className='[h-200px] w-[500px]' src={rkresidency} alt='rkresidency'/>
            <div className="project-desc">
                <p className='text-center px-5 py-5'>An Accommodation website built with React.js and beautiful tailwind css.</p>
            </div>
            </div>

            <div className="relative">
            <img className='[h-200px] w-[400px]'src={weatherapp} alt='weatherapp'/>
            <div className="project-desc">
            <p className='text-center px-5 py-5'>Using Axios API to show weather application styling with tailwind css.</p>
            </div>
            </div>

            <div className="relative">
            <img className='[h-200px] w-[500px]' src={quiz} alt='quizapp'/> 
            <div className="project-desc">
            <p className='text-center px-5 py-5'>A Beautiful quizapp using React.js.</p>
            </div>
            </div>
        
        </div>
        </div>
    </section>
}