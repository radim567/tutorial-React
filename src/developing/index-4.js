import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//Setup vars
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
    title: "If Animals Kissed Good Night",
    author: "Ann Whitford Paul",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/91Bd7P8UwxL._AC_UL200_SR200,200_.jpg",
    title: "Project Hail Marry",
    author: "Andy Weir",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        /* destructuring
        const { img, title, author } = book; */
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // or... const Book = (props) => {}
  // const { img, title, author } = props;

  // attribute, eventHandler
  // onClick, onMouseOver as...
  // 1. reference example
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

ReactDom.render(<Booklist />, document.getElementById("root"));
