const caseInsensitiveIncludes = (string, query) =>
  string.toLowerCase().includes(query.toLowerCase());

const Query = {
  users: (_, args, { db }) => {
    const { query } = args;
    if (!query) return db.users;

    return db.users.filter((user) => caseInsensitiveIncludes(user.name, query));
  },
  me: () => db.users[0],
  posts: () => db.posts,
  comments: () => db.comments,
};

export default Query;
