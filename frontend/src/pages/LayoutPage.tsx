import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const LayoutPage = () => {
	return (
		<>
			<NavBar />
			<main className="pt-20">
				<Outlet />
			</main>
		</>
	);
};

export default LayoutPage;
