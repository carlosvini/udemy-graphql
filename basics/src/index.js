import { createServer } from "node:http";
import { createSchema, createYoga } from "graphql-yoga";
import fs from "fs";
import { fileURLToPath } from "url";
import { comments, posts, users } from "./data.js";

import Query from "./resolvers/Query.js";
import Mutation from "./resolvers/Mutation.js";
import Post from "./resolvers/Post.js";
import Comment from "./resolvers/Comment.js";
import User from "./resolvers/User.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const typeDefs = fs.readFileSync(`${__dirname}/schema.graphql`, "utf8");

const resolvers = {
  Query,
  Mutation,
  Post,
  Comment,
  User,
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
