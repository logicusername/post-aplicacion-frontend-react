import { createContext, useEffect, useState } from "react";
//nombre componente padre
export const PostContext = createContext();

// componente padre
export function PostContextProvider(props) {
  //const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    // setTimeout(() => {
      async function getPost() {
        const response = await fetch(
          "https://backend-post-9hyh.onrender.com/basespruebacion"
        );
        const respuesta = await response.json();
        setData(respuesta);
      }
      getPost();
      //setLoading(false);
      }, [data]);
    // }, 3000);
  return (
    //creacion componente padre
    <PostContext.Provider
      value={{
        // enviarPosts
        data,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
}
