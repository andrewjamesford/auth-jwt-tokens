import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFoundPage from "./components/NotFoundPage";

import ProductPage from "./components/products/ProductPage";
import Profile from "./components/Profile";

const App = () => {
	return (
		<div className="">
			<Header />
			<Routes>
				<Route exact path="/" element={<ProductPage />} />
				<Route exact path="/profile" element={<Profile />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
