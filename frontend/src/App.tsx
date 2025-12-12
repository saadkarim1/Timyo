import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboardPage from "./pages/UserDashboardPage";
import LayoutPage from "./pages/LayoutPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LayoutPage />}>
					<Route index element={<UserDashboardPage />}></Route>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/register' element={<Register />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
