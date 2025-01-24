import { useLocation, useNavigate } from "react-router";
import { useForm } from "../../hooks/useForm";
import HeroCard from "../components/HeroCard";
import queryString from "query-string";import getHeroByName from "../helpers/getHeroByName";
 'query-string'

function SearchPage() {

  //para obtener la navegacion
  const navegar = useNavigate();
  //para obtener informacion del sitio de donde nos encontramos
  const locacion = useLocation();

  //aki separamos solo la kuery
  const {q = ''} = queryString.parse(locacion.search);

  //lo buscamos
  const data = getHeroByName(q);

  const { state ,cambio } = useForm({
    searchText: q,
  });

  const enviar = (event) => {
    event.preventDefault();
    //if (state.searchText.trim().length <= 2) return;
    //para usar query params
    navegar(`?q=${state.searchText.toLowerCase()}`);
  } 

  return (
    <>
      <h1 className="mt-3">Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={enviar}>
            <input
              type="text"
              name="searchText"
              value={state.searchText}
              onChange={cambio}
              autoComplete="off"
              className="form-control"
              placeholder="Search Hero"
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            (q === '' ? (
              <div className="alert alert-primary">Search a Hero</div>
            ) : (data.length === 0) && (
              <div className="alert alert-danger">
                No Hero with <b>{q}</b>
              </div>
            ))
          }
          <div>
            {data.map((hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPage