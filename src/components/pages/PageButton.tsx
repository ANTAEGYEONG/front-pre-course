"use client"

const PageButton = (props: {
    curpage: number;
    title: string; page: number; setPage: (arg0: number) => void 
}) => {
    return (
        <button 
            className={(props.page == props.curpage) ? "text-gray-500 px-[32px] py-[8px] font-bold rounded-xl bg-[#EBF4FF] text-[#2182F3]": "text-gray-500 px-[32px] py-[8px] font-bold rounded-xl"} 
            onClick={ () => props.setPage(props.curpage)}
            >
            {props.title}
        </button>
    )
}

export default PageButton;