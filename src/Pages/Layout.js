import { Outlet, Link } from "react-router-dom";
import us from "../imagenes/Usuario.png"
import logo from "../imagenes/logo.jpg"

const Layout = () =>{
 return <div>
    <nav class=" navbar bg-dark">
        <Link to ="/" class=""><img src={logo} alt="Logo shokun" width="15%"></img></Link>
        <Link to="/usuario"></Link>
        <Link to="/inicio"></Link>
        <Link to="/login" class="float-right"><img src={us} alt="Usuario" class="justify-content-end" width="15%"></img></Link>
      </nav>
    
    <Outlet />
 </div>;
}

export default Layout;