import hommeIcon from "../../../assets/images/home-icon.png"
import articleIcon from "../../../assets/images/article-icon.png"
import categoryIcon from "../../../assets/images/category-icon.png"
import sourceIcon from "../../../assets/images/source-icon.png"
import logo from "../../../assets/images/logo-admin.png"
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="m-5 basis-1/6  ">
            <img src={logo} className="mx-10" alt=""></img>
            <ul className="mx-10">
                <li className="flex flex-row my-10 ">
                    <img src={hommeIcon} alt=""></img>
                    <NavLink className="text-xl font-bold mt-1 ml-8 text-slate-300 " to="/admin/articles">Dashboard</NavLink>
                </li>
                <li className="flex flex-row my-10">
                    <img src={articleIcon} alt=""></img>
                    <NavLink className="text-xl font-bold mt-1 ml-8 text-slate-300 " to="/admin/articles">Articles</NavLink>
                </li>
                <li className="flex flex-row my-10">
                    <img src={categoryIcon} alt=""></img>
                    <NavLink className="text-xl font-bold mt-1 ml-8 text-slate-300 " to="/admin/categories">Categories</NavLink>
                </li>
                <li className="flex flex-row my-10 ">
                    <img src={sourceIcon} alt=""></img>
                    <NavLink className="text-xl font-bold mt-1 ml-8 text-slate-300 " to="/admin/sources">Source</NavLink>
                </li>
            </ul>   
        </div>
        
    )
}

export default NavBar;