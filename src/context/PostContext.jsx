import { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

// componente padre
export function PostContextProvider(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getPost() {
      const response = await fetch(
        "https://backend-post-9hyh.onrender.com/basespruebacion"
      );
      const respuesta = await response.json();
      setData(respuesta);
    }
    getPost();
  }, [data]);

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
