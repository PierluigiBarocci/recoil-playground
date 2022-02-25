import { atom, selector } from "recoil";
/**
 * Here, with Redux, we should create an action creator 
 * const todoAdded = text => {
    return {
      type: 'todos/todoAdded',
      payload: text
    }
  }
  and also create a Reducer to update the store;
  With Recoil all of this is not required, the key prop tells Recoil
  witch part of the global state need to be update
 */

/**
 * Atom: units of global State, components can acces and subscribe to change an Atom
 */
export const animeTitles = atom({
  // Unique key among all atoms
  key: "animeTitleList",
  // Default Value
  default: [],
});

export const animeListPageNum = atom({
  key: "animeListPageNum",
  default: 0,
});

/**
 * Selector: handle transformation both sync and async of states
 */
export const slicedAnimeTitles = selector({
  key: "slicedAnimeTitles",
  // 'Get':: access the value of an atom or selector
  get: ({ get }) => {
    const animes = get(animeTitles);
    const pageNum = get(animeListPageNum);

    const newAnimeList = [...animes];
    const arrIndex = pageNum === 0 ? 0 : pageNum * 50 + 1;

    return newAnimeList.splice(arrIndex, 50);
  },
});
