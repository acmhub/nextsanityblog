export default function Banner() {
	return (
		<div className="container flex flex-col lg:flex-row lg:justify-between lg:items-center lg:space-x-5 mb-10">
			<div>
				<h1 className="text-6xl">Dev's Blog</h1>
				<h2 className="mt-5">
					Welcome to{" "}
					<span className="underline decoration-4 decoration-[#F7AB0A]">
						Every Developers
					</span>{" "}
					favourite blog.
				</h2>
			</div>

			<p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
				New product features | The latest in technology | The weekly
				debugging nightmares & more!
			</p>
		</div>
	);
}
