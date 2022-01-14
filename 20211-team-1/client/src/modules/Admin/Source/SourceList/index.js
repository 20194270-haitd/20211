import SourceItem from "./SourceItem"
import SourceAPI from "../../../../apis/SourceAPI"
import { useEffect, useState } from "react";

const List = () => {
    const [sources, setSources] = useState([]); 

    //componentDidMount
    useEffect(() => {
        async function fetchData() {
            const response = await SourceAPI.getSources();
            setSources(response.data);
        }
        fetchData();
    }, [])

    const updateFromChild = () => {
        console.log('update from child');
    }

    return (
        <div className=" rounded-b-3xl bg-white m-8 mt-0 overflow-scroll">
           {
                sources.map((source, index) => {
                    return (
                        <SourceItem item={source} index={index} updateFromChild={updateFromChild} ></SourceItem>
                    )
                })
            }   
        </div>
      
    )

}

export default List;