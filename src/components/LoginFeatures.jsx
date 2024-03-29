import { useState, useEffect } from "react";
import fire from "../firebase";
import Login from "./Login";
import Home from "./Home";

export default function LoginFeatures() {
	const [user, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [hasAccount, setHasAccount] = useState(false);

	const handleLogin = () => {
		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch((err) => {
				switch (err.code) {
					case "auth/invalid-email":
					case "auth/user-disabled":
					case "auth/user-not-found":
						setEmailError(err.message);
						break;
					case "auth/wrong-password":
						setPasswordError(err.message);
						break;
				}
			});
	};

	const handleSignup = () => {
		fire
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch((err) => {
				switch (err.code) {
					case "auth/invalid-email":
					case "auth/email-already-in-use":
						setEmailError(err.message);
						break;
					case "auth/weak-password":
						setPasswordError(err.message);
						break;
					// no default
				}
			});
	};

	const handleLogout = () => {
		fire.auth().signOut();
	};

	const authListener = () => {
		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				setUser(user);
			} else {
				setUser("");
			}
		});
	};

	useEffect(() => {
		authListener();
	}, []);

	return (
		<div>
			{user ? (
				<Home handleLogout={handleLogout} />
			) : (
				<Login
					email={email}
					setEmail={setEmail}
					password={password}
					setPassword={setPassword}
					handleLogin={handleLogin}
					handleSignup={handleSignup}
					hasAccount={hasAccount}
					setHasAccount={setHasAccount}
					emailError={emailError}
					passwordError={passwordError}
				/>
			)}
		</div>
	);
}
