import React from "react";

const SelfMessage = ({ message }) => {
	return message?.attachments?.length > 0 ? (
		<img
			src={message.attachments[0].file}
			alt="message-attachment"
			className="message-image"
			style={{ float: "right" }}
		/>
	) : (
		<div
			className="message"
			style={{
				float: "right",
				marginRight: "18px",
				color: "#fff",
				backgroundColor: "#3a2b50",
			}}>
			{message.text}
		</div>
	);
};

export default SelfMessage;
