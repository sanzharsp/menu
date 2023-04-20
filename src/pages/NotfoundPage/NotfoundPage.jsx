import './NotfoundPage.css'
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
/* Страница 404 */

const NotfoundPage=()=>{
  let navigate = useNavigate();

    return(
        <div >
        <h1 className="h1-module">404 Error Page</h1>
        <p className="zoom-area"><b>УПС</b>  страница не найдена </p>
        <section className="error-container">
          <span className="four"><span className="screen-reader-text">4</span></span>
          <span className="zero"><span className="screen-reader-text">0</span></span>
          <span className="four"><span className="screen-reader-text">4</span></span>
        </section>
        <div className="link-container">
        <Button onClick={()=>navigate("/", { replace: true })} >
        В Главную
    </Button>
         
        </div>
 
        </div>
    

    )
}

export default NotfoundPage;