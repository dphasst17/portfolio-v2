import { IconType } from "react-icons";

export interface ArrData {
    id: string,
    components: () => JSX.Element,
    icon: IconType,
    name: string
}
export interface ArrInfo {
    icon: IconType,
    name: string,
    url: string
}
export interface ArrSkill {
    name: string,
    color: string,
    images: string,
}
export interface ArrProject {
    id: number,
    name: string,
    technology: string[],
    feature: string[] | never[],
    github: {name: string,url: string}[],
    live: {name: string,url: string}[],
}
export interface ArrContact {
    id:number,
    name:string,
    value:string,
    icon:IconType
}