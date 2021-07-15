import "../styles/Login.css";

export default function Login({
	email,
	setEmail,
	password,
	setPassword,
	handleLogin,
	handleSignup,
	hasAccount,
	setHasAccount,
	emailError,
	passwordError,
}) {
	return (
		<section className="login">
			<div className="loginContainer">
				<label htmlFor="email">Email</label>
				<input
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<p className="errorMsg">{emailError}</p>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<p className="errorMsg">{passwordError}</p>

				<div className="btnContainer">
					{hasAccount ? (
						<>
							<button type="button" onClick={handleLogin}>
								Sign in
							</button>
							<p>
								Don't have an account ?
								<span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
							</p>
						</>
					) : (
						<>
							<button type="button" onClick={handleSignup}>
								Sign up
							</button>
							<p>
								Already have an account ?
								<span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
							</p>
						</>
					)}
				</div>
			</div>
		</section>
	);
}
