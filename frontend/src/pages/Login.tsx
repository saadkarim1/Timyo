import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link } from "react-router";
import type { loginProps } from "../model/login";
import authenticationService from "../services/authentication";

const Login = () => {
	const [show, setShow] = useState<boolean>(false);
	const [formData, setFormData] = useState<loginProps>({
		email: "",
		password: "",
		password_confirmation: "",
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
		const res = await authenticationService.login({
			...formData,
			password_confirmation: formData.password,
		});
		if (res.status === 200) {
			console.log(res);
			setFormData({
				email: "",
				password: "",
				password_confirmation: "",
			});
		}
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
						value={formData.email}
						placeholder='m@example.com'
						type='text'
						className='focus:outline-none block border-[1.5px] rounded-full py-1.5 px-3 w-full'
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
					/>
					<div className=' items-center flex border-[1.5px] rounded-full pr-2'>
						<input
							value={formData.password}
							placeholder='password'
							type={show ? "text" : "password"}
							className='focus:outline-none rounded-full py-1.5 px-3 w-full'
							onChange={(e) =>
								setFormData({ ...formData, password: e.target.value })
							}
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
						Login
					</button>
				</div>
				<p className='my-2'>
					Not a member?{" "}
					<Link to={"/register"} className='text-green-500'>
						Register now
					</Link>
				</p>
			</form>
			<div className='w-[50%] bg-green-100 rounded-4xl'>
				<img src='/src/assets/picker.svg' alt='' />
			</div>
		</section>
	);
};

export default Login;
