import Card from '../shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>This is a react app to for people to rate how their day went</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to='/'> Back to home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
