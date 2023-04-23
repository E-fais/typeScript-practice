import React, {FC} from "react";

enum Language{
    Malaylam="kerala",
    Tamil='tamil nadu',
    Kannada='karnataka',
    Hindi='delhi'
}
interface LanguageProp{
    language:Language
}
 const EnumExample:FC<LanguageProp>=({language})=>{
return(
    <div>
        The place speaking passed language is :{language}
    </div>
)
}

export const EnumPractice=()=>{
    return(
        <div>
            <EnumExample language={Language.Malaylam}/>
        </div>
    )
}