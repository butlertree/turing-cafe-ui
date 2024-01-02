import './SingleRes.css'

function SingleRes({ reservation }) {

const{name, date, time, number} = reservation;

return (
    <article className="reservation">
        <h3>{name}</h3>
        <p>Date: {date}</p>
        <p>Time: {time} pm</p>
        <p>Number of guests: {number}</p>
    </article>
)


}




export default SingleRes