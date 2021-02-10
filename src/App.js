import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./pages/ChatFeedPage";

const App = () => {
	return (
		<ChatEngine
			projectID={process.env.REACT_APP_PROJECT_ID}
			userName={process.env.REACT_APP_USERNAME}
			userSecret={process.env.REACT_APP_USERSECRET}
			height="100vh"
			renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
		/>
	);
};

export default App;
