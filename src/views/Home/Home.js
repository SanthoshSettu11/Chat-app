import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import Chat from "../Chat/Chat";
import WebSocketClient from "../../services/WebSocket";
import { updateSocket } from "../../store/WebSocket/WebSocketActions";

function Home() {
  const [toUserId, setToUserId] = useState(
    "b48b4120-e490-11ea-a1e9-696efed5dc0b"
  );
  const { userId, ws } = useSelector((state) => ({
    userId: state.loginReducer?.loginData?.userId,
    ws: state.WebSocketReducer?.ws
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(userId);
    const ws = new WebSocketClient(
      "ws",
      "13.235.135.67",
      8080,
      "/newMessenger/letsChat/"
    );
    dispatch(updateSocket(ws));
  }, []);

  return (
    <div>
      {ws && <Chat userId={userId} toUserId={toUserId} webSocket={ws}></Chat>}
    </div>
  );
}

export default Home;
