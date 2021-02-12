import React from "react";

const SelfMessage = ({ message, time }) => {
	return message?.attachments?.length > 0 ? (
		<div
			style={{
				position: "relative",
				float: "right",
				marginTop: "5px",
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
				float: "right",
				marginRight: "18px",
				color: "#fff",
				backgroundColor: "#3a2b50",
			}}>
			{message.text}
			<sub style={{ paddingLeft: "8px", fontSize: "0.7rem" }}>{time}</sub>
		</div>
	);
};

export default SelfMessage;
