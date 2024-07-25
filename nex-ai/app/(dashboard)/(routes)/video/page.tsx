"use client"
import { Heading } from "@/components/heading";
import { ImageIcon, Music, VideoIcon} from "lucide-react";


const VideoPage = ()=>{

    return (
        <div>
            <Heading
                title="Video Generation"
                description="Our most advanced Video model"
                icon={VideoIcon}
                iconColor="text-orange-700"
                bgColor="text-orange-700/10"
            />
            <div className="px-4 lg:px-8" >
                <h1> Since API OF OPENAI message: 'You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.',</h1>
            </div>
            </div>  
    )};
export default VideoPage;
