
//tspfc - code snippet

export interface myProps { //defining types for props
    name:string,
    age:number,
    married?:boolean // ? mark means optional
}

export function LearnProps ({age,name}: myProps) {
  return (
    <div>
      {age}
      {name}
    </div>
  );
}
//another way for props
// /FC=functional componenet
// import {FC} from 'react'
// export const Person:FC<myProps>=({name,age})=>{
//     return( <>
//        <h1>{name}</h1>
//     <h1>{age}</h1>
//     </>)
 
// }
