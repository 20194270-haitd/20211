import NavBar from "../../../shares/layout/Admin/NavBar";
import Header from "../../../shares/layout/Admin/Header"
import ArticleList from "./ArticleList"
import ArticleTableHeader from "./ArticleTableHeader"
import FormArticle from "./FormArticle";
import { useState } from "react";
const Article = () => {
    const [formState, setFormState] = useState(false);
    const [formPurpose, setFormPurpose] = useState("Add");
    const [formOriginalData, setFormOriginalData] = useState({});

    return (
        <div className="flex h-screen" >
            <NavBar/>
            <FormArticle formState={formState} setFormState={setFormState} purpose={formPurpose} article={formOriginalData} />
            <div className="flex flex-col bg-slate-200 basis-5/6">
                <Header setFormState={setFormState} setFormPurpose={setFormPurpose}/>
                <ArticleTableHeader/>
                <ArticleList setFormState={setFormState} setFormPurpose={setFormPurpose} setFormOriginalData={setFormOriginalData} />
            </div>  
        </div>      
    )
}

export default Article;