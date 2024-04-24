import { useEffect, useState } from "react"
import dataProject from "../../json/project.json"
import { ArrProject } from "../../types/types"
import { Button, Code, Tooltip } from "@nextui-org/react"
import { VscPreview,VscGithubAlt } from "react-icons/vsc";
import { Fade } from "react-awesome-reveal";
import { TbWorldWww } from "react-icons/tb";
const Project = () => {
  const [data, setData] = useState<ArrProject[] | []>([])
  useEffect(() => {
    setData(dataProject)
  }, [])
  return <div
    className="w-full md:h-screen px-[10%] flex flex-wrap content-center justify-start bg-gradient-to-b from-zinc-900 to-zinc-800 text-white"
  >
    {data.map((d: ArrProject) => <Fade className="w-full md:w-[23%] min-w-[200px] h-auto min-h-[250px] m-1 z-10" direction="up" key={d.id}>
      <div className="w-full h-auto min-h-[250px] flex flex-wrap content-around justify-center p-1 bg-zinc-900 rounded-lg z-40">
        <div className="w-full h-[12%] flex items-center justify-center">
          <TbWorldWww />
          <Code radius="sm" className="w-3/4 h-full text-white text-center font-mono text-[20px] truncate">{d.name}</Code>
        </div>
        <div className="w-full flex flex-wrap">
          {d.technology.map((t: string) => <Code radius="sm" className="m-1 text-white cursor-pointer hover:bg-blue-500 transition-all">{t}</Code>)}
        </div>
        <div className="w-full flex flex-wrap items-center">
          <span className="font-mono text-[10px]">Github:</span>
          {d.github.map((b: { name: string, url: string }) => 
            <Tooltip content={b.name}>
              <Button isIconOnly size="sm" variant="bordered" className="mx-1 font-mono" onClick={() => window.open(b.url, '_blank', 'noopener')}>
                <VscGithubAlt  className="w-full h-full text-white" />
              </Button>
            </Tooltip>
          )}
        </div>
        <div className="w-full flex flex-wrap items-center">
          <span className="font-mono text-[10px]">Preview:</span>
          {d.live.map((b: { name: string, url: string }) => 
            <Tooltip content={b.name}>
              <Button variant="bordered" isIconOnly size="sm" radius="none" className="rounded-md mx-1 font-mono" onClick={() => window.open(b.url, '_blank', 'noopener')}>
                <VscPreview className="w-full h-full text-white"/>
              </Button>
            </Tooltip>
          )}
        </div>
      </div>

    </Fade>)}

  </div>

}

export default Project