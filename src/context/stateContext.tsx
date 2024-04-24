
import { createContext, useState} from "react";
import Introduce from "../pages/ui/introduce";
import Skill from "../pages/ui/skill";
import Project from "../pages/ui/project";
import Contact from "../pages/ui/contact";
import { ArrContact, ArrData, ArrInfo, ArrSkill } from "../types/types";

//import icon
import { FcAbout,FcOpenedFolder,FcBusinessContact  } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import { FaMapLocationDot, FaPhone } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

//import images
import htmlLogo from "../assets/Html-logo.png"
import cssLogo from "../assets/Css-logo.png"
import jsLogo from "../assets/Js-logo1.png"
import tsLogo from "../assets/Typescript-logo.png"
import reactLogo from "../assets/jsxIcon.png"
import nextLogo from "../assets/nextLogo.png";
import expressLogo from "../assets/ExpressJs-logo.png"
import sqlLogo from "../assets/MySql-logo.png"
import mongoLogo from "../assets/mongoDb.png"
import gitLogo from "../assets/githubIcon.png"


export const StateContext = createContext<any>({});
export const StateProvider = ({children}:{children:React.ReactNode}) => {
    const [currentItems,setCurrentItems] = useState("intro")
    const arrData:ArrData[] = [
        {
            id:'about',
            components:Introduce,
            icon:FcAbout,
            name:'About Me'

        },
        {
            id:'skill',
            components:Skill,
            icon:FaReact,
            name:'Skill'
        },
        {
            id:'project',
            components:Project,
            icon:FcOpenedFolder,
            name:'Project'
        },
        {
            id:'contact',
            components:Contact,
            icon:FcBusinessContact,
            name:'Contact'
        }
    ]
    const infoData:ArrInfo[] = [
        {
            icon:FcAbout,
            name:'',
            url:''
        }
    ]
    const skillData:ArrSkill[] = [
        {
            name:'HTML',
            color:'',
            images:htmlLogo,
        },
        {
            name:'CSS',
            color:'',
            images:cssLogo,
        },
        {
            name:'JAVASCRIPT',
            color:'',
            images:jsLogo,
        },
        {
            name:'TYPESCRIPT',
            color:'',
            images:tsLogo,
        },
        {
            name:'REACT JS',
            color:'',
            images:reactLogo,
        },
        {
            name:'NEXT JS',
            color:'',
            images:nextLogo,
        },
        {
            name:'EXPRESS JS',
            color:'',
            images:expressLogo,
        },
        {
            name:'MYSQL',
            color:'',
            images:sqlLogo,
        },
        {
            name:'MONGO DB',
            color:'',
            images:mongoLogo,
        },
        {
            name:'GIT',
            color:'',
            images:gitLogo,
        },
    ]
    const contactData:ArrContact[] = [
        {
            id:1,
            name:'Location',
            value:'Da Nang city',
            icon:FaMapLocationDot
        },
        {
            id:2,
            name:'Phone/Zalo',
            value:'094*****74',
            icon:FaPhone
        },
        {
            id:3,
            name:'Gmail',
            value:'d.phat1753@gmail.com',
            icon:IoMailOutline
        }/* ,
        {
            id:4,
            name:'',
            value:'',
            icon:''
        } */
    ]
    return (
        <StateContext.Provider value={{
            currentItems,setCurrentItems,
            arrData,infoData,
            skillData,contactData
        }}>
            {children}
        </StateContext.Provider>
    )
}