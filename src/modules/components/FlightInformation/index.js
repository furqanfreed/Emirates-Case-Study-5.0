import styles from "./FlightInformation.module.scss"
import calenderIcon from "../../../assets/images/calender-icon.svg"

export default function FlightInformation({parentStyles, flight, toOrFromClass, toOrFrom}) {
    return (
        <div className={`
                ${parentStyles.cardSections} 
                ${toOrFromClass}
                `}>
            <div className={styles.topLabel}>
                {toOrFrom && toOrFrom === 'from' ? 'Departurer' : 'Arrival'}
            </div>
            <div className={styles.flightTime}>
                {toOrFrom && toOrFrom === 'from' ? flight.departuretime : flight.arrivaltime}
            </div>
            <div className={toOrFrom && toOrFrom === 'from' ? `${styles.flightDate} ${styles.flightDDate}` : `${styles.flightDate}  ${styles.flightADate}`}>    
                <img src={calenderIcon} 
                    alt="flight date" 
                    />
                {toOrFrom && toOrFrom === 'from' ? flight.departuredate : flight.arrivaldate}
            </div>
            <div className={styles.airportName}>
                {toOrFrom && toOrFrom === 'from' ? flight.from : flight.to}
            </div>
        </div>
    ) 
}