
const FormReviews = (reserveSelected) => {
  
    console.log(reserveSelected)

    const {handleSubmit, reset, register} = useForm()

    const [,, createReview] = useCrud()

    const submit = data => {
        const url = 'https://hotels-api.academlo.tech/reviews'
        data.hotelId = reserveSelected?.hotel.id
        data.ratin = +data.rating
        createReviews(url)
    }
  
    return (
    <article>
        <h3>Reserve</h3>
            <section>
                <header>
                    <img src={reserveSelected?.hotel.images[0].url} alt="" />
                    <h4>{reserveSelected?.hotel.name}</h4>
                </header>
            </section>
        </h3>
    </article>
  )
}

export default FormReviews
