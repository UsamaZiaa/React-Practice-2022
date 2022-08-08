import { useContext } from "react"
import FavoritesContext from "../store/favorite-context"
import MeetupList from "../components/meetups/MeetupList"

export default function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext)

  return (
    <section>
      <h1>My Favorites</h1>
      {favoritesCtx.totalFavorites === 0 ?
        "You Got No Favorites Yet. Start Adding Some?" : <MeetupList meetups={favoritesCtx.favorites} />
      }
    </section>
  )
}