import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import HotelCard from "./HotelCard"

const OtherHotels = ({ hotel }) => {

    const url = `https://hotels-api.academlo.tech/hotels?cityId=${hotel?.cityId}`
    const [hotelsInCity, getHotelInCity] = useFetch(url)

    useEffect(() => {
      if(hotel) {
         getHotelInCity()
      }
    }, [hotel])

    console.log(hotelsInCity)

  return (

    <section>
        <h3>Other Hotels in <span>{hotel?.city.name}</span></h3>
        <div>
            {
                hotelsInCity?.filter(hotelInfo => hotelInfo.Id !== hotel.id).map(hotelInfo => (
                    <HotelCard
                      key={hotelInfo.id}
                      hotel={hotelInfo}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default OtherHotels
