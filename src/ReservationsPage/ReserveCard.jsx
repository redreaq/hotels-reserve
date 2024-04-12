import React from 'react'

const ReserveCard = ({ reserve, setReserveSelected }) => {

  const checkIn = new Date(reserve, checkIn)
  const checkOut = new Date(reserve,checkOut)
  const reservationDays = (checkOut - checkIn)/(1000 * 60 * 60 * 24)

  const handleReview = () => {
    const obj = {
      ...reserve,
      reservationsDays,
      subtotal: reserve.hotel.price * reservationsDays
    }
    setReserveSelected(obj)
  }


  return (
    <article className="reserve">
      <header className="reserve__header">
        <img className="reserve__img" src={reserve.hotel.images[0].url} alt="" />
      </header>
      <section className="reserve__info">
        <h3 className="reserve__name">{reserve.hotel.name}</h3>
        <div className="reserve__country">{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
        <div onClick={handleReview} className="reserve__openform">Rate and comment this visit...</div>
      </section>
      <section className="reserve__dayprice">
        <ul className="reserve__list">
          <li className="reserve__item"><span>Reservation Days</span><span>calcular dias de reservation</span></li>
          <li><span>subtotal Price</span><span>dias de reservation * precio</span></li>
        </ul>
      </section>
      <footer>
        <button>
          <i className='bx bx-trash'></i>
        </button>
      </footer>
    </article>
  )
}

export default ReserveCard


