import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./pages/ChatFeedPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
	return localStorage.getItem("userName") ? (
		<ChatEngine
			projectID={process.env.REACT_APP_PROJECT_ID}
			userName={localStorage.getItem("userName")}
			userSecret={localStorage.getItem("password")}
			height="100vh"
			renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
		/>
	) : (
		<LoginPage />
	);
};

export default App;
