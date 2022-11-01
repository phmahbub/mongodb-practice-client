import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import ManageProducts from "./ManageProducts";
import Products from "./Products";

const router = createBrowserRouter([
    {
        path:'/', element:<Home/>,
        children:[
            {path:'/products', element:<Products/>},
            {path:'/manageproducts', element:<ManageProducts/>},
            
        ]

        
    }

])

export default router