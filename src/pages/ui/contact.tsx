import { Button, Card, CardBody, CardHeader, Input, Textarea } from "@nextui-org/react"
import { useContext } from "react"
import { Fade } from "react-awesome-reveal"
import { StateContext } from "../../context/stateContext"
import { ArrContact } from "../../types/types"

const Contact = () => {
  const { contactData } = useContext(StateContext)
  return <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-zinc-800 to-zinc-700 text-black">
    <div className="form w-4/5 h-4/5 flex flex-wrap justify-center items-center  z-10 rounded-lg font-mono">
      <div className="w-full lg:w-2/5 lg:h-full flex flex-wrap content-center">
        {contactData.map((c: ArrContact) => <Fade className="w-4/5 sm:w-[48%] lg:w-2/5 m-1 cursor-pointer" direction="up" key={c.id}>
          <Card radius="sm" className="w-full">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <c.icon />
              <p className="text-tiny uppercase font-bold mt-1">{c.name}</p>
            </CardHeader>
            <CardBody>
              <small className="text-[20px] text-center">{c.value}</small>
            </CardBody>
          </Card>
        </Fade>)}
      </div>
      <form className="w-full lg:w-2/5 lg:h-full flex flex-col items-center justify-center">
        <Fade className="w-full" direction="up"><Input label="Full name" className="w-full text-[30px] my-1" radius="sm" /></Fade>
        <Fade className="w-full" direction="up"><Input type="email" label="Email" className="w-full text-[30px]  my-1" radius="sm" /></Fade>
        <Fade className="w-full" direction="up">
          <Textarea
            variant="faded"
            placeholder="Message"
            className="w-full my-1"
          />
        </Fade>
        <Fade direction="up"><Button radius="sm" color="success" className="text-white">Send</Button></Fade>
      </form>
    </div>
  </div>

}

export default Contact