import CategoryItem from "./CategoryItem"
import CategoryAPI from "../../../../apis/CategoryAPI"
import { useEffect, useState } from "react";

const List = () => {
    
    const [categories, setCategories] = useState([]); 

    //componentDidMount
    useEffect(() => {
        async function fetchData() {
            const response = await CategoryAPI.getCategories();
            setCategories(response.data);
        }
        fetchData();
    }, [])

    const updateFromChild = () => {
        console.log('update from child');
    }

    return (
        <div className=" rounded-b-3xl bg-white m-8 mt-0 overflow-scroll">
           {
                categories.map((category, index) => {
                    return (
                        <CategoryItem item={category} index={index} updateFromChild={updateFromChild} ></CategoryItem>
                    )
                })
            }
        </div>
      
    )

}

export default List;