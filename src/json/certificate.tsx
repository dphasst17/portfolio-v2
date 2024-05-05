import SQLBasic from "../assets/certificate/SQL-Basic.png"
import SQLIntermediate from "../assets/certificate/SQL-Intermediate.png"

export interface CertificateType{
    id:number,
    name:string,
    images:string,
    url:string
}

export const certificate:CertificateType[] = [
    {
        id:1,
        name:"SQL Basic",
        images:SQLBasic,
        url:"https://www.hackerrank.com/certificates/2fcbf96f1478"
    },
    {
        id:2,
        name:"SQL Intermediate",
        images:SQLIntermediate,
        url:"https://www.hackerrank.com/certificates/583adfdfc4ef"
    }
]