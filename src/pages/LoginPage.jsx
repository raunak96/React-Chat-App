import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from "axios";

const useStyles = makeStyles(theme => ({
	root: {
		"& .MuiTextField-root": {
			margin: "0 auto",
			width: "90%",
			marginBottom: "25px",
		},
		"& .MuiInputBase-root": {
			backgroundColor: "rgb(255,255,255)",
		},
	},
}));

const LoginPage = () => {
	const classes = useStyles();
	const [formData, setFormData] = useState({
		userName: "",
		password: "",
		showPassword: false,
		passwordError: "",
		userNameError: "",
		formSubmissionError: false,
	});
	const {
		userName,
		password,
		showPassword,
		passwordError,
		userNameError,
		formSubmissionError,
	} = formData;
	const handleChange = e => {
		const { name, value } = e.target;
		if (name === "password") {
			if (value === "")
				setFormData(prev => ({
					...prev,
					passwordError: "Password is required.",
				}));
			else if (value.length < 6 || value.length > 15)
				setFormData(prev => ({
					...prev,
					passwordError:
						"Password has to be between 6-15 characters.",
				}));
			else if (passwordError !== "")
				setFormData(prev => ({ ...prev, passwordError: "" }));
		} else {
			if (value === "")
				setFormData(prev => ({
					...prev,
					userNameError: "UserName is required.",
				}));
			else if (userNameError !== "")
				setFormData(prev => ({ ...prev, userNameError: "" }));
		}

		setFormData(prev => ({ ...prev, [name]: value }));
	};
	const handleClickShowPassword = () => {
		setFormData(prev => ({ ...prev, showPassword: !showPassword }));
	};
	const handleSubmit = async e => {
		e.preventDefault();
		const authObject = {
			"Project-ID": process.env.REACT_APP_PROJECT_ID,
			"User-Name": userName,
			"User-Secret": password,
		};
		try {
			await axios.get("https://api.chatengine.io/chats", {
				headers: authObject,
			});
			localStorage.setItem("userName", userName);
			localStorage.setItem("password", password);
			window.location.reload();
		} catch (error) {
			setFormData(prev => ({ ...prev, formSubmissionError: true }));
		}
	};
	return (
		<div className="wrapper">
			<div className="form">
				<h1 className="title">Chat Application</h1>
				<form onSubmit={handleSubmit} className={classes.root}>
					<TextField
						type="text"
						name="userName"
						error={!!userNameError}
						value={userName}
						onChange={handleChange}
						variant="outlined"
						required
						label="UserName"
						helperText={userNameError}
						placeholder="john34"
					/>
					<TextField
						type={showPassword ? "text" : "password"}
						required
						value={password}
						error={!!passwordError}
						name="password"
						label="Password"
						helperText={passwordError}
						variant="outlined"
						onChange={handleChange}
						placeholder=""
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={e => e.preventDefault()}>
										{formData.showPassword ? (
											<Visibility />
										) : (
											<VisibilityOff />
										)}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					<button
						className="button"
						type="submit"
						disabled={!!passwordError || !!userNameError}>
						<span>Start Chatting</span>
					</button>
					{formSubmissionError && (
						<h2 className="error">Oops, Wrong Credentials!</h2>
					)}
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
