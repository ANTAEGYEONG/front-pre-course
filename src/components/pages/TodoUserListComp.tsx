"use client";



const TodoUserListComp = (props: { todo: { id: React.Key | null | undefined; checked: boolean | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }; todoCheck: (arg0: any) => void; todoDelete: (arg0: any) => void; }) => {
    return(
        <li className="flex items-center justify-between py-8" key={props.todo.id}>
          <div className="flex items-center">
            <input 
              type="checkbox" 
              className="appearance-none w-8 h-8 mr-2 border border-gray-300 rounded-full bg-center bg-no-repeat checked:bg-[#2182F3] checked:bg-check" 
              defaultChecked={props.todo.checked}
              onChange={()=> props.todoCheck(props.todo.id)}
              />
            <span className={(props.todo.checked ? "py-auto text-gray-300" : "py-auto text-gray-800")}>{props.todo.title}</span>
          </div>
          <button onClick={()=>props.todoDelete(props.todo.id)}>
            <img src={"/svg/Close.svg"} />
          </button>
        </li>
      )
}

export default TodoUserListComp;