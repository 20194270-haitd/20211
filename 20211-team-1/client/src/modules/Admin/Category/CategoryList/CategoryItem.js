const Item = (props) => {
    const onClickUpdate = () => {
        console.log("update "+ props.index);
        props.updateFromChild();
    }

    const onClickDelete = () => {
        console.log("delete "+ props.index);
        props.updateFromChild();
    }

    return (
        <div className="flex flex-row justify-between border-b-2 h-24">
            <div className="flex flex-col my-auto basis-1/5 mx-12 h-14 overflow-hidden">
                <p className="m-auto text-lg font-semibold  ">{props.item.name}</p>
            </div>
            <div className="flex flex-col my-auto basis-2/5 mx-12 h-14 overflow-hidden ">
                <p className="m-auto text-lg font-semibold ">{props.item._id}</p>
            </div>
            <div className="my-auto basis-1/5 mx-10 text-center ">
                <button className="bg-indigo-500 hover:bg-indigo-600 rounded-2xl font-semibold text-white w-20 h-10 text-sm inline-block" onClick={onClickUpdate}>Sửa đổi</button>
            </div>
            <div className="my-auto basis-1/5 mx-10 ">
                <button className="bg-red-500 hover:bg-red-600 rounded-2xl font-semibold text-white w-20 h-10 text-sm " onClick={onClickDelete}>Xóa</button>
            </div>
            
        </div>
    )
}
export default Item;