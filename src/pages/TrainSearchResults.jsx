import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import styles from '../Styles/TrainSearchResults.module.css';
import ModifySearch from '../Components/ModifySearch.jsx';

const API_URL = 'https://mocki.io/v1/8a217561-582d-4f6e-b3df-48819954eba3';

const TrainSearchResults = () => {
 
  // const { currentUser } = useAuth();

  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const trainsWithClasses = data.data.map((train) => ({
          ...train,
          availableClasses: ['AC 3 Tier (3A)', 'AC 2 Tier (2A)', 'AC First Class (1A)'],
        }));
        setTrains(trainsWithClasses);
      })
      .catch((error) => {
        console.error('Error fetching train data:', error);
      });
  }, []);
  
  return (
    
   <>
   <ModifySearch />

   <div className={styles.container}>
     
     <div className={styles.filterSection}>
       <div className={styles.filterColumn}>
         <h3>Travel Classes</h3>
         <label className={styles.checkboxLabel}><input type="checkbox"  /> AC First Class (1A)</label>
         <label className={styles.checkboxLabel}><input type="checkbox"  /> AC 2 Tier (2A)</label>
         <label className={styles.checkboxLabel}><input type="checkbox"  /> AC 3 Tier (3A)</label>
       </div>
       <div className={styles.filterColumn}>
         <h3>Train Type</h3>
         <label className={styles.checkboxLabel}><input type="checkbox"  /> Rajdhani</label>
         <label className={styles.checkboxLabel}><input type="checkbox"  /> Shatabdi</label>
         <label className={styles.checkboxLabel}><input type="checkbox"  /> Special</label>
       </div>
       <div className={styles.filterColumn}>
         <h3>Departure Time</h3>
         <label className={styles.checkboxLabel}><input type="checkbox"  /> 00:00 - 06:00</label>
         <label className={styles.checkboxLabel}><input type="checkbox"  /> 06:00 - 12:00</label>
       </div>
     </div>

     <div className={styles.trainList}>
       {trains.length === 0 ? (
         <div className={styles.noTrains}>No trains found.</div>
       ) : (
         trains.map((train) => (
           <div key={train.train_number} className={styles.trainCard}>
             <div className={styles.trainHeader}>
               <span className={styles.trainName}>{train.train_name} ({train.train_number})</span>
               <span className={styles.trainSchedule}>Train Schedule</span>
             </div>
             <div className={styles.trainDetails}>
               <div className={styles.timeInfo}>
                 <span>{train.departure_time}</span>
                 <span>{train.source}</span>
               </div>
               <span className={styles.durationInfo}>{train.days_of_operation}</span>
               <div className={styles.timeInfo}>
                 <span>{train.arrival_time}</span>
                 <span>{train.destination}</span>
               </div>
             </div>
             <div className={styles.classInfo}>
               {train.availableClasses.map((cls) => (
                 <span key={cls}>{cls}</span>
               ))}
             </div>
             <div className={styles.actionButtons}>
               <button className={styles.bookNowButton} >Book Now</button>               
               <button className={styles.otherDatesButton} >Other Dates</button>
             </div>
           </div>
         ))
       )}
     </div>
   </div>
   
   </>
  );
};

export default TrainSearchResults;
