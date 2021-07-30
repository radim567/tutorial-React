import React from "react";

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert("hello world");
  };

  const clickHandlerEventObject = (e) => {
    console.log(e);
    console.log(e.target);
  };
  // 2. inline function - <h1></h1>

  // 3. more complex example - parameter will be passed dynamically, as an argument, need to set up as arrow function
  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
