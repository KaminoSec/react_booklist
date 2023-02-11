import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
import { Book } from './Book';

const BookList = () => {
  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log('this is the handleFormInput function');
  };
  //   const handleButtonClick = () => {
  //     alert('handle form input');
  //   };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Example Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
