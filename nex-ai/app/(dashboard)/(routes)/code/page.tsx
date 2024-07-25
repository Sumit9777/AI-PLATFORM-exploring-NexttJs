"use client"
import { Heading } from "@/components/heading";
import { Code, ImageIcon} from "lucide-react";


const CodePage = ()=>{

    return (
        <div>
            <Heading
                title="Code Generation"
                description="Our most advanced Code model"
                icon={Code}
                iconColor="text-green-500"
                bgColor="text-green-500/10"
            />
            <div className="px-4 lg:px-8" >
                <h1> Since API OF OPENAI message: 'You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.',</h1>
            </div>
            </div>  
    )};
export default CodePage;
