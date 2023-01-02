import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="container flex items-center justify-between space-x-2 font-bold px-10 py-5">
			<div className="flex items-center space-x-2">
				<Link href="/">
					<Image
						src="vercel.svg"
						alt="Logo"
						width={50}
						height={50}
						className="object-contain"
					/>
				</Link>
			</div>

			<div>
				<Link
					href="https://github.com/acmhub"
					target="_blank"
					rel="noopener noreferrer"
					className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
				>
					Check my Other Projects
				</Link>
			</div>
		</header>
	);
}
