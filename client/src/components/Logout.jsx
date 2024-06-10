import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
	const { logout } = useAuth0();

	return (
		<button
			type="button"
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  mb-4"
			onClick={() =>
				logout({ logoutParams: { returnTo: window.location.origin } })
			}
		>
			Log Out
		</button>
	);
};

export default LogoutButton;
