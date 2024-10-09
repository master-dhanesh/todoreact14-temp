const App = () => {
    return (
        <div className=" border-t-2 w-screen h-screen bg-zinc-800 flex  items-center flex-col">
            <div className="mt-[7%] w-[25%] h-[20%] border rounded-3xl flex justify-around items-center">
                <div className="text-yellow-100">
                    <h1 className="text-3xl font-bold">LETS TODO</h1>
                    <p>Keeps doing things</p>
                </div>
                <div className="text-4xl font-extrabold flex justify-center items-center w-[120px] h-[120px] rounded-full bg-orange-600">
                    1/3
                </div>
            </div>
            {/*  */}
            <form className="w-[25%] flex justify-between px-5 my-[2%]">
                <input
                    placeholder="write your next task..."
                    className="px-5 py-3 text-yellow-100 outline-none w-[85%] rounded-xl bg-zinc-700 "
                    type="text"
                />
                <button className="outline-none text-4xl font-extrabold flex justify-center items-center w-[50px] h-[50px] rounded-full bg-orange-600">
                    <i className="ri-add-fill"></i>
                </button>
            </form>
            {/*  */}
            <ul className="list-none w-[25%] ">
                <li className="mb-5 flex justify-between items-center border rounded-xl p-5">
                    <div className="flex items-center">
                        <div className="mr-4 rounded-full w-[30px] h-[30px] border border-orange-600"></div>
                        <h1 className="text-2xl font-extrabold text-yellow-100">
                            Task 1
                        </h1>
                    </div>
                    <div className="flex gap-3 text-2xl text-yellow-100">
                        <i className="ri-file-edit-line"></i>
                        <i className="ri-delete-bin-3-line"></i>
                    </div>
                </li>
                <li className="mb-5 flex justify-between items-center border rounded-xl p-5">
                    <div className="flex items-center">
                        <div className="mr-4 rounded-full w-[30px] h-[30px] bg-green-400"></div>
                        <h1 className="line-through text-2xl font-extrabold text-yellow-100">
                            Task 2
                        </h1>
                    </div>
                    <div className="flex gap-3 text-2xl text-yellow-100">
                        <i className="ri-file-edit-line"></i>
                        <i className="ri-delete-bin-3-line"></i>
                    </div>
                </li>
                <li className="mb-5 flex justify-between items-center border rounded-xl p-5">
                    <div className="flex items-center">
                        <div className="mr-4 rounded-full w-[30px] h-[30px] border border-orange-600"></div>
                        <h1 className="text-2xl font-extrabold text-yellow-100">
                            Task 3
                        </h1>
                    </div>
                    <div className="flex gap-3 text-2xl text-yellow-100">
                        <i className="ri-file-edit-line"></i>
                        <i className="ri-delete-bin-3-line"></i>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default App;
