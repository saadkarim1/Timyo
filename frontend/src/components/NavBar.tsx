import { IoMdLogOut } from "react-icons/io";
import { Activity, useRef, useState } from "react";
const NavBar = () => {
	const leaveRef = useRef<HTMLDivElement | null>(null);
	const [dimension, setDimension] = useState({
		top: 0,
		left: window.innerWidth / 2,
	});
	const [showInput, setShowInput] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string>("");
	const changeDimension = () => {
		setDimension({
			top: Math.random() * 700,
			left: Math.random() * 600,
		});
	};
	return (
		<div>
			<div
				style={{ top: dimension.top, left: dimension.left }}
				onMouseEnter={() => {
					if (!showInput) {
						setShowInput((prev) => (prev = true));
					}
					if (leaveRef.current && inputValue !== "ma333") {
						changeDimension();
						console.log(leaveRef.current.getBoundingClientRect());
					}
				}}
				ref={leaveRef}
				className='absolute transition-all duration-400 justify-center text-4xl text-white my-3  w-fit p-2 h-14 rounded-xl bg-red-500 border-[1.5px] border-transparent'
			>
				<IoMdLogOut />
			</div>
			<div className='w-[30%] mx-auto my-6'>
				<Activity mode={showInput ? "visible" : "hidden"}>
					<input
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						placeholder='gool ma333'
						type='text'
						className='focus:outline-none border-[1.5px] rounded-full py-2 px-3 bg-white w-full border-green-400 mx-auto'
					/>
				</Activity>
			</div>
		</div>
	);
};

export default NavBar;
