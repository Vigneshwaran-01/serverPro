import React from 'react';
import '../index.css'


interface Feature {
  icon: React.ReactNode; 
  description: string; 
}

interface Plan {
  title: string;
  price: number;
  features: Feature[]; 
}

interface PlansProps {
  planData: Plan[];
}

const PricingPlan: React.FC<PlansProps> = ({planData}) => {


  return (
    <section className="py-16 bg-gray-900">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      
     {
      planData.map((data,index)=>(
        <div  key={index}  className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col gap-6">
        {/* Plan Header */}

        <div className="flex flex-col justify-between items-center border-b border-gray-700 pb-4">
          <h2 className="text-xl font-semibold text-white">{data.title}</h2>
          <h2 className="text-2xl font-bold text-blue-500">
            <span>${data.price}</span>
            <span className="text-sm font-medium text-gray-400">/mo</span>
          </h2>
        </div>

        {/* Features */}
        {
        data.features.map((featureData,index)=>(
          <div key={index} className="space-y-4">
          <div className="flex items-center gap-2 text-gray-400">
            {featureData.icon}
            <h3 className="text-lg">{featureData.description}</h3>
          </div>
         
        </div>
        ))
        }

        {/* Button */}
        <div className="mt-3">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold transition duration-300">
            Select Plan
          </button>
        </div>
      </div>
      ))
     }

  
    </div>
  </section>
  
  );
};

export default PricingPlan;
