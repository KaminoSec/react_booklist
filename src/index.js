import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
    author: 'Maximilian Schwarzmuller',
    title: `React Key Concepts: Consolidate your knowledge of React's core features`,
    img: './images/book1.jpg',
    id: 1,
  },
  {
    author: 'Robin Wieruch',
    title: `The Road to React: Your journey to master React.js in JavaScript (2022 Edition)`,
    img: 'https://m.media-amazon.com/images/I/41m+5+-JRNL.jpg',
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
