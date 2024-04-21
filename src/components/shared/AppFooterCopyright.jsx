function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a

					className=" hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Все права защищены.
				</a>

				<a

					className="text-secondary-dark dark:text-secondary-light font-medium uppercase  hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Мирзаянов
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
