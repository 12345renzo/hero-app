import { useParams,Navigate, useNavigate } from "react-router";
import getHeroById from "../helpers/getHeroById";
import { useMemo } from "react";

function HeroPage() {
  const { id } = useParams();
  const nave = useNavigate();

  //agregamos un memo para evitar rerenderizamiento
  //memo para variable y callback para function
  const data = useMemo(() => getHeroById(id), [id]);

  if (!data) {
    return <Navigate to="/marvel" />;
  }

  const ruta = () => {
    nave(-1, { replace: true });
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${data.id}.jpg`}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-4">
        <h3>{data.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego:</b> {data.alter_ego}{" "}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {data.publisher}{" "}
          </li>
          <li className="list-group-item">
            <b>Age:</b> {data.first_appearance}{" "}
          </li>
        </ul>
        <button className="btn btn-primary" onClick={ruta}>
          Regresar
        </button>
      </div>
    </div>
  );
}

export default HeroPage