import React, { useState, useEffect } from "react";
import { createApi } from "../api";
import { Header } from "./Header/Header";
import { Add } from "./Add/Add";
import { List } from "./List/List";
import InfiniteScroll from "react-infinite-scroll-component";

export const MainPage = () => {
  const [clients, setclients] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const [qFilter, setQFilter] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  // const { isLoading, error, data } = useQuery("repoData", () =>
  //   fetch("http://localhost:3003/api/get").then((res) => {
  //     res.json();
  //     console.log("data before", data);
  //     setclients(data);
  //   })
  // );

  const api = createApi();
  useEffect(() => {
    async function fetchData() {
      const users = await api.getUser(1);
      setclients(users);
    }
    fetchData();
  }, []);

  const fetchComments = async () => {
    const res = await api.getUser(page);
    const data = await res;
    return data;
  };

  const getData = async () => {
    const commentsFormServer = await fetchComments();
    setclients([...clients, ...commentsFormServer]);
    if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
      sethasMore(false);
    }
    setPage(page + 1);
  };

  const searchFilter = (rows) => {
    return rows.filter(
      (row) =>
        row.ID.toLowerCase().indexOf(qFilter) > -1 ||
        row.Name.toLowerCase().indexOf(qFilter) > -1 ||
        row.Email.toLowerCase().indexOf(qFilter) > -1 ||
        row.Phone.toLowerCase().indexOf(qFilter) > -1 ||
        row.IP.toLowerCase().indexOf(qFilter) > -1
    );
  };

  const handleDelete = (ID) => {
    const [delClient] = clients.filter((client) => client.ID === ID);
    api.deleteUser(ID);
    const tempClients = clients;
    setclients(tempClients.filter((client) => client.ID !== ID));
    alert("Success! " + delClient.Name + "'s data has been Deleted.");
  };

  return (
    <div>
      <div className="container">
        {/* IsAdding true/false */}
        {!isAdding ? (
          <>
            <Header
              setIsAdding={setIsAdding}
              setQFilter={setQFilter}
              qFilter={qFilter}
            />
            <InfiniteScroll
              dataLength={clients.length}
              next={getData}
              hasMore={hasMore}
            >
              <List
                clients={searchFilter(clients)}
                handleDelete={handleDelete}
              />{" "}
            </InfiniteScroll>
          </>
        ) : (
          <Add
            clients={clients}
            setclients={setclients}
            setIsAdding={setIsAdding}
          />
        )}
      </div>
    </div>
  );
};
