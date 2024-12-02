import { atom } from "recoil";

const todolist = atom({
    key: "todolist",
    default: [
        {
            id : 1,
            title: "출근하고 비타민 먹기",
            checked : false
        },
        {
            id : 2,
            title: "Daily Scrum 작성하기",
            checked : false
        },
        {
            id : 3,
            title: "주간회의 참여하기",
            checked : false
        },
    ]
})

export {todolist};