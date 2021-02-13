import {
	Backdrop,
	Chip,
	CircularProgress,
	makeStyles,
	Typography,
} from "@material-ui/core";
import React, { useCallback } from "react";
import MessageForm from "../components/MessageForm";
import OthersMessage from "../components/OthersMessage";
import SelfMessage from "../components/SelfMessage";
import datesAreOnSameDay from "../util";

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: "rgb(162, 158, 200)",
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: "#fff",
		display: "flex",
		flexDirection: "column",
	},
}));
/**
 * @ChatFeed The component displaying messages of active chat
 * @param {Object} chatProps - provided by chatEngine.io
 * */
const ChatFeed = props => {
	console.log(props);
	const { messages, chats, userName, activeChat } = props;
	const chat = chats && chats[activeChat]; // gets active Chat
	const classes = useStyles();

	const renderReadReceipts = useCallback(
		(message, isMyMessage) => (
			<div
				className="read-receipts"
				style={{
					marginRight: isMyMessage ? "18px" : "0px",
					marginLeft: isMyMessage ? "0px" : "68px",
					marginTop: "5px",
					marginBottom: "5px",
				}}>
				{chat.people.map(
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
				)}
			</div>
		),
		[chat?.people, userName]
	);

	const renderMessages = useCallback(() => {
		const keys = Object.keys(messages); // gets id of all messages

		return keys.map((key, index) => {
			const message = messages[key];
			const previousMessageKey = index === 0 ? null : keys[index - 1];
			const lastMessage = messages[previousMessageKey];
			const isMyMessage = message.sender.username === userName;
			const messageDate = new Date(message.created);
			const isFirstMessageOfDay = !datesAreOnSameDay(
				new Date(lastMessage?.created),
				messageDate
			);
			return (
				<div key={`msg_${index}`} style={{ width: "100%" }}>
					<div className="message-block">
						{(previousMessageKey === null ||
							isFirstMessageOfDay) && (
							<div className="date-block">
								<Chip
									className={classes.root}
									label={`${messageDate.getDate()} ${messageDate.toLocaleString(
										"default",
										{ month: "long" }
									)} ${messageDate.getFullYear()}`}
								/>
							</div>
						)}
						{isMyMessage ? (
							<SelfMessage
								message={message}
								time={`${messageDate
									.toTimeString()
									.substring(0, 5)}`}
							/>
						) : (
							<OthersMessage
								message={message}
								lastMessage={lastMessage}
								time={`${messageDate
									.toTimeString()
									.substring(0, 5)}`}
							/>
						)}
					</div>
					{renderReadReceipts(message, isMyMessage)}
				</div>
			);
		});
	}, [messages, userName, renderReadReceipts, classes.root]);

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
		<Backdrop className={classes.backdrop} open>
			<Typography variant="h4" gutterBottom>
				Loading...
			</Typography>
			<CircularProgress color="inherit" />
		</Backdrop>
	);
};

export default ChatFeed;
