export const initialStore = () => {
  return {
    people: [],
    planets: [],
    vehicles: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'get_people':
      const people = action.payload;
      return {
        ...store,
        people: people
      }
    case 'get_planets':
      const planets = action.payload;
      return {
        ...store,
        planets: planets
      }
    case 'get_vehicles':
      const vehicles = action.payload;
      return {
        ...store,
        vehicles: vehicles
      }
    case 'add_favorite':
      return {
        ...store,
        favorites: [...store.favorites, action.payload.data]
      }

    case 'remove_favorite':
      const { uid, type } = action.payload;
      return {
        ...store,
        favorites: store.favorites.filter(favorite =>!(favorite.uid === uid && favorite.type === type)
    )};

    default:
      return store;
  }
}
