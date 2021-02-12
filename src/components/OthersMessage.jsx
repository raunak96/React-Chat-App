import React from "react";

const OthersMessage = ({ message, lastMessage, time }) => {
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
				<div
					style={{
						position: "relative",
						marginLeft: isFirstMessageByThisUser ? "4px" : "48px",
					}}>
					<img
						src={message.attachments[0].file}
						alt="message-attachment"
						className="message-image"
					/>
					<small
						style={{
							position: "absolute",
							bottom: "8px",
							right: "16px",
							color: "white",
							marginRight: "10px",
							fontSize: "0.7rem",
						}}>
						{time}
					</small>
				</div>
			) : (
				<div
					className="message"
					style={{
						float: "left",
						backgroundColor: "#CABCDC",
						marginLeft: isFirstMessageByThisUser ? "4px" : "48px",
					}}>
					{message.text}
					<sub style={{ paddingLeft: "8px", fontSize: "0.7rem" }}>
						{time}
					</sub>
				</div>
			)}
		</div>
	);
};

export default OthersMessage;
