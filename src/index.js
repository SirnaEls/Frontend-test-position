import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
} from "@apollo/client";
import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

// // const query = gql`
// //   query GetCakes {
// //     cakes {
// //       description
// //       id
// //       image
// //       title
// //     }
// //   }
// `;

client
  .query({
    query: gql`
      query GetCakes {
        cakes {
          description
          id
          image
          title
        }
      }
    `,
  })
  .then((result) => console.log("Nassir", result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
