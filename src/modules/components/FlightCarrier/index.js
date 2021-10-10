import styles from "./FlightCarrier.module.scss"
import carrierFlag from "../../../assets/images/flight-carrier.svg"
import flightFromIcon from "../../../assets/images/flight-arrival-icon.svg"
import flighttoIcon from "../../../assets/images/flight-destination-icon.svg"

export default function FlightCarrier({parentStyles, flight}) {
    return (
        <div className={`${parentStyles.cardSections} ${styles.carrierDetails}`}>
            <img className={styles.flightCarrierFlag} src={carrierFlag} alt="flight carrier flag" />
            <div className={styles.lineSeparator}>
                <img src={flightFromIcon} alt="flight from" />        
                <div className={styles.line}></div>
                <img src={flighttoIcon} alt="flight destination" />
            </div>    
            <p className={styles.flightCarrierDetails} aria-hidden="true">
                {` ${flight.operatorCode} ${flight.flightNumber} / ${flight.plane}`}
            </p>
        </div>  
    ) 
}