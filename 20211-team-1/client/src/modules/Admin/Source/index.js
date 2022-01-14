import NavBar from "../../../shares/layout/Admin/NavBar";
import Header from "../../../shares/layout/Admin/Header"
import SourceList from "./SourceList"
import SourceTableHeader from "./SourceTableHeader"
const Source = () => {
    return (
        <div className="flex h-screen" >
            <NavBar/>
            <div className="flex flex-col bg-slate-200 basis-5/6 " >
                <Header/>
                <SourceTableHeader/>
                <SourceList/>
            </div>  
        </div>      
    )
}

export default Source;