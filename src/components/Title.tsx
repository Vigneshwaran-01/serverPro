import React from "react";

interface MyTitle{
    titleName:string
}

const Title:React.FC<MyTitle>=({titleName})=>{
  return(
    <section className="my-4">
      <h1 className="text-2xl font-semibold text-center">{titleName}</h1>
    </section>
  )
}

export default Title