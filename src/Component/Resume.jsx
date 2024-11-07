import resume from '../Images/resume.jpg';

export default function Resume (){
    return <section id='resume' className="flex flex-col md:flex-row bg-secondary py-8">
        <div className="md:w-1/2 px-20 justify-center">
            <img className='w-[500px] py-10' src={resume} alt='about image'/>
        </div>
        <div className="md:w-1/2 flex flex-centre">
            <div className="flex flex-col  text-white">
             <h1 className="text-4xl border-b-4 mb-5 w-[130px] font-bold">Resume</h1>
             <br/><br/><p className="pb-7 ">You can view my resume <br/><br/><a  className='btn'href='/resume.pdf'>Download</a></p>
             
             </div>
        </div>
    </section>

}