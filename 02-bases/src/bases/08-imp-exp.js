//import { owners , heroes } from "./data/heroes";
import superHeroes from '../data/heroes'

export const getHeroById = (id) => {
    return superHeroes.find( hero => hero.id ===id )
}



export const getHeroesByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner)


