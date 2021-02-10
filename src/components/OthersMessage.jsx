import React from "react";

const OthersMessage = ({ message, lastMessage }) => {
	const isFirstMessageByThisUser =
		!lastMessage || message.sender.userName !== lastMessage.sender.userName; // checking if this message is continuing after previous message from same user

	return (
		<div className="message-row">
			{isFirstMessageByThisUser && (
				<div
					className="message-avatar"
					style={{
						backgroundImage: `url(${message?.sender?.avatar})`,
					}}
				/>
			)}
			{message?.attachments?.length > 0 ? (
				<img
					src={message.attachments[0].file}
					alt="message-attachment"
					className="message-image"
					style={{
						marginLeft: isFirstMessageByThisUser ? "4px" : "48px",
					}}
				/>
			) : (
				<div
					className="message"
					style={{
						float: "left",
						backgroundColor: "#CABCDC",
						marginLeft: isFirstMessageByThisUser ? "4px" : "48px",
					}}>
					{message.text}
				</div>
			)}
		</div>
	);
};

export default OthersMessage;
