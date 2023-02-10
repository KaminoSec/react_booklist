import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img src='./images/book1.jpg' alt='React Key Concepts' />;
const Title = () => (
  <h2>
    React Key Concepts: Consolidate your knowledge of React's core features
  </h2>
);
const Author = () => {
  return <h4>Maximilian Schwarzmuller</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
