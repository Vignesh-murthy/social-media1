import React, { useState } from 'react';
import '../index.css';
import pic from '../pic.jpg';
import Post2 from '../post2.avif';
import Post3 from '../post3.png';
import Post1 from '../pic.jpg';
import Stats from './stats';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';

const AnalyticsCard = ({ data }) => {
    const [showStats, setShowStats] = useState(false);

    const handleToggleStats = () => {
        setShowStats(!showStats);
    };

    return (
        <div className="analytics-card">
            <div className="analytics-card-header">
                <img src={pic} alt="Profile" className="profile-pic" />
                <h2>{data.name} ({data.category})</h2>
            </div>
            <p><span>Bio:</span> {data.bio}</p>
            <p><span>Contact:</span> {data.contactOptions}</p>
            <p><span>Links:</span> <a href='https://www.linkedin.com/in/vignesh-murthy-396101252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel="noopener noreferrer"> LinkedIn</a></p>
            <br></br>
            <button>Follow</button>
            <div className="card-section">
                <p><span>Followers:</span> {data.numberOfFollowers}</p>
                <p><span>Following:</span> {data.numberOfFollowing}</p>
                <p><span>Posts:</span> {data.numberOfPosts}</p>
            </div>
            <div className="card-section1">
                <button onClick={handleToggleStats}>
                    {showStats ? 'Hide Stats' : 'Show Account Stats'}
                </button>
                {showStats && <Stats data={data} />}
            </div>
            <h3>Posts</h3>
            
            <div className='posts'>
                <div className='feed'>
                    <img src={Post2} alt='post2'></img>
                </div>
                <div className='feed'>
                    <img src={Post3} alt='post3'></img>
                </div>
                <div className='feed'>
                    <img src={Post1} alt='post1'></img>
                </div>
            </div>
            <div className='footer'>
                <FaHome className="footer-icon" />
                <FaSearch className="footer-icon" />
                <FaUser className="footer-icon" />
            </div>
        </div>
    );
};

export default AnalyticsCard;
