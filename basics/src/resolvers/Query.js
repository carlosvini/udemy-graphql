const caseInsensitiveIncludes = (string, query) =>
  string.toLowerCase().includes(query.toLowerCase());

const Query = {
  users: (parent, args, { db }) => {
    const { query } = args;
    if (!query) return db.users;

    return db.users.filter((user) => caseInsensitiveIncludes(user.name, query));
  },
  me: (parent, args, { db }) => db.users[0],
  posts: (parent, args, { db }) => db.posts,
  comments: (parent, args, { db }) => db.comments,
};

export default Query;
