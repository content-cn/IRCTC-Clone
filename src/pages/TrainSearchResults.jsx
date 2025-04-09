import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import styles from '../Styles/TrainSearchResults.module.css';
import ModifySearch from '../Components/ModifySearch';

const API_URL = 'https://mocki.io/v1/41189c39-e55b-4b7d-a236-529edfb9d3af';

const TrainSearchResults = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [trains, setTrains] = useState([]);

  const handleDetailsClick = (train) => {
    navigate(`/train-details/${train}`);
  };

  // Add this new function to handle booking
  const handleBookNowClick = (train) => {
    // Extract current date in YYYY-MM-DD format
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    
    // Get the first available class as default
    const defaultClass = Object.keys(train.price)[0] || 'AC Chair Car';
    
    // Navigate to booking page with complete train details
    navigate('/booking', {
      state: {
        trainNumber: train.train_number,
        trainName: train.train_name,
        from: train.source,
        to: train.destination,
        date: formattedDate,
        departureTime: train.departure_time,
        arrivalTime: train.arrival_time,
        duration: train.duration,
        travelClass: defaultClass,
        quota: 'General',
        price: train.price, // Pass the entire price object
        days_of_operation: train.days_of_operation
      }
    });
  };

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // The API response has train data with price objects
        setTrains(data.data);
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
            <label className={styles.checkboxLabel}><input type="checkbox" /> AC First Class (1A)</label>
            <label className={styles.checkboxLabel}><input type="checkbox" /> AC 2 Tier (2A)</label>
            <label className={styles.checkboxLabel}><input type="checkbox" /> AC 3 Tier (3A)</label>
          </div>
          <div className={styles.filterColumn}>
            <h3>Train Type</h3>
            <label className={styles.checkboxLabel}><input type="checkbox" /> Rajdhani</label>
            <label className={styles.checkboxLabel}><input type="checkbox" /> Shatabdi</label>
            <label className={styles.checkboxLabel}><input type="checkbox" /> Special</label>
          </div>
          <div className={styles.filterColumn}>
            <h3>Departure Time</h3>
            <label className={styles.checkboxLabel}><input type="checkbox" /> 00:00 - 06:00</label>
            <label className={styles.checkboxLabel}><input type="checkbox" /> 06:00 - 12:00</label>
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
                  <span className={styles.durationInfo}>
                    {train.duration} • {Array.isArray(train.days_of_operation) 
                      ? train.days_of_operation.join(', ') 
                      : train.days_of_operation}
                  </span>
                  <div className={styles.timeInfo}>
                    <span>{train.arrival_time}</span>
                    <span>{train.destination}</span>
                  </div>
                </div>
                <div className={styles.classInfo}>
                  {/* Use the price object keys as available classes */}
                  {train.price ? (
                    Object.keys(train.price).map((cls) => (
                      <span key={cls}>{cls} (₹{train.price[cls]})</span>
                    ))
                  ) : (
                    <span>No class information available</span>
                  )}
                </div>
                <div className={styles.actionButtons}>
                  {train.price && Object.keys(train.price).length > 0 ? (
                    <div className={styles.bookingOptions}>
                      <button 
                        className={styles.bookNowButton} 
                        onClick={() => handleBookNowClick(train)}
                      >
                        Book Now
                      </button>
                      <button 
                        className={styles.otherDatesButton} 
                        onClick={() => handleDetailsClick(train.train_number)}
                      >
                        Other Dates
                      </button>
                    </div>
                  ) : (
                    <div className={styles.bookingOptions}>
                      <button 
                        className={styles.disabledButton} 
                        disabled
                      >
                        No Seats Available
                      </button>
                      <button 
                        className={styles.otherDatesButton} 
                        onClick={() => handleDetailsClick(train.train_number)}
                      >
                        Other Dates
                      </button>
                    </div>
                  )}
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