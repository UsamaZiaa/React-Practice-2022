// import { useContext } from "react";
// import { AppContext } from "./context";
import { useGlobalContext } from "./context";
import Pagination from "./Pagination";
import Search from "./Search";
import Stories from "./Stories";
import './App.css'

export default function App() {
    const data = useGlobalContext()
    // const data = useContext(AppContext)
    console.log(data);
    return (
        <>
            <Search />
            <Pagination />
            <Stories />
        </>
    )
}