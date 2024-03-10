import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";

const projectID = "8d9a726b-47fd-4b46-b4d0-e0ecde91534e";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <>
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
      <SpeedInsights />
    </>
  );
};

export default App;
