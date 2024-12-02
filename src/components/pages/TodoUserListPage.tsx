"use client";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todolist } from "@src/recoil/todolist";
import TodoUserListComp from "@src/components/pages/TodoUserListComp"
import PageButton from "@src/components/pages/PageButton"

interface Props {}

const TodoUserListPage = ({}: Props) => {

  const [todoList, setTodoList] = useRecoilState(todolist)
  const [page, setPage] = useState(1)

  const updateTodoList = (e: {
    key: string; target: { value: any; }; 
    }) => {

    if(e.key == "Enter") {
      let count = 0;
      let notyet = 0;

      for(const i of todoList) {
        if(i.id > count) count = i.id;
        if(!i.checked) notyet += 1;
      }

      if(notyet >= 10) return alert("처리가 안된 할 일이 10개가 넘을 수는 없습니다.")

      const tmp = [
        ...todoList,
        {
          "id" : count + 1,
          "title" : e.target.value,
          checked : false
        }
      ]

      setTodoList(tmp)
      e.target.value = ""
    }
  }

  const todoCheck = (id: number) => {
    const newdata = todoList.map(data => {
      if (data.id == id) {
        return {
          ...data, 
          checked: !data.checked, 
        };
      }
      return data; 
    });

    setTodoList(newdata);
  }

  const todoDelete = (id: number) => {
    const newlist = todoList.filter(item => item.id != id)

    setTodoList(newlist)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-[800px]">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">To Do List</h1>

        <div className="relative py-5">
          <input
            type="text"
            placeholder="할 일을 입력해 주세요"
            className="w-full bg-gray-200 border border-gray-200 rounded-xl px-6 py-6 focus:outline-none"
            maxLength={20}
            onKeyDown={updateTodoList}
          />
        </div>

        <div className="block items-center p-6 bg-white rounded-lg shadow-lg">
          <div className="w-full flex justify-center">
            <div className="w-[400px] flex justify-around mb-4">
              <PageButton 
                page={page}
                curpage={1}
                setPage={setPage}
                title={"All"}
              />
              <PageButton 
                page={page}
                curpage={2}
                setPage={setPage}
                title={"To Do"}
              />
              <PageButton 
                page={page}
                curpage={3}
                setPage={setPage}
                title={"Done"}
              />
            </div>
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-2">총 {todoList.length}개</p>
            <ul>
              {
                page == 1 ? 

                todoList.map((todo, index) => {
                  return(
                    <TodoUserListComp 
                      todo={todo}
                      todoCheck={todoCheck}
                      todoDelete={todoDelete}
                    />
                  )
                }) : (
                  page == 2 ? 
                  todoList.filter( item => !item.checked ).map((todo, index) => {
                    return(
                      <TodoUserListComp 
                        todo={todo}
                        todoCheck={todoCheck}
                        todoDelete={todoDelete}
                      />
                    )
                  }): 
                  todoList.filter( item => item.checked ).map((todo, index) => {
                    return(
                      <TodoUserListComp 
                        todo={todo}
                        todoCheck={todoCheck}
                        todoDelete={todoDelete}
                      />
                    )
                  })
                )

              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoUserListPage;
