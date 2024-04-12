import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import { Map, Overlay } from "pigeon-maps"
import OtherHotels from "../components/HomePage/OtherHotels"
import FormReserve from "../components/HomePage/FormReserve"

const HotelIsIdPage = () => {

  const {id} = useParams()

  const url = `https://hotels-api.academlo.tech/hotels/${id}`
  
  const [hotel, getHotel] = useFetch(url)

  useEffect(() => {
    getHotel()
  }, [])
  
  console.log(hotel)

  return (
    <div>
      <h2>{hotel?.name}</h2>
      <h3>RATING - {hotel?.rating}</h3>
      <div className="slider">
        <img src={hotel?.images[0].url} alt="" />
        {hotel && (
          <Map
             height={200}
             defaultCenter={[+hotel.lat, +hotel.lon]}
             zoom={16}
             maxZoom={16}
             minZoom={10}
          >
            <Overlay anchor={[+hotel.lat, +hotel.lon]} offset={[20, 20]}>
              <img src="/hotel-icon.png" width={40} alt="" />
            </Overlay>
          </Map>   
        )}
      </div>  
      
      <section>
        <h3>
          {hotel?.city.name}, {hotel?.city.country}
        </h3>
        <p>
          <i className="bx bx-map"></i>
          <span>{hotel?.address}</span>
        </p>
        <p>
          {hotel?.description}
        </p>
        
        
      </section>
          localStorage.getItem('token')
            ? <FormReserve hotelId={hotel?.id} />
            : <h4>If you want to make a reservation, please <Link to='/login'>login</Link></h4>
        
      
        
        <OtherHotels 
          hotel={hotel}
      />

    </div>
  )
}

export default HotelIsIdPage
