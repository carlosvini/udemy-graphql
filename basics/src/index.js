import { createServer } from "node:http";
import { createSchema, createYoga } from "graphql-yoga";
import fs from "fs";
import { fileURLToPath } from "url";
import { comments, posts, users } from "./data.js";

import Query from "./resolvers/Query.js";
import Mutation from "./resolvers/Mutation.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const typeDefs = fs.readFileSync(`${__dirname}/schema.graphql`, "utf8");

const resolvers = {
  Query,
  Mutation,
  Post: {
    author: (parent, args, ctx, info) =>
      users.find((user) => user.id === parent.author),
    comments: (parent) =>
      comments.filter((comment) => comment.post === parent.id),
  },
  Comment: {
    author: (parent, args, ctx, info) =>
      users.find(
        (user) =>
          user.id === posts.find((post) => post.id === parent.post).author
      ),
    post: (parent, args, ctx, info) =>
      posts.find((post) => post.id === parent.post),
  },
  User: {
    posts: (parent, args, ctx, info) =>
      posts.filter((post) => post.author === parent.id),
    comments: (parent) => {
      const authorPostIds = posts
        .filter((post) => post.author === parent.id)
        .map((post) => post.id);
      return comments.filter((comment) => authorPostIds.includes(comment.post));
    },
  },
};

const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  context: {
    db: { users, posts, comments },
  },
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
