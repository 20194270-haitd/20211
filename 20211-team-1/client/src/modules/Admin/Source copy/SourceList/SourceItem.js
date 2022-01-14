
const Item = (props) => {
    const onClick = () => {
        console.log("a");
    }
    return (
        <div className="flex flex-row justify-between border-b-2 h-24">
            <div className="flex flex-row h-24 text-lg basis-2/12 mx-10">
                <img className="my-auto h-8"  alt="" src={props.item.logo}></img>
            </div>
            <p className="my-auto text-lg basis-2/12 mx-10 font-semibold h-14 overflow-hidden text-ellipsis">{props.item.name}</p>
            <p className="my-auto text-lg basis-3/12 mx-10 font-semibold h-14 overflow-hidden text-ellipsis">{props.item.url}</p>
            <p className="my-auto text-lg basis-3/12 mx-10 font-semibold h-14 overflow-hidden text-ellipsis">{props.item._id}</p>
            <div className="my-auto basis-2/12 mx-10 text-center">
                <button className="bg-indigo-500 hover:bg-indigo-600 rounded-2xl font-semibold text-white w-20 h-10 text-sm inline-block" onClick={onClick}>Sửa đổi</button>
            </div>
            <div className="my-auto basis-2/12 mx-10 ">
                <button className="bg-red-500 hover:bg-red-600 rounded-2xl font-semibold text-white w-20 h-10 text-sm " onClick={onClick}>Xóa</button>
            </div>
            
        </div>
    )
}
export default Item;