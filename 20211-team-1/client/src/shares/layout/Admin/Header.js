const Header = (props) => {
    const onClickAdd = () => {
        props.setFormState(true);
        props.setFormPurpose("Add");
    }

    return (
        <div>
            <div className="flex flex-row mt-5 ml-10 basis-1/5" >
                <input type="text" className="h-14 basis-1/3 rounded-full " placeholder="   Search here ..."></input>
            </div>
            <div className="flex flex-row m-10 justify-between">
                <div className="flex items-center">
                    <h1 className="text-4xl font-mono font-bold ">Danh sách các đầu báo</h1>
                </div>
                <button className="bg-indigo-500 rounded-2xl font-semibold text-white w-40 h-16 text-2xl mr-10" onClick={onClickAdd} >Thêm mới</button>
            </div>
           
        </div>
    )
}

export default Header;