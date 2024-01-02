import './Reservations.css'
import SingleRes from '../SingleRes/SingleRes'

function Reservations({ reservations }) {

const reservationCards = reservations.map(reservation => {

return <SingleRes
        key={reservation.id}
        reservation={reservation}
        />


})

return (

    <section className="reservationCards">
        {reservationCards}
    </section>

)}

export default Reservations