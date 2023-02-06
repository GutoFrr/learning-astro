import { useState } from 'react';

export default function Greeting({ messages }) {
  const [greeting, setGreeting] = useState(randomMessage());

  function randomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
  }

  function handleMessage() {
    setGreeting((prevGreeting) => (prevGreeting = randomMessage()));
  }

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={handleMessage}>New Greeting</button>
    </div>
  );
}
