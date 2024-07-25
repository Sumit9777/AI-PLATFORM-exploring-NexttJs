"use client"
import { Heading } from "@/components/heading";
import { ImageIcon, Settings} from "lucide-react";


const SettingPage = ()=>{

    return (
        <div>
            <Heading
                title="Setting"
                description="Not Setup"
                icon={Settings}
                iconColor="text-black-700"
                bgColor="text-black-700/10"
            />
            <div className="px-4 lg:px-8" >
                <h1> Since API OF OPENAI message: 'You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.',</h1>
            </div>
            </div>  
    )};
export default SettingPage;
