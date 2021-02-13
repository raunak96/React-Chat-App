import React, { useState } from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./pages/ChatFeedPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
	const [userDetails, setUserDetails] = useState({
		userName: localStorage.getItem("userName"),
		password: localStorage.getItem("password"),
	});
	return localStorage.getItem("userName") ? (
		<ChatEngine
			projectID={process.env.REACT_APP_PROJECT_ID}
			userName={userDetails.userName}
			userSecret={userDetails.password}
			height="100vh"
			renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
		/>
	) : (
		<LoginPage setUserDetails={setUserDetails} />
	);
};

export default App;
