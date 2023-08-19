import axios from "axios";

export const createApi = () => {
  return {
    getUser: (page) => {
      return axios
        .get(`http://localhost:3003/api/getUsers?_page=${page}&_limit=500`)
        .then((res) => res.data);
    },
    addUser: (user) => {
      console.log(user, "userapi");
      return axios
        .post(`http://localhost:3003/api/insert`, { user })
        .then((res) => res.data);
    },
    deleteUser: (id) => {
      return axios
        .post(`http://localhost:3003/api/delete`, { id })
        .then((res) => res.data);
    },
  };
};
