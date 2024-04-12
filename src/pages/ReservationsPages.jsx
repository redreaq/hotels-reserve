import { useEffect } from "react"
import useCrud from "../hooks/useCrud"
import ReserveCard from "../ReservationsPage/ReserveCard"


const ReservationsPages = () => {
  

    const [bookings, getBookings] = useCrud()

    useEffect(() => {
      const url = 'https://hotels-api.academlo.tech/bookings'
        getBookings(url)

    }, [])
    console.log(bookings)
  
 return (
  <>
  <h2>Reservations</h2>
    <div>
       { 
      bookings?.map(reserve => (
        <ReserveCard
            key={reserve.id}
            reserve={reserve}
        />
      ))
       }
    </div>
  </>
    
  )
}

export default ReservationsPages
