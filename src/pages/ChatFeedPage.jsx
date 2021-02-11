import React, { useCallback } from "react";
import MessageForm from "../components/MessageForm";
import OthersMessage from "../components/OthersMessage";
import SelfMessage from "../components/SelfMessage";

/**
 * @ChatFeed The component displaying messages of active chat
 * @param {Object} chatProps - provided by chatEngine.io
 * */
const ChatFeed = props => {
	console.log(props);
	const { messages, chats, userName, activeChat } = props;
	const chat = chats && chats[activeChat]; // gets active Chat

	const renderReadReceipts = useCallback(
		(message, isMyMessage) => {
			return chat.people.map(
				(person, index) =>
					person.person.username !== message.sender.username &&
					person.last_read === message.id &&
					userName !== person.person.username && (
						<div
							key={`read_${index}`}
							className="read-receipt"
							style={{
								float: isMyMessage ? "right" : "left",
								backgroundImage: `url(${person?.person?.avatar})`,
							}}
						/>
					)
			);
		},
		[chat?.people, userName]
	);

	const renderMessages = useCallback(() => {
		const keys = Object.keys(messages); // gets id of all messages

		return keys.map((key, index) => {
			const message = messages[key];
			const previousMessageKey = index === 0 ? null : keys[index - 1];
			const isMyMessage = message.sender.username === userName;

			return (
				<div key={`msg_${index}`} style={{ width: "100%" }}>
					<div className="message-block">
						{isMyMessage ? (
							<SelfMessage message={message} />
						) : (
							<OthersMessage
								message={message}
								lastMessage={messages[previousMessageKey]}
							/>
						)}
					</div>
					<div
						className="read-receipts"
						style={{
							marginRight: isMyMessage ? "18px" : "0px",
							marginLeft: isMyMessage ? "0px" : "68px",
						}}>
						{renderReadReceipts(message, isMyMessage)}
					</div>
				</div>
			);
		});
	}, [messages, userName, renderReadReceipts]);

	return chat ? (
		<div className="chat-feed">
			<div className="chat-title-container">
				<div className="chat-title">{chat.title}</div>
				<div className="chat-subtitle">
					{chat.people.map(person => ` ${person.person.username}`)}
				</div>
			</div>
			{renderMessages()}
			<div style={{ height: "100px" }} />
			<div className="message-form-container">
				{" "}
				{/* Here we type new message */}
				<MessageForm {...props} chatId={activeChat} />
			</div>
		</div>
	) : (
		<div>Loading....</div>
	);
};

export default ChatFeed;
