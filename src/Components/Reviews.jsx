import React, { useState } from "react";
 import "./Reviews.css";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Siddharth",
      date: "22 Jan 2025",
      rating: 4,
      title: "I'll Say It’s A Good",
      content:
        "I’ll say it’s a good car overall. Must buy for those who are 4,5 members family. You’ll get mileage, comfort, less maintenance cost. It is...",
      helpful: { yes: 10, no: 2 },
    },
    {
      id: 2,
      name: "Ritu",
      date: "19 Jan 2025",
      rating: 5,
      title: "Style Power And Performance",
      content:
        "I have been driving this car for past 2 years now. Me being a passionate driver, find so much comfort and luxury in XL 6. The car is very easy...",
      helpful: { yes: 8, no: 1 },
    },
  ];

  const mentions = [
    { label: "ALL", count: 381 },
    { label: "MILEAGE", count: 124 },
    { label: "PERFORMANCE", count: 99 },
    { label: "SAFETY", count: 69 },
    { label: "LOOKS", count: 77 },
    { label: "COMFORT", count: 116 },
  ];

  const [activeMention, setActiveMention] = useState("ALL");

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">New Car User Reviews & Rating</h2>
      <div className="overall-rating">
        <span className="rating-value">4.4</span>
        <span className="rating-description">
          Overall Rating
          <br />
          <span>Based on 381 Reviews</span>
        </span>
      </div>
      <div className="popular-mentions">
        {mentions.map((mention) => (
          <button
            key={mention.label}
            className={`mention-button ${
              activeMention === mention.label ? "active" : ""
            }`}
            onClick={() => setActiveMention(mention.label)}
          >
            {mention.label} ({mention.count})
          </button>
        ))}
      </div>
      <h3 className="reviews-heading">381 Rating and Reviews</h3>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <div className="review-header">
              <div className="review-avatar">
                {review.name.charAt(0)}
              </div>
              <div>
                <span className="review-name">{review.name}</span>
                <span className="review-date">wrote a review {review.date}</span>
              </div>
            </div>
            <div className="review-rating">{Array(review.rating).fill("⭐")}</div>
            <h4 className="review-title">{review.title}</h4>
            <p className="review-content">{review.content}</p>
            <div className="review-helpful">
              <span>Is this review helpful?</span>
              <button>Yes ({review.helpful.yes})</button>
              <button>No ({review.helpful.no})</button>
            </div>
          </div>
        ))}
      </div>
      <button className="view-more-button">View More Reviews ▼</button>
    </div>
  );
};

export default Reviews;