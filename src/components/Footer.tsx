import { useTheme } from "next-themes";
import Link from "next/link";
import { Expire } from "./ui/Expire";

interface Props {}

export default function Footer({}: Props) {
	const { theme, setTheme } = useTheme();
	
	return (
		<footer>
			<div className="bg-light-200  dark:bg-dark-400 font-inter">
				<div className="flex justify-center">
					<div className="flex flex-col lg:flex-row space-x-0 lg:space-x-72 space-y-4 lg:space-y-0 p-14 items-center">
						<div className="flex items-center space-x-4">
							<Link href="/">
								<img
									src={"/img/memer.png"}
									alt="Logo"
									width="100"
								/>
							</Link>
							<div className="flex flex-col -space-y-1">
								<h2 className="text-dank-300 dark:text-light-200 text-2xl font-bold font-montserrat">
									DANK MEMER
								</h2>
								<span className="text-md text-gray-400">
									Copyright © {new Date().getFullYear()} Hunusual
								</span>
								<span data-ccpa-link="1"></span>
							</div>
						</div>
						<div className="flex space-x-6 lg:space-x-12">
							<div className="flex flex-col space-y-0">
				
								<Link href="/commands">
									<span className="text-dark-100 dark:text-gray-300 hover:text-dank-200 dark:hover:text-white cursor-pointer">
										Commands
									</span>
								</Link>
								<Link href="https://hunusualblog.netlify.app">
									<span className="text-dark-100 dark:text-gray-300 hover:text-dank-200 dark:hover:text-white cursor-pointer">
										Our blog
									</span>
								</Link>
							</div>
							<div className="flex flex-col">
					
								<Link href="/reports">
									<span className="text-dark-100 dark:text-gray-300 hover:text-dank-200 dark:hover:text-white cursor-pointer">
										Reports
									</span>
								</Link>
								<Link href="/appeals">
									<span className="text-dark-100 dark:text-gray-300 hover:text-dank-200 dark:hover:text-white cursor-pointer">
										Appeals
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
