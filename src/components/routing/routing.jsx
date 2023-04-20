import Index from '../../pages/index/index' 
import {useRoutes} from "react-router-dom";
import NotfoundPage from '../../pages/NotfoundPage/NotfoundPage'
import treeData from '../../data'

const Routings = () => {

    let routes = useRoutes([
      { path: "/", element: <Index data = {treeData} /> },
      { path: "*", element: <NotfoundPage /> },
      

     
    ]);
    return routes;

}
export default Routings