import { Code, Image } from "@nextui-org/react"
import { useContext } from "react"
import { StateContext } from "../../context/stateContext"
import { ArrSkill } from "../../types/types"
import { Fade } from "react-awesome-reveal"

const Skill = () => {
  const { skillData } = useContext(StateContext)
  return <div className="w-full px-[10%] h-screen flex flex-wrap content-center justify-around bg-gradient-to-b from-zinc-950 to-zinc-900 text-white">
    {skillData?.map((s: ArrSkill) => <Fade className="w-4/5 sm:w-[40%] md:w-[18%] min-w-[100px] z-10" direction="up" delay={1}>
      <Code
      className="w-full flex justify-center md:justify-around items-center transY transition-all text-white font-mono text-[20px] my-3 cursor-pointer">
        <Image isZoomed src={s.images} radius="sm" className="w-[100px] h-[100px] hidden md:flex bg-transparent"/>
        {s.name}
      </Code>
    </Fade>
    )}
  </div>

}

export default Skill