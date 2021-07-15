export default function Home({ handleLogout }) {
	return (
		<div>
			<button type="button" onClick={handleLogout}>
				Log out
			</button>
		</div>
	);
}
