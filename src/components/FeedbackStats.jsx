import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  // Calculate ratings average
  let averageRating =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  averageRating = averageRating.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div>
      <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {!isNaN(averageRating) ? averageRating : 0}</h4>
      </div>
    </div>
  );
}

export default FeedbackStats;
