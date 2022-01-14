const SourceTableHeader = (props) => {
    return (
        
        <div className="flex flex-row border-b-2 rounded-t-3xl bg-white m-8 my-0 ">
            <div className="font-bold text-xl m-10 mb-6 basis-2/12" >Logo</div>
            <div className="font-bold text-xl m-10 mb-6 basis-2/12" >Tên báo</div>
            <div className="font-bold text-xl m-10 mb-6 basis-3/12" >URL</div>
            <div className="font-bold text-xl m-10 mb-6 basis-3/12 text-center" >Id</div>
            <div className="font-bold text-xl m-10 mb-6 basis-2/12" ></div>
            <div className="font-bold text-xl m-10 mb-6 basis-2/12" ></div>
        </div>
    )
}
export default SourceTableHeader;