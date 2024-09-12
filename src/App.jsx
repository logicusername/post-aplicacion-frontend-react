import { PostForm } from "./components/PostForm";
import { PostList } from "./components/PostList";

export function App() {
  return(
    <div className=" grid place-content-center componentes">
      <PostForm/>
      <PostList/>
    </div>
  )  
}
