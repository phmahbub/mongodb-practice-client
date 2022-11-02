import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import ManageProducts from "./ManageProducts";
import Products from "./Products";
import ServerDataView from "./ServerDataView";
import Update from "./Update";

const router = createBrowserRouter([
    {
        path:'/', element:<Home/>,
        children:[
            {path:'/products', element:<Products/>},
            {path:'/manageproducts', element:<ManageProducts/>},
            {path:'/update/:id', element:<Update/>,
            loader: ({params}) => fetch(`http://localhost:5000/student/${params.id}`)
        },
            {path:'/', element:<ServerDataView/>, loader:()=> fetch('http://localhost:5000/student')},
            
        ]

        
    }

])

export default router