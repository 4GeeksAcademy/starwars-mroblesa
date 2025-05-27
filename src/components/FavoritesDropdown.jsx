import  useGlobalReducer  from '../hooks/useGlobalReducer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


export const FavoritesDropdown = () => {
    const { store, dispatch } = useGlobalReducer();
    const { favorites } = store;
    console.log(store);
    const handleRemoveFavorite = (uid, type) => {
        dispatch({
            type: "remove_favorite",
            payload: { uid, type }
        });
    };

    return (
        <div className="dropdown">
            <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Favorites ({store.favorites.length})
            </button>
            <ul className="dropdown-menu">
                {store.favorites.map((favorite, index) => (
                    <li key={index} className="d-flex justify-content-between align-items-center px-3">
                        {favorite.name}
                        <FontAwesomeIcon onClick={() => handleRemoveFavorite(favorite.uid, favorite.type)} className="float-end" icon={faTrash} />
                    </li>
                ))}
            </ul>
        </div>
    );
};