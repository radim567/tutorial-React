import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

function Booklist() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);

const Title = () => <h1>If Animals Kissed Good Night</h1>;

const Author = () => (
  <h4 style={{ color: "#617D98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Ann Whitford Paul
  </h4>
);

ReactDom.render(<Booklist />, document.getElementById("root"));
