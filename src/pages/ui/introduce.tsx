import { Button } from "@nextui-org/react"
import cv from "../../assets/CV-Dinh-Phat.pdf"
import { Fade } from "react-awesome-reveal"
import GitHubCalendar from "react-github-calendar"
const Introduce = () => {
  const handleLink = (url: string) => {
    window.open(url, '_blank', 'noopener')
  }
  return <div className='w-full h-auto md:h-screen flex flex-wrap items-center justify-center bg-gradient-to-b from-black to-zinc-950 text-zinc-700'>
    <div className="z-10 w-[95%] p-4 h-full flex flex-wrap content-center justify-center text-[12px] md:text-[18px] 2xl:text-[22px] text-white font-mono textOpEffect">
    <div className="z-10 w-full xl:w-2/5 h-[100px] xl:h-[50px] flex flex-wrap justify-start sm:justify-evenly">
        <Button radius="sm" size="sm" color="primary"
          onClick={() => { handleLink('https://www.linkedin.com/in/dinhphat17/') }}
          className="w-auto min-w-[120px] m-1">Linkedin</Button>
        <Button radius="sm" size="sm"
          onClick={() => { handleLink('https://github.com/dphasst17') }}
          className="w-auto min-w-[120px] m-1 bg-zinc-950 text-white">Github</Button>
        <Button radius="sm" size="sm" color="danger"
          className="w-auto min-w-[120px] m-1">
          <a href={cv} download="CV-Dinh-Phat">Download CV</a>
        </Button>
      </div>
      <div className="w-4/5 my-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>
        <div className="px-4 lg:px-8 py-5">
          <div className="flex flex-row space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-200"></div>
          </div>
        </div>
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <div className="blink">
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-white">Developer</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-gray-400">{'{'}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
              <span className="text-gray-400">{`'`}</span>
              <span className="text-amber-300">Dinh Phat</span>
              <span className="text-gray-400">{`',`}</span>
            </div>
            <div className="ml-4 lg:ml-8 mr-2">
              <span className=" text-white">skills:</span>
              <span className="text-gray-400">{`['`}</span>
              <span className="text-amber-300">React</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">NextJS</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">Tailwind CSS</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">Express</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">Express</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">MySql</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">MongoDB</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">Docker</span>
              {/* <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AWS</span> */}
              <span className="text-gray-400">{"'],"}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>

            <div><span className="text-gray-400">{`};`}</span></div>
          </code>
        </div>
      </div>
  
      <Fade className="w-full sm:w-1/4 min-w-[200px] h-auto min-h-[150] flex items-center">
        <img className="w-full h-full mx-auto" src="https://camo.githubusercontent.com/299bb0b431fd8634a5257d1285b03006eb998915f43c5aca67131fa494342f07/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d647068617373743137267468656d653d746f6b796f6e6967687426686964655f626f726465723d747275652673686f775f69636f6e733d7472756526686964655f7469746c653d66616c73652664697361626c655f616e696d6174696f6e733d66616c736526686964655f72616e6b3d66616c73652672616e6b5f69636f6e3d67697468756226686964653d2673686f773d7072735f6d657267656425324364697363757373696f6e735f73746172746564266c6f63616c653d454e" />
        <img className="w-full h-full md:h-4/5 mx-auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=dphasst17&layout=compact&theme=tokyonight&hide_border=true&&langs_count=8"/>
      </Fade>
      <Fade className="wfull sm:w-2/5 h-auto" >
        <img className="h-full mx-auto" src="https://camo.githubusercontent.com/1a64b1cd03c4d47d5ba5b09d95a3b6f0a509bd8bb07a9a051ab25db21839aa20/68747470733a2f2f6769746875622d70726f66696c652d73756d6d6172792d63617264732e76657263656c2e6170702f6170692f63617264732f70726f66696c652d64657461696c733f757365726e616d653d647068617373743137267468656d653d746f6b796f6e69676874" />
      </Fade>
      <Fade className="w-full h-auto flex justify-center items-center my-1" direction="up">
        <GitHubCalendar
            username="dphasst17"
            blockSize={14}
          />
      </Fade>
    </div>
  </div>


}

export default Introduce