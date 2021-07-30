import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//Setup vars
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
    title: "If Animals Kissed Good Night",
    author: "Ann Whitford Paul",
  },
];

const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames);
function Booklist() {
  return <section className="booklist">{newNames}</section>;
}

// Version 3 - destructuring object in the props parameter
const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
