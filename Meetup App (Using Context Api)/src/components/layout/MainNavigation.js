import { useContext } from "react";
import FavoriteContext from "../../store/favorite-context"
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css"

export default function MainNavigation() {
    const favoriteCtx = useContext(FavoriteContext)

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="new-meetup">New Meetup</Link>
                    </li>
                    <li>
                        <Link to="favorites">Favorites
                        <span className={classes.badge}>{favoriteCtx.totalFavorites}</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}