import { Code, Image } from "@nextui-org/react"
import { useContext } from "react"
import { StateContext } from "../../context/stateContext"
import { ArrSkill } from "../../types/types"
import { Fade } from "react-awesome-reveal"
import { certificate, CertificateType } from "../../json/certificate"
const Skill = () => {
  const { skillData } = useContext(StateContext)
  return <div className="w-full px-[10%] h-auto md:h-screen flex flex-wrap content-center justify-around bg-gradient-to-b from-zinc-950 to-zinc-900 text-white">
    <div className="skill w-full h-[60vh] flex flex-wrap content-center justify-around ">
      {skillData?.map((s: ArrSkill) => <Fade className="w-2/5 md:w-[150px] z-10" direction="up" delay={1}>
        <Code
          className="w-full flex justify-center bg-transparent md:justify-around items-center transY transition-all text-white font-mono text-[20px] my-3 cursor-pointer">
          <Image isZoomed src={s.images} radius="sm" className="object-contain w-[50px] md:w-[100px] h-[50px] md:h-[100px] flex bg-transparent" />
        </Code>
      </Fade>
      )}
    </div>
    <div className="skill w-full h-auto sm:h-[40vh] flex flex-wrap justify-around z-10">
      <Fade direction="up" className="w-full"><h1 className="text-center">Certificate</h1></Fade>
      {certificate?.map((c: CertificateType) => <Fade direction="up" key={c.id} className="w-[250px] h-[250px] hover:scale-110">
        <img className="w-full h-full object-contain cursor-pointer hover:scale-110 transition-all" src={c.images} 
        onClick={() => {window.open(c.url, '_blank', 'noopener')}}/>
      </Fade>)}
    </div>
  </div>

}

export default Skill