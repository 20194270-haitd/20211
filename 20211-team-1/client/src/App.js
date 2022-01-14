import Article from "./modules/Admin/Article";
import Category from "./modules/Admin/Category"
import Source from "./modules/Admin/Source"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/admin/dashboard" element={<Article/>}></Route>
          <Route path="/admin/articles" element={<Article/>}></Route>
          <Route path="/admin/categories" element={<Category/>}></Route>
          <Route path="/admin/sources" element={<Source/>}></Route>

          <Route path="/" element={<Article/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}