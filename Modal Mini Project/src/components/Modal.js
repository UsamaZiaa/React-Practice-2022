export default function Modal({closeModalHander}) {
  return (
    <div className="modal">
        <p>Are you sure?</p>
        <button className="btn btn--alt" onClick={closeModalHander}>Cancel</button>
        <button className="btn" onClick={closeModalHander}>Confirm</button>
    </div>
  )
}
