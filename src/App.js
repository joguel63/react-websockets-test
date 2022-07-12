import logo from "./logo.svg";
import "./App.css";
import { over } from "stompjs";
/* import { useEffect } from "react"; */
import SockJS from "sockjs-client";
/* import useWebSocket, { ReadyState } from "react-use-websocket"; */
function App() {
  /*  const { sendMessage, lastMessage, readyState } = useWebSocket(
    "https://sura-apimanagement-dev.azure-api.net/api-payments-back/v1/gw-socket"
  );

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];
  console.log(connectionStatus); */

  const sock = new SockJS(
    "https://sura-apimanagement-dev.azure-api.net/api-payments-back/v1/gw-socket"
  );

  const stompClient = over(sock);
  stompClient.connect(
    {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiIzZTk3NmZlNS1kYWE5LTQwYWMtYmQ0Mi0zYmI3ODhmMDU4MjYiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vOGM1NzBlMjQtOGIyOS00YWU4LTk3ZjktOTcxMGIwN2E0ODBiL3YyLjAiLCJpYXQiOjE2NTc2NjQ5MDIsIm5iZiI6MTY1NzY2NDkwMiwiZXhwIjoxNjU3NjY4ODAyLCJhaW8iOiJFMlpnWUhBMjFvaTZhT0N4c3p4aFRxN1FKN1h6cjU1THNreTRxRDNMSityMW5mNUxubXNBIiwiYXpwIjoiM2U5NzZmZTUtZGFhOS00MGFjLWJkNDItM2JiNzg4ZjA1ODI2IiwiYXpwYWNyIjoiMSIsIm9pZCI6ImE3YTk3MjEwLWNkYjEtNDM4Yy1iYTVkLTU0MDk0MzdhOGI4YiIsInJoIjoiMC5BUlVBSkE1WGpDbUw2RXFYLVpjUXNIcElDLVZ2bHo2cDJxeEF2VUk3dDRqd1dDYWJBQUEuIiwic3ViIjoiYTdhOTcyMTAtY2RiMS00MzhjLWJhNWQtNTQwOTQzN2E4YjhiIiwidGlkIjoiOGM1NzBlMjQtOGIyOS00YWU4LTk3ZjktOTcxMGIwN2E0ODBiIiwidXRpIjoiaGhrWXFMWk1wa3UwcHp5N0Vjb1lBQSIsInZlciI6IjIuMCJ9.payQuTdC0hd0lErpxkzOfmKe2ICE3TIWRSXFIiidXnZOBVb1AkUca9Byy_0lK9TrbQdXLWrQwo7I823ff6ZKTENY4uPLPWWkWCH7iBbK5e9i5H419M7EdUgOHCDUwEn6wiWuBsaQb9FtIXPatnu5urpqTx7Qq9ORapLCi5-LUAwbEg3R2OhBy4RI7fLhLJCmIYx774moctqdYH9QujdN77hBYrvn6k0Hdv9u-DPRvneVGgOIerRBrdrNbkw-gvUu8p1zB8T00BsmMUtzkHqk89Ov8kNjwXyh1ZJXLrp0POV9j6l6yjl_M0SsXRbdcPp7afVdvAeUrWu_1y-Yzt4Iug",
      "x-api-key": "d245d7f3b5cd429e9394b2b6b9852a2a",
    },
    (frame) => {
      console.log("conectado", frame);
    }
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
