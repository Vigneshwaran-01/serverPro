import React, { ReactNode } from "react";

interface Feature{
  
    icon:ReactNode,
    title:string,
    description:string
  
}
interface FeaturesProps {
  featuresData: Feature[]; // Array of Feature objects
}

const ServiceSection :React.FC<FeaturesProps> =({featuresData})=>{
    return(
        <section className="mt-8 bg-gray-900 text-white py-12 ">

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         
         {
          featuresData.map((data,index)=>(
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-start hover:bg-gray-700 transition duration-300">
            <div className="mb-4 text-blue-500 text-4xl">
              {data.icon}
            </div>
            <h3 className="text-xl font-semibold text-blue-500 mb-4">{data.title}</h3>
            <p className="text-gray-400 ">
             {data.description}
            </p>
          </div>
          ))
         }

        

        </div>
      </section>
      
    )
}

export default ServiceSection;