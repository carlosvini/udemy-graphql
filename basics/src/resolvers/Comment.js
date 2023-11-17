const Comment = {
  author: (parent, args, { db }, info) =>
    db.users.find(
      (user) =>
        user.id === db.posts.find((post) => post.id === parent.post).author
    ),
  post: (parent, args, { db }, info) =>
    db.posts.find((post) => post.id === parent.post),
};

export default Comment;
