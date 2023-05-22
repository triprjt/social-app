import Jane from "./Image/Jane.jpg";
import John from "./Image/John.jpg";
import JohnLennon from "./Image/JohnLennon.jpg";
import Paul from "./Image/PaulMccartney.jpg";
import ringo from "./Image/ringoStarr.jpg";
import harrison from "./Image/Harrison.jpg";

const initialUsers = [
  {
    username: "john_doe", // unique identifier for the user
    name: "John Doe", // the user's full name
    bio: "Software engineer from San Francisco", // a short bio of the user
    imageUrl: John, // path to the user's profile picture
    posts: [
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      // more posts...
    ],
    following: true, // whether the current user is following this user
    connections: 150, // number of connections this user has
  },
  {
    username: "john_lennon", // unique identifier for the user
    name: "John Lennon", // the user's full name
    bio: "Lead Software engineer. Full stack.", // a short bio of the user
    imageUrl: JohnLennon, // path to the user's profile picture
    posts: [
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      // more posts...
    ],
    following: false, // whether the current user is following this user
    connections: 250, // number of connections this user has
  },
  {
    username: "paul", // unique identifier for the user
    name: "Paul Mccartney", // the user's full name
    bio: "Software engineer from San Francisco", // a short bio of the user
    imageUrl: Paul, // path to the user's profile picture
    posts: [
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      // more posts...
    ],
    following: false, // whether the current user is following this user
    connections: 250, // number of connections this user has
  },
  {
    username: "ringo", // unique identifier for the user
    name: "Ringo Starr", // the user's full name
    bio: "Software engineer and automation tester ", // a short bio of the user
    imageUrl: ringo, // path to the user's profile picture
    posts: [
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      // more posts...
    ],
    following: false, // whether the current user is following this user
    connections: 250, // number of connections this user has
  },
  {
    username: "george", // unique identifier for the user
    name: "George Harrison", // the user's full name
    bio: "Software architect from New York state ", // a short bio of the user
    imageUrl: harrison, // path to the user's profile picture
    posts: [
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      {
        id: 1, // unique identifier for the post
        title: "My first post",
        content: "This is my first post on this social app!",
      },
      // more posts...
    ],
    following: false, // whether the current user is following this user
    connections: 250, // number of connections this user has
  },
];

export default initialUsers;
