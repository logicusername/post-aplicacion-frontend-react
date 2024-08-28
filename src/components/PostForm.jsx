import { useState } from "react";
import { subirImagen, verImagen } from "../firebase/configuracion";

export function PostForm() {
  const [comentario, setComentario] = useState("");
  const [imagen, setImagen] = useState(null);

  // //funcion asignada al submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    verImagen(imagen);
    try {
      const url = await subirImagen(imagen);

      //asignacion de los usestate a los datos del backend
      const nuevoComentario = {
        comentario: comentario,
        parrafo: url,
      };

      // envio de posts al backend
      function enviarPosts() {
        fetch("https://backend-post-9hyh.onrender.com/basespruebacion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevoComentario),
        })
          .then((response) => {
            if (response.ok) {
              console.log("datos enviados");
            } else {
              console.log("error enviando datos");
            }
          })
          .catch((error) => {
            console.error("error en el fetch", error);
          });
      }
      // ejecutar enviar posts
      enviarPosts();
    } catch (error) {
      console.log(error);
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validar si el archivo es una imagen
      const fileType = file.type;
      console.log(file);
      if (!fileType.startsWith("image/")) {
        alert(
          "El archivo seleccionado no es una imagen, seleccione nuevamente"
        );
        setImagen(null);
      } else {
        setImagen(file);
      }
    }
  };
  return (
    <div className="post-form bg-gray-50 rounded-2xl">
      <form onSubmit={handleSubmit}>
        <textarea
          className="post-input rounded-2xl txt-input"
          maxLength={1000}
          type="text"
          onChange={(e) => setComentario(e.target.value)}
        />
        <div className="flex">
          <div className="flex componente-iconos">
            <p className="m-3 me-1">Agrega</p>
            <input type="file" name="" id="" onChange={handleImageChange} className="m-3 me-1"/>
            <img src="/icons/iconoPlay.png" alt="" className="m-3 me-1" style={{height: "20px"}}/>
            <img src="/icons/iconoMicrofono.png" alt="" className="m-3 me-1" style={{height: "20px"}}/>
            <img src="/icons/iconoTag.png" alt="" className="m-3 me-1" style={{height: "20px"}}/>
            
            {/* <input type="text" onChange={(e) => setParrafo(e.target.value)}/> */}
          </div>
          <button type="submit" className="font-bold bg-green-500 botonpostear">Post</button>
        </div>
      </form>
    </div>
  );
}
