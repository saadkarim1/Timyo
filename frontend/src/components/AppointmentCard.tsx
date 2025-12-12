import { FaClock } from "react-icons/fa";

const AppointmentCard = () => {
	return (
		<div className='rounded-xl border-2 bg-white border-slate-300 w-full py-2 flex items-center justify-around'>
			<div className=' w-[25%] flex items-center justify-center'>
				15-05-2025
			</div>
			<div className=' w-[25%] flex items-center justify-center '>9:00</div>
			<div className=' w-[25%] flex items-center justify-center '>
				<p className='flex items-center space-x-0.5 bg-[#ffedd5] border-[1.5px] border-transparent p-1 text-[#e9802e] rounded-full text-[12px] font-medium '>
					<FaClock />
					<span>Waiting</span>
				</p>
			</div>
			<div className=' w-[25%] flex items-center justify-center'><button className="bg-red-500 text-white font-medium rounded-full py-1.5 px-3 cursor-pointer text-[14px]">Cancel</button></div>
		</div>
	);
};

export default AppointmentCard;
