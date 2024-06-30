import image0 from "../assets/heroimage1.png";

const ServiceDetailsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[550px]">
        <img src={image0} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto h-full flex flex-col justify-center top-1 px-4 relative z-10">
        <pre className="text-l font-bold text-yellow-500 word-spacing-lg" >S e r v i c e s</pre>
          <h1 className="text-[72px] font-extrabold mb-4 text-white sm:font-semibold sm:text-2xl">Sparkle and Shine <br/>Our Promise to You</h1>
        </div>
      </section>
      {/* content */}
      <section className='mt-20 mx-8 md:mx-56 flex flex-col md:flex-row gap-16'>
  <section id='left' className='w-full md:w-1/2 h-2/3'>
    <div>
      <img
        loading="lazy"
        srcSet={image0}
        className="w-full aspect-[1.54] md:w-[1000px] sm:w-[500px]"
      />
    </div>
    <div className="mt-7 w-full sm:mt-2 sm:w-[525px]">
      <div className="flex flex-col md:flex-row gap-1 sm:flex-row" >
        <div className="flex flex-col w-full md:w-1/3">
          <img
            loading="lazy"
            srcSet={image0}
            className="grow w-full aspect-[1.49] mt-7 md:mt-0 sm:w-[150px] sm:mt-0"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/3">
          <img
            loading="lazy"
            srcSet={image0}
            className="grow w-full aspect-[1.49] mt-7 md:mt-0 sm:w-[150px] sm:mt-0"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/3">
          <img
            loading="lazy"
            srcSet={image0}
            className="grow w-full aspect-[1.49] mt-7 md:mt-0 sm:w-[150px] sm:mt-0"
          />
        </div>
      </div>
    </div>
  </section>
  <section id='right' className='w-full md:w-1/2 '>
    <div className="px-5 mt-7 md:mt-10">
      <div className="gap-5 font-bold text-sky-900">
        <div className='flex flex-col md:flex-row'>
          <div className="text-5xl md:text-2xl font-bold sm:text-3xl ">1.</div>
          <div className="flex-auto self-start mt-5 text-3xl md:text-3xl font-extrabold">Office Cleaning</div>
        </div>
        <p className='w-full md:w-1/2 mt-5 text-[#64717C] font-light text-[18px] sm:text-base'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia exercitationem voluptas, facere quod vitae excepturi rerum libero laborum illum voluptatibus eum in repudiandae nihil ratione animi quas. Harum, velit? Est.
        </p>
        <button className='bg-yellow-500 text-white font-normal px-4 py-3 rounded-lg m-3 mt-3 shadow-xl sm:mx-0'>
          Contact US
        </button>
        <div className='flex flex-wrap gap-6 w-full md:w-1/2 mt-5 sm:w-[525px]'>
          <div className='bg-white p-3 rounded-3xl hover:text-white text-l hover:bg-yellow-500 shadow-md w-full md:w-[calc(50%-12px)] flex justify-center items-center sm:rounded-md'>feature 1</div>
          <div className='bg-white p-3 rounded-3xl hover:text-white text-l hover:bg-yellow-500 shadow-md w-full md:w-[calc(50%-12px)] flex justify-center items-center sm:rounded-md'>feature 1</div>
          <div className='bg-white p-3 rounded-3xl hover:text-white text-l hover:bg-yellow-500 shadow-md w-full md:w-[calc(50%-12px)] flex justify-center items-center sm:rounded-md'>feature 1</div>
        </div>

      </div>
    </div>
  </section>
      </section>



        <section >
        <section className='mt-16 mx-8 md:mx-56 w-1/2 sm:text-sm' >
            <h2 className='text-3xl font-bold text-sky-900 sm:text-2xl'>More Information</h2>
            <p className='mt-4 text-lg text-gray-700 sm:text-2x'>
              Office cleaning services are essential for maintaining a clean, organized, and productive work environment. These professional services encompass a wide range of tasks, including
            </p>
            <div className='flex flex-col md:flex-row justify-between mt-10 sm:flex-row'>
              <div className='flex flex-col items-center w-full md:w-1/3 text-center'>
                <div className='bg-gray-200 p-6 rounded-lg'>
                  <img src={image0} alt='Point 1' className='w-12 h-12' />
                </div>
                <h3 className='mt-4 text-xl font-bold text-gray-900'>Point 1</h3>
                <p className='mt-2 text-gray-600'>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <div className='flex flex-col items-center w-full md:w-1/3 text-center mt-10 md:mt-0 sm:mt-0'>
                <div className='bg-gray-200 p-6 rounded-lg'>
                  <img src={image0} alt='Point 2' className='w-12 h-12' />
                </div>
                <h3 className='mt-4 text-xl font-bold text-gray-900'>Point 1</h3>
                <p className='mt-2 text-gray-600'>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <div className='flex flex-col items-center w-full md:w-1/3 text-center mt-10 md:mt-0 sm:mt-0'>
                <div className='bg-gray-200 p-6 rounded-lg'>
                  <img src={image0} alt='Point 3' className='w-12 h-12' />
                </div>
                <h3 className='mt-4 text-xl font-bold text-gray-900'>Point 1</h3>
                <p className='mt-2 text-gray-600'>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
          </section>
        </section>
        <section></section>
      
        
      
    </div>
  )
}

export default ServiceDetailsPage