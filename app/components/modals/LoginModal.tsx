"use client";

import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../Button";
import Modal from "./Modal";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import useLoginModal from "@/app/hooks/useLoginModal";

const LoginModal = () => {
	const loginModal = useLoginModal();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);
		signIn("credentials", { ...data });
	};

	const bodyContent = (
		<div className='flex flex-col gap-4'>
			<Heading title='Welcome Back' subtitle='Login to your account!' />
			<Input
				id='email'
				label='Email'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id='password'
				label='Password'
				type='password'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
		</div>
	);

	const footerContent = (
		<div className='flex flex-col gap-4 mt-3'>
			<hr />
			<Button outline label='Continue with Google' icon={FcGoogle} onClick={() => {}} />
			<Button outline label='Continue with Github' icon={AiFillGithub} onClick={() => {}} />
			<div className=' text-neutral-500 text-center mt-4 font-light '>
				<p>
					Already have an account?
					<span onClick={() => {}} className=' text-neutral-800 cursor-pointer hover:underline '>
						{" "}
						Log in
					</span>
				</p>
			</div>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={loginModal.isOpen}
			title='Login'
			actionLabel='Continue'
			onClose={loginModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default LoginModal;
