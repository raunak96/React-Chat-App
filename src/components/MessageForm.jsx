import React, { useState } from "react";
import { isTyping, sendMessage } from "react-chat-engine";
import SendIcon from "@material-ui/icons/Send";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";

const MessageForm = props => {
	const { chatId, creds } = props;
	const [value, setValue] = useState("");
	const handleChange = e => {
		setValue(e.target.value);
		isTyping(props, chatId);
	};
	const handleSubmit = e => {
		e.preventDefault();
		const text = value.trim();
		if (text.length > 0) sendMessage(creds, chatId, { text });
		setValue("");
	};
	const handleUpload = e => {
		sendMessage(creds, chatId, { files: e.target.files, text: "" });
	};
	return (
		<form className="message-form" onSubmit={handleSubmit}>
			<input
				className="message-input"
				type="text"
				placeholder="Type a Message..."
				value={value}
				onChange={handleChange}
				onSubmit={handleSubmit}
			/>
			<label htmlFor="upload-button">
				<span className="image-button">
					<ImageOutlinedIcon className="picture-icon" />
				</span>
			</label>
			<input
				type="file"
				id="upload-button"
				multiple={false}
				style={{ display: "none" }}
				onChange={handleUpload}
			/>
			<button type="submit" className="send-button">
				<SendIcon className="send-icon" />
			</button>
		</form>
	);
};

export default MessageForm;
