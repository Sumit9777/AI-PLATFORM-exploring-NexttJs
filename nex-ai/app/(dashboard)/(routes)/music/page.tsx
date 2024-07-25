"use client"
import { Heading } from "@/components/heading";
import { ImageIcon, Music} from "lucide-react";


const MusicPage = ()=>{

    return (
        <div>
            <Heading
                title="Music Generation"
                description="Our most advanced Music model"
                icon={Music}
                iconColor="text-emerald-500"
                bgColor="text-emerald-500/10"
            />
            <div className="px-4 lg:px-8" >
                <h1> Since API OF OPENAI message: 'You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.',</h1>
            </div>
            </div>  
    )};
export default MusicPage;
