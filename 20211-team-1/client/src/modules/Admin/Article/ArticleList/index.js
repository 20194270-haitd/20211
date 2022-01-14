import ArticleItem from "./ArticleItem"
import { useEffect, useState } from "react";
import ArticleAPI from "../../../../apis/ArticleAPI"

const List = (props) => { 
    const [articles, setArticles] = useState([]); 
    const [updateArrticles, setUpdateArrticles] = useState(true);

    
    useEffect(() => {
        loadData();
    }, [updateArrticles])

    const loadData = async () => {
        const response = await ArticleAPI.getArticles();
        setArticles(response.data);
    }
    loadData();

    const updateFromChild = () => {
        setUpdateArrticles(!updateArrticles)
        console.log('update from child');
    }

    return (
        <div className=" rounded-b-3xl bg-white m-8 mt-0 overflow-y-scroll">
            {
                articles.map((article, index) => {
                    return (
                        <ArticleItem 
                            item={article} 
                            index={index} 
                            updateFromChild={updateFromChild} 
                            setFormState={props.setFormState} 
                            setFormPurpose={props.setFormPurpose}
                            setFormOriginalData={props.setFormOriginalData}>
                        </ArticleItem>
                    )
                })
            }
        </div>
      
    )

}

export default List;