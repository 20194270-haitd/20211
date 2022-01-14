import { useState, useEffect } from "react";
import SourceAPI from "../../../apis/SourceAPI"
import CategoryAPI from "../../../apis/CategoryAPI"
import ArticleAPI from "../../../apis/ArticleAPI"

const FormArticle = (props) => {
    const [article, setArticle] = useState({});
    let [sources, setSources] = useState([]);
    let [categories, setCategories] = useState([]);

    useEffect(()=> {
        setArticle(props.article || {});
        const loadData = async () => {
            const categoriesRes = await CategoryAPI.getCategories();
            const sourcesRes = await SourceAPI.getSources();
            setCategories(categoriesRes.data);
            setSources(sourcesRes.data);
            
        }  
        loadData();
        return () => {
            //component will unmount
            setArticle({});
            setCategories([]);
            setSources([]);
        }
    },[])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let curentArticle = article;
        let propertyUpdate = {
            [name] : value,
        }
        setArticle(Object.assign({}, curentArticle, propertyUpdate));
        
    }

    const onClickClose = () => {
        props.setFormState(false);
    }

    const onSubmit = async () => {
        if(article.categoryId && article.sourceId) {
            if(props.purpose === "Add") {
                await ArticleAPI.postArticle(article);
                setArticle({});
                props.setFormState(false);
            }
            // if(props.purpose === "Update") {
            //     await ArticleAPI.putArticle(article._id, article);
            // }
           
        }
        else alert ("Source Id và Category Id không thể để trống");   
    }

    return props.formState && (
        <div className="flex items-center justify-center z-10 fixed inset-0 bg-slate-500 bg-opacity-50 ">
            <div className="m-auto mt-40 bg-white w-9/12 shadow-2xl rounded-3xl">
                    <div className="flex flex-row justify-between border-b-2 h-16">
                        <div className="flex ml-8">
                            <h1 className="m-auto font-sans text-4xl font-bold">Add new article </h1>
                        </div>
                        <div className="flex ml-8">
                            <button type="button" className="m-auto mr-5 hover:bg-slate-300 h-10 w-10 rounded-full" onClick={onClickClose}>
                                <span aria-hidden="true" className="text-3xl">&times;</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mt-4 h-96">
                        <div className="space-y-4 basis-2/3 px-16">
                            <div className="">
                                <label for="" className="block font-bold mb-1">Thumbnail URL</label>
                                <input 
                                    type="text" 
                                    className="px-4 py-2 w-full rounded-xl border border-gray-400" 
                                    onChange={handleInputChange}
                                    value={article.thumbnail}
                                    name="thumbnail">
                                </input>
                            </div>
                            <div className="">
                                <label for="" className="block font-bold mb-1">Articel link</label>
                                <input 
                                    type="text" 
                                    className="px-4 py-2 w-full rounded-xl border border-gray-400" 
                                    onChange={handleInputChange}
                                    value={article.link}
                                    name="link">
                                </input>
                            </div>
                            <div className="">
                                <label for="" className="block font-bold mb-1">Title</label>
                                <input 
                                    type="text" 
                                    className="px-4 py-2 w-full rounded-xl border border-gray-400" 
                                    onChange={handleInputChange}
                                    name="title">
                                </input>
                            </div>
                            <div className="">
                                <label for="" className="block font-bold mb-1">Sapo</label>
                                <input 
                                    type="text" 
                                    className="px-4 py-2 w-full rounded-xl border border-gray-400" 
                                    onChange={handleInputChange}
                                    name="sapo">
                                </input>
                            </div>
                        </div>
                        <div className="space-y-6 basis-1/3 px-16">
                            <div>
                                <label className="block font-bold mb-1">Release Time</label>
                                <input 
                                    type="datetime-local" 
                                    className="px-4 py-2 w-full rounded-xl border border-gray-400" 
                                    onChange={handleInputChange}
                                    name="releaseTime">
                                </input>
                            </div>
                            <div >
                                <label className="block font-bold mb-1 mr-10" >Status</label>
                                <select className="w-full" onChange={handleInputChange} name="status">
                                    <option>Ẩn</option>
                                    <option>Hiện</option>
                                </select>
                            </div>

                            <div className="">
                                <label className="block font-bold mb-1 mr-10" >Category Id</label>
                                <select className="w-full" onChange={handleInputChange} name="categoryId">
                                    {
                                        categories.map((category, index) => {
                                            return (
                                                <option value={category._id}>{category.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <div>
                                <label className="block font-bold mb-1 mr-10">Source Id </label>
                                <select className="w-full" onChange={handleInputChange} name="sourceId">
                                    {
                                        sources.map((source, index) => {
                                            return (
                                                <option value={source._id}>{source.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <button className="bg-indigo-500 rounded-2xl font-semibold text-white w-20 h-10 text-sm hover:bg-indigo-500" onClick={onSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
        </div>   
    )
}

export default FormArticle;
