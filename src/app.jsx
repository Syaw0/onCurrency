import React, { useEffect, useState } from "react";
import fake from "./fake";
import Loader from "./loader";
import { mainStore } from "./store/mainStore";
import global from "./styles/global";
import Flex from "./styles/styledComponents/flex";
import Text from "./styles/styledComponents/text";
import Table from "./table";

const App = () => {
  global();
  useEffect(() => {
    setWS();
  }, []);

  const setWS = async () => {
    try {
      const ws = new WebSocket("ws://localhost:3232");
      ws.onopen = () => {
        console.log("open connection successfully");
      };
      ws.onmessage = (msg) => {
        const data = JSON.parse(msg.data);
        if (!data.status) {
          setIsError(true);
        } else {
          if (!isDataLoaded) {
            setIsDataLoaded(true);
          }
          setIsError(false);
          console.log("fresh data is come and i rerender");
          setData(data.data);
        }
      };
    } catch (err) {
      setIsError(true);
    }
  };
  const [data, setData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  return (
    <Flex
      id="holder"
      css={{
        padding: "0 $6",
      }}
    >
      <Text
        size="h4"
        weight="500"
        css={{
          padding: "1rem",
          borderBottom: "1px solid $onBg200",
          width: "100%",
        }}
      >
        ON CURRENCY
      </Text>
      <Flex
        dir="column"
        justify="start"
        align="center"
        css={{ minHeight: "80vh", paddingTop: "$5" }}
      >
        {!isError && (isDataLoaded ? <Table data={data} /> : <Loader />)}
        {isError && (
          <Text
            size="h6"
            css={{
              color: "$onError",
              backgroundColor: "$error",
              padding: "5px 1rem",
              borderRadius: "5px",
            }}
          >
            Error happen!
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default App;
