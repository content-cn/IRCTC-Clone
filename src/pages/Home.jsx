import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaExchangeAlt, FaCalendarAlt, FaSuitcase, FaTrain } from "react-icons/fa";
import styles from "../Styles/Home.module.css";
import trainImage from "../assets/train1.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [travelClass, setTravelClass] = useState("All Classes");
  const [quota, setQuota] = useState("General");

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img src={trainImage} alt="Train Background" className={styles.trainImage} />
      </div>

      <div className={styles.bookingForm}>
        <h2>BOOK TICKET</h2>

        <div className={styles.inputGroup}>
          <div className={styles.inputWrapper}>
            <FaTrain className={styles.icon} />
            <input
              type="text"
              placeholder="From Station"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className={styles.input}
            />
          </div>
          <button className={styles.swapButton}>
            <FaExchangeAlt />
          </button>
          <div className={styles.inputWrapper}>
            <FaTrain className={styles.icon} />
            <input
              type="text"
              placeholder="To Station"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.inputWrapper}>
            <FaCalendarAlt className={styles.icon} />
            <input 
              type="date" 
              className={styles.input} 
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className={styles.inputWrapper}>
            <FaSuitcase className={styles.icon} />
            <select 
              className={styles.select}
              value={travelClass}
              onChange={(e) => setTravelClass(e.target.value)}
            >
              <option>All Classes</option>
              <option>Sleeper</option>
              <option>AC 3 Tier</option>
              <option>AC 2 Tier</option>
              <option>AC First Class</option>
            </select>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.inputWrapper}>
            <FaTrain className={styles.icon} />
            <select 
              className={styles.select}
              value={quota}
              onChange={(e) => setQuota(e.target.value)}
            >
              <option>General</option>
              <option>Ladies</option>
              <option>Tatkal</option>
              <option>Premium Tatkal</option>
              <option>Railway Pass</option>
            </select>
          </div>
        </div>

        <div className={styles.checkboxGroup}>
          <label><input type="checkbox" /> Person With Disability Concession</label>
          <label><input type="checkbox" /> Flexible With Date</label>
          <label><input type="checkbox" /> Train with Available Berth</label>
          <label><input type="checkbox" /> Railway Pass Concession</label>
        </div>

        <div className={styles.buttonGroup}>
          <button 
            className={styles.searchButton}
          >
            Search Trains
          </button>
          <button 
          className={styles.ShowTrain}
          onClick={() => navigate("/train-search")}
          >
            Show All Trains
            </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
