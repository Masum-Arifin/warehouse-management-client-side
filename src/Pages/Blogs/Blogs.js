import React from "react";

const Blogs = () => {
  return (
    <div className=" row justify-content-center align-items-start mx-auto py-5 text-center g-4 container">
      <div className="col-md-12 col-lg-12 ">
        <h4>What is the purpose of jwt and how does it work?</h4>
        <article className="article">
          <span>Answer:</span>
          JWT, or JSON Web Token. is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued. Now that you understand
          JSON as a data text format, you may be wondering What are tokens? To
          put it simply, a token is a string of data that represents something
          else, such as an identity. In the case of authentication, a non-JWT
          based token is a string of characters that allow the receiver to
          validate the sender’s identity.Claims are used to transmit information
          between two parties. What these claims are depends on the use case at
          hand. For example, a claim may assert who issued the token, how long
          it is valid for, or what permissions the client has been granted.
        </article>
        <div className="col-md-12 col-lg-12 mt-3">
          <h4>When should you use nodejs and when should you use mongodb</h4>
          <article className="article">
            <span>Answer:</span>
            Any project needs a programming environment and a runtime library
            that offers you basic programming tools/support and can compile
            and/or interpret your code. Nodejs is such as tool for the
            Javascript programming language. There are other similar tools for
            other languages such as Python, Java, PHP, C#, C++, Go, etc... If
            your application needs the ability to persistently store data in a
            way that you can efficiently query or update it later, then you
            would typically use some form of database. There are dozens of
            popular databases. MongoDB is one such database.
          </article>
        </div>
      </div>
      <div className="col-md-6 col-lg-6">
        <h4>Difference between javascript and nodejs ?</h4>
        <article className="article">
          <span>Answer:</span>
          JavaScript is a simple programming language that runs in any browser
          JavaScript Engine.This engine name is V8. Whereas Node JS is an
          interpreter or running environment for a JavaScript programming
          language that holds many excesses.. Nodejs allows Javascript code to
          run outside the browser. Nodejs comes with a lot of modules and mostly
          used in web development.
        </article>
      </div>
      <div className="col-md-6 col-lg-6">
        <h4>Differences between sql and nosql databases ?</h4>
        <article className="article">
          <span>Answer:</span>
          SQL ~ use structured query language and have a predefined schema. -~
          are vertically scalable are table based -~are better for multi-row
          transactions. NoSQL ~ NoSQL databases have dynamic schemas for
          unstructured data. -~ while NoSQL databases are document, key-value,
          graph, or wide-column stores. -~ NoSQL is better for unstructured data
          like documents or JSON.
        </article>
      </div>
    </div>
  );
};

export default Blogs;
