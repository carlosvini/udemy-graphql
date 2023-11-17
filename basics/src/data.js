export const users = [
  {
    id: "1",
    name: "Mike",
    email: "mike@example.com",
  },
  {
    id: "2",
    name: "Andrew",
    email: "Andrew@example.com",
  },
  {
    id: "3",
    name: "Sarah",
    email: "Sarah@example.com",
  },
];

export const posts = [
  {
    id: "10",
    title: "GraphQL 101",
    body: "This is how to use GraphQL...",
    published: true,
    author: "1",
  },
  {
    id: "11",
    title: "GraphQL 201",
    body: "This is an advanced GraphQL post...",
    published: false,
    author: "1",
  },
  {
    id: "12",
    title: "Programming Music",
    body: "",
    published: false,
    author: "2",
  },
];

export const comments = [
  {
    id: "1",
    text: "This is a great article! Really enjoyed reading it.",
    post: "10",
  },
  {
    id: "2",
    text: "I have some questions about the details mentioned in the third paragraph.",
    post: "10",
  },
  {
    id: "3",
    text: "Interesting perspective, though I think there might be other factors to consider.",
    post: "12",
  },
  {
    id: "4",
    text: "Thank you for sharing this information. Looking forward to more posts like this.",
    post: "10",
  },
];
