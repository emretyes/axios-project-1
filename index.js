import axios from "axios";

export default async (userId) => {
  try {
    const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );

    const { data: posts } = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=" + userId
    );
    return { user, posts };
  } catch (e) {
    return e;
  }
};
