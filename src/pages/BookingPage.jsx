// import React, { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom';
// import { useAuth } from '../Context/AuthContext';
// import styles from '../Styles/BookingPage.module.css';
// import TrainSearchResults from './TrainSearchResults';

// function BookingPage() {
//   const location = useLocation();
//   const { currentUser } = useAuth();
//   const [trainDetails, setTrainDetails] = useState(null);
//   const [passengers, setPassengers] = useState([{ name: '', age: '', gender: 'Male', berth: 'No Preference' }]);
//   const [contactInfo, setContactInfo] = useState({
//     email: currentUser?.email || '',
//     phone: ''
//   });

//   useEffect(() => {
//     // Check if we have train details from navigation state
//     if (location.state?.trainNumber) {
//       // In a real app, you'd fetch train details from API
//       // For now, mock the data
//       setTrainDetails({
//         trainNumber: location.state.trainNumber,
//         from: location.state.from,
//         to: location.state.to,
//         date: location.state.date,
//         departureTime: '16:25',
//         arrivalTime: '08:15',
//         travelClass: location.state.travelClass || 'AC 3 Tier',
//         quota: location.state.quota || 'General'
//       });
//     }
//   }, [location.state]);

//   const addPassenger = () => {
//     setPassengers([...passengers, { name: '', age: '', gender: 'Male', berth: 'No Preference' }]);
//   };

//   const removePassenger = (index) => {
//     if (passengers.length > 1) {
//       const updatedPassengers = [...passengers];
//       updatedPassengers.splice(index, 1);
//       setPassengers(updatedPassengers);
//     }
//   };

//   const updatePassenger = (index, field, value) => {
//     const updatedPassengers = [...passengers];
//     updatedPassengers[index][field] = value;
//     setPassengers(updatedPassengers);
//   };

//   const handleContactChange = (field, value) => {
//     setContactInfo({
//       ...contactInfo,
//       [field]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // In a real app, you would submit the booking to your backend
//     alert('Booking submitted successfully!');
//     // You would then redirect to a payment page or confirmation page
//   };

//   if (!trainDetails) {
//     return (
//       <div className={styles.container}>
//         {/* <TrainSearchResults /> */}
//         <h2>Booking Page</h2>
//         <p>No train selected. Please search for trains and select one to book.</p>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.container}>
//       <h2>Book Your Train Ticket</h2>
      
//       <div className={styles.trainSummary}>
//         <h3>Train Details</h3>
//         <div className={styles.detailsGrid}>
//           <div>
//             <strong>Train Number:</strong> {trainDetails.trainNumber}
//           </div>
//           <div>
//             <strong>From:</strong> {trainDetails.from}
//           </div>
//           <div>
//             <strong>To:</strong> {trainDetails.to}
//           </div>
//           <div>
//             <strong>Date:</strong> {trainDetails.date}
//           </div>
//           <div>
//             <strong>Departure:</strong> {trainDetails.departureTime}
//           </div>
//           <div>
//             <strong>Arrival:</strong> {trainDetails.arrivalTime}
//           </div>
//           <div>
//             <strong>Class:</strong> {trainDetails.travelClass}
//           </div>
//           <div>
//             <strong>Quota:</strong> {trainDetails.quota}
//           </div>
//         </div>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <div className={styles.passengerSection}>
//           <h3>Passenger Details</h3>
//           {passengers.map((passenger, index) => (
//             <div key={index} className={styles.passengerCard}>
//               <h4>Passenger {index + 1}</h4>
//               <div className={styles.inputGroup}>
//                 <label>
//                   Name:
//                   <input 
//                     type="text" 
//                     value={passenger.name} 
//                     onChange={(e) => updatePassenger(index, 'name', e.target.value)}
//                     required
//                   />
//                 </label>
//               </div>
//               <div className={styles.inputGroup}>
//                 <label>
//                   Age:
//                   <input 
//                     type="number" 
//                     value={passenger.age} 
//                     onChange={(e) => updatePassenger(index, 'age', e.target.value)}
//                     required
//                     min="1"
//                     max="120"
//                   />
//                 </label>
//               </div>
//               <div className={styles.inputGroup}>
//                 <label>
//                   Gender:
//                   <select 
//                     value={passenger.gender} 
//                     onChange={(e) => updatePassenger(index, 'gender', e.target.value)}
//                   >
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </label>
//               </div>
//               <div className={styles.inputGroup}>
//                 <label>
//                   Berth Preference:
//                   <select 
//                     value={passenger.berth} 
//                     onChange={(e) => updatePassenger(index, 'berth', e.target.value)}
//                   >
//                     <option value="No Preference">No Preference</option>
//                     <option value="Lower">Lower</option>
//                     <option value="Middle">Middle</option>
//                     <option value="Upper">Upper</option>
//                     <option value="Side Lower">Side Lower</option>
//                     <option value="Side Upper">Side Upper</option>
//                   </select>
//                 </label>
//               </div>
//               {passengers.length > 1 && (
//                 <button 
//                   type="button" 
//                   className={styles.removeButton}
//                   onClick={() => removePassenger(index)}
//                 >
//                   Remove
//                 </button>
//               )}
//             </div>
//           ))}
//           <button 
//             type="button" 
//             className={styles.addButton}
//             onClick={addPassenger}
//           >
//             Add Passenger
//           </button>
//         </div>

//         <div className={styles.contactSection}>
//           <h3>Contact Information</h3>
//           <div className={styles.inputGroup}>
//             <label>
//               Email:
//               <input 
//                 type="email" 
//                 value={contactInfo.email} 
//                 onChange={(e) => handleContactChange('email', e.target.value)}
//                 required
//               />
//             </label>
//           </div>
//           <div className={styles.inputGroup}>
//             <label>
//               Phone:
//               <input 
//                 type="tel" 
//                 value={contactInfo.phone} 
//                 onChange={(e) => handleContactChange('phone', e.target.value)}
//                 required
//                 pattern="[0-9]{10}"
//                 title="Phone number should be 10 digits"
//               />
//             </label>
//           </div>
//         </div>

//         <div className={styles.paymentSection}>
//           <h3>Payment Summary</h3>
//           <div className={styles.paymentDetails}>
//             <div>
//               <span>Base Fare (x{passengers.length}):</span>
//               <span>₹{1200 * passengers.length}</span>
//             </div>
//             <div>
//               <span>GST:</span>
//               <span>₹{Math.round(1200 * passengers.length * 0.05)}</span>
//             </div>
//             <div>
//               <span>Convenience Fee:</span>
//               <span>₹30</span>
//             </div>
//             <div className={styles.totalAmount}>
//               <span>Total Amount:</span>
//               <span>₹{1200 * passengers.length + Math.round(1200 * passengers.length * 0.05) + 30}</span>
//             </div>
//           </div>
//         </div>

//         <div className={styles.termsSection}>
//           <label>
//             <input type="checkbox" required />
//             I agree to the Terms and Conditions and Cancellation Policy
//           </label>
//         </div>

//         <div className={styles.buttonGroup}>
//           <button type="submit" className={styles.payButton}>
//             Proceed to Payment
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default BookingPage;


import React from 'react'

function BookingPage() {
  return (
    <div>BookingPage</div>
  )
}

export default BookingPage

