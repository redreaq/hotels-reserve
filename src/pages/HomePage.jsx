import { useRef, useState } from "react";
import HotelCard from "../components/HomePage/HotelCard.jsx";
import {useSelector} from 'react-redux';
import CategoryFilter from "../components/HomePage/styles/CategoryFilter.jsx";
import PriceFilter from "../components/HomePage/PriceFilter.jsx";


const HomePage = () => {
        const [inputName, setInputName] = useState("");
        const [fromTo, setFormTo] = useState({
            from: 0,
            to: Infinity
        })
      

    const hotels = useSelector((states) => states.hotels);

    const inputValue = useRef()

    const handleChange = () => {
        setInputName(inputValue.current.value)

    }

    console.log(hotels);

    const cbfilter = hotelInfo => {
          const filterName = hotelInfo.name
            .toLowerCase()
            .includes(inputName.toLowerCase().trim());
          const price = Number(hotelInfo.price)
          const filterPrice = price >= fromTo.from && price <= fromTo.to

        return filterName && filterPrice;
    };

  return (
    <div>
        <div>
            <input 
               onChange={handleChange} 
               value={inputName} 
               ref={inputValue} 
               type="text" 
               />
        </div>  
        <aside>
            <h3>Filters</h3>
            <PriceFilter
            setFromTo={setFormTo} />
            <CategoryFilter/>
        </aside>  
        <div className="container-card">
            {hotels?.filter(cbfilter).map((hotelInfo) => (
             <HotelCard key={hotelInfo.id} hotel={hotelInfo} />
            ))}
        </div>
    </div>
  );
};

export default HomePage
