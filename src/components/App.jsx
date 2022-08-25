import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notifikation';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const optionsBtn = ['good', 'neutral', 'bad'];

  function leaveFeedback(option) {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  }

  const totalFeedback = good + neutral + bad;

  const positiveFeedbackPercentage = (good / totalFeedback) * 100;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsBtn}
          onLeaveFeedback={leaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        )}
      </Section>
    </div>
  );
}
