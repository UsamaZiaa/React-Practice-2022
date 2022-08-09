import { useGlobalContext } from "./context"

const Pagination = () => {
  const {page, nbPages, getPrevPage, getNextPage} =useGlobalContext()

  return (<>
    <div className="pagination-btn">
      <button onClick={() => getPrevPage()} disabled={page <= 0}>PREVIOUS</button>
      <p>{page + 1} of {nbPages}</p>
      <button onClick={() => getNextPage()} disabled={page + 1 >= nbPages}>NEXT</button>
    </div>
  </>)
}

export default Pagination