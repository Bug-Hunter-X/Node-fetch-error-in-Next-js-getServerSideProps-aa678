```javascript
// pages/about.js
import {getServerSideProps} from 'next/server'
import fetch from 'node-fetch';

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function About({ data }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>Todo Title: {data.title}</p>
    </div>
  );
}
```