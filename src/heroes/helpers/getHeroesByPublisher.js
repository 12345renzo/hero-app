
import heroes from '../data/heroes';

const getHeroesByPublisher=(publisher) => {
    const validar = ['DC Comics','Marvel Comics'];

    if(!validar.includes(publisher)){
        throw new Error(`${publisher}`);
    }

    //aki filter es filtra por este data y trae un arreglo new con
    //datos filtrados
    return heroes.filter(heroe => heroe.publisher === publisher);
}

export default getHeroesByPublisher;