import heroes from "../data/heroes";

const getHeroByName = (id) => {
  //aki find vusca un dato con id y crea un nuevo objeto
  let name = id.trim();
    if(name.length === 0) return[];
  return heroes.filter((heroe) => heroe.superhero.toLowerCase().includes(name));
};
export default getHeroByName;
