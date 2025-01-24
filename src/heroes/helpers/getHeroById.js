import heroes from "../data/heroes";

const getHeroById = (id) => {
    //aki find vusca un dato con id y crea un nuevo objeto
    return heroes.find((heroe) => heroe.id === id);
}
export default getHeroById