import { useContext } from "react";
import { PostContext } from "../context/PostContext";

export function PostCard() {
  const { data } = useContext(PostContext);

  if (data.length === 0) 
  {
    return <h1>cargando datos</h1>;
  } else {
    return (
      <div className="mt-8">
        {data.map((dat, index) => {
          return (
            <div key={index} className="postboximage mt-3">
              <img src={dat.parrafo} alt="" className="imagenes object-scale-down ms-16"/>
              <p className="ms-16 font-light text-lg not-italic">{dat.comentario}</p>
              <div className="mt-3">
                <hr className="ms-5 me-5"/>
              </div>
              <div className=" flex mt-4">
                <p className="ms-16">likes</p>
                <p className="ms-60">comments</p>
                <p className="ms-60">shares</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
