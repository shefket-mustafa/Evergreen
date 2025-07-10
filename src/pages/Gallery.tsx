export default function Gallery(){



    return (

    

<div className="max-w-screen-xl h-screen mx-auto px-4 mt-20 py-12">
  <h2 className="text-4xl text-center font-bold text-emerald-500 mb-10">Gallery</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <div className="grid grid-cols-2 gap-4">
      <img src="/images/lawn1.jpg" className="rounded-xl" />
      <img src="/images/lawn2.jpg" className="rounded-xl" />
      <img src="/images/lawn3.jpg" className="rounded-xl" />
      <img src="/images/lawn4.jpg" className="rounded-xl" />
      <img src="/images/lawn4.jpg" className="rounded-xl" />
      <img src="/images/lawn4.jpg" className="rounded-xl" />
    </div>

    
    <div className="flex flex-col justify-center gap-6">
      <div className="bg-white p-4 shadow-md rounded-lg">
        <p className="text-gray-700 italic">“EverGreen transformed my yard! It looks better than ever.”</p>
        <p className="text-sm text-gray-500 mt-2">– Sarah T., Sofia</p>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <p className="text-gray-700 italic">“Super professional and efficient — highly recommend!”</p>
        <p className="text-sm text-gray-500 mt-2">– Daniel K., Plovdiv</p>
      </div>
    </div>
  </div>
</div>
)
}