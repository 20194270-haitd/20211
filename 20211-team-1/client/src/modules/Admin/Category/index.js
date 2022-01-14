import NavBar from "../../../shares/layout/Admin/NavBar";
import Header from "../../../shares/layout/Admin/Header"
import CategoryList from "./CategoryList"
import CategoryTableHeader from "./CategoryTableHeader"
const Category = () => {
    return (
        <div className="flex h-screen" >
            <NavBar/>
            <div className="flex flex-col bg-slate-200 basis-5/6 " >
                <Header/>
                <CategoryTableHeader/>
                <CategoryList/>
            </div>  
        </div>      
    )
}

export default Category;