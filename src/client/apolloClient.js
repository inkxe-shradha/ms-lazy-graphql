import {
  ApolloClient,
  InMemoryCache,
  defaultDataIdFromObject,
} from "@apollo/client";
const client = new ApolloClient({
  uri: "http://localhost:1111/graphql",
  cache: new InMemoryCache({
    dataIdFromObject: (object) => {
      switch (object.__typename) {
        case "Tarrif":
          return object.key;
        default:
          return defaultDataIdFromObject(object);
      }
    },
  }),
});

export default client;
