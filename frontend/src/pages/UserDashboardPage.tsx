import { FaPlus } from "react-icons/fa";
import AppointmentCard from "../components/AppointmentCard";
import { TbLayoutDashboardFilled } from "react-icons/tb";
const UserDashboardPage = () => {
	return (
		<div className='w-[85%] mx-auto '>
			<div className='flex items-center justify-between'>
				<h1 className='flex items-center font-bold text-5xl my-10'>
					<TbLayoutDashboardFilled className='text-green-500' />
					<span>My appointment</span>
				</h1>
				<button
					// onClick={() => setShowAddEventPopup(true)}
					className='rounded-lg text-white bg-green-500 px-4 py-2.5 cursor-pointer flex items-center space-x-2 hover:bg-green-600 transition-colors duration-300 ease-in-out'
				>
					<FaPlus />
					<span>add event</span>
				</button>
			</div>
			<div className='space-y-4 text-lg'>
				<div className='flex items-center justify-around font-semibold text-lg text-green-600'>
					{/* <div>Image</div> */}
					<div className='w-[25%] text-center'>Hour</div>
					<div className='w-[25%] text-center'>Date</div>
					<div className='w-[25%] text-center'>Status</div>
					<div className='w-[25%] text-center'>Actions</div>
				</div>
				{[1, 2, 3, 4].map((event) => (
					<AppointmentCard />
				))}
			</div>
			{/* {showAddEventPopup && (
				<AddEventForm setShowAddEventPopup={setShowAddEventPopup} />
			)} */}
		</div>
	);
};

export default UserDashboardPage;
