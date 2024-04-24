import React, { CSSProperties, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../context/stateContext";

interface CenterProps {
  children: React.ReactNode;
  height?: string;
  id: string;
}

const Center = ({
  children,
  id,
}: CenterProps) => {
  const styles: CSSProperties = {
    justifyContent: "center",
    alignItems: "center",
  };
  const {setCurrentItems} = useContext(StateContext)
  const itemRef = useRef(null);
  const navigate = useNavigate()
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          navigate(`#${entry.target.id}`,{replace:true})
          setCurrentItems(entry.target.id)

        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);


  return (
    <div ref={itemRef} id={id} style={styles} className="snap-start flex">
      {children}
    </div>
  );
};

export default Center;