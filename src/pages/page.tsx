import { useContext, } from "react"
import Center from "./center"
import { StateContext } from "../context/stateContext"
import { ArrData } from "../types/types"
const Page = () => {
  const { arrData } = useContext(StateContext)
  return <div className="relative md:snap-y md:snap-mandatory md:overflow-x-hidden md:overflow-y-scroll w-screen h-screen text-[50px] font-jersey">
    {arrData?.map((d: ArrData) =>
      <Center id={d.id} key={`page-${d.id}`} >
        <d.components />
      </Center>
    )}

  </div>
}

export default Page