const List = ({ list,deleteTask }) => {
  return (
    <>
      {list.map((item) => (
        <div
          key={item.id}
          className="w-full relative flex flex-row items-center justify-center"
        >
          <p className="text-center flex-grow text-white border-none bg-gradient-to-r from-green-500 to-green-900 border-green-400 bg-green-950 rounded-md p-2 ">
            {item.text}
          </p>
          <button
            onClick={()=>deleteTask(item.id)}
            className="absolute top-0 right-0 flex items-center justify-center p-2 text-white text-xl font-semibold bg-green-500 rounded-md h-10 w-14"
          >
            {" "}
            <i className="fa-solid fa-trash text-sm text-green-950"></i>
          </button>
        </div>
      ))}
    </>
  );
};

export default List;
