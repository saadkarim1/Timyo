import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link } from "react-router";
import authenticationService from "../services/authentication";
import type { loginProps } from "../model/login";

const Register = () => {
	const [show, setShow] = useState<boolean>(false);
	const [formData, setFormData] = useState<loginProps>({
		name: "",
		email: "",
		password: "",
		password_confirmation: "",
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const res = await authenticationService.register({
			...formData,
			password_confirmation: formData.password,
		});

		console.log(res);
	};
	return (
		<section className='h-screen w-screen  bg-[#f1f1f1] flex items-center p-6'>
			<form
				onSubmit={handleSubmit}
				className='w-[50%] h-full flex items-center justify-center flex-col space-y-4'
			>
				<h1 className='font-semibold text-4xl'>Welcome To Timoy</h1>
				<p className='text-center font-medium text-slate-500 w-[70%]'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
					enim eum quos asperiores
				</p>
				<div className=' w-[50%] space-y-3'>
					<input
						value={formData.name}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
						placeholder='name'
						type='text'
						className='focus:outline-none block border-[1.5px] rounded-full py-1.5 px-3 w-full'
					/>
					<input
						value={formData.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
						placeholder='m@example.com'
						type='text'
						className='focus:outline-none block border-[1.5px] rounded-full py-1.5 px-3 w-full'
					/>
					<div className=' items-center flex border-[1.5px] rounded-full pr-2'>
						<input
							value={formData.password}
							onChange={(e) =>
								setFormData({ ...formData, password: e.target.value })
							}
							placeholder='password'
							type={show ? "text" : "password"}
							className='focus:outline-none rounded-full py-1.5 px-3 w-full'
						/>
						{show ? (
							<LuEyeOff
								className='text-2xl cursor-pointer'
								onClick={() => setShow((prev) => !prev)}
							/>
						) : (
							<LuEye
								className='text-2xl cursor-pointer'
								onClick={() => setShow((prev) => !prev)}
							/>
						)}
					</div>
					<button
						type='submit'
						className='bg-black rounded-full w-full p-2 cursor-pointer text-white font-medium'
					>
						Register
					</button>
				</div>
				<p className='my-2'>
					Already have an account?{" "}
					<Link to={"/login"} className='text-green-500'>
						Login
					</Link>
				</p>
			</form>
			<div className='w-[50%] bg-green-100 rounded-4xl'>
				<img src='/src/assets/picker.svg' alt='' />
			</div>
		</section>
	);
};

export default Register;
