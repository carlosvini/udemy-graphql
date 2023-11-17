const User = {
  posts: (parent, args, ctx, info) =>
    db.posts.filter((post) => post.author === parent.id),
  comments: (parent) => {
    const authorPostIds = db.posts
      .filter((post) => post.author === parent.id)
      .map((post) => post.id);
    return db.comments.filter((comment) =>
      authorPostIds.includes(comment.post)
    );
  },
};

export default User;
