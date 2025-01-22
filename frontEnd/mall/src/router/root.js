import { lazy, Suspense } from "react";
import todoRouter from "./todoRouter";

const {createBrowserRouter} = require("react-router-dom");

const Loding = <div>Loading...</div>
// 지연로딩
const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
const TodoIndex = lazy(()=> import("../pages/todo/IndexPage"));



/*
router : a-tag보다 link 를 사용해야함 
a : 지우고 다시가져오기때문에 데이터 사용 많이함 

*/
const root = createBrowserRouter([
    {
        path:"",
        element : <Suspense fallback={Loding}><Main/></Suspense>
    },
    {
        path:"about",
        element : <Suspense fallback={Loding}><About/></Suspense>
    },
    {
        path:"todo",
        element : <Suspense fallback={Loding}><TodoIndex/></Suspense> ,
        children : todoRouter()
    },
])

export default root;