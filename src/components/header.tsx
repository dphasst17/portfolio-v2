import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../context/stateContext";
import { ArrData } from "../types/types";
import { FaReact } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const {arrData,currentItems} = useContext(StateContext)
  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    navigate(`#${e.currentTarget.href.split("#")[1]}`)
    target?.scrollIntoView({ behavior: "smooth" });
  };
  return <header className="fixed w-[13vw] h-screen top-0 left-0 hidden xl:flex items-center p-2 z-50">
    <nav className="w-4/5 h-2/4 flex flex-col justify-around">
      {arrData?.map((d:ArrData) => {
        return <a onClick={(e) => onPress(e)}  href={`#${d.id}`} key={`nav-${d.id}`} 
        className={`${currentItems === d.id ? 'text-white font-jersey text-[35px] bg-black rounded-lg bg-opacity-50' :'text-blue-500 text-[20px]'} hover:text-white flex items-center transition-all`}>
          <d.icon className={`${d.icon === FaReact ? 'text-sky-400' : ''} mr-2`} /><div>{d.name}</div>
        </a>
      })}
    </nav>
  </header>
}

export default Header