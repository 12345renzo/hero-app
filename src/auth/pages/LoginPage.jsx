import { useContext } from "react";
import { useNavigate } from "react-router"
import { AuthContext } from "../context/AuthContext";

function LoginPage() {

  const {login} = useContext(AuthContext)
  const ruta = useNavigate();

  const navegar = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Renzo Gonzales')

    setTimeout(() => {
      ruta(lastPath, {
        replace: true,
      });
    }, 0);
  }


  return (
    <div className="containter mt-5">
      <h1>Login</h1>
      <hr/>
      <button className="btn btn-primary" onClick={navegar}>Login</button>
    </div>
  )
}

export default LoginPage