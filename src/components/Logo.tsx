import React from "react";

const Logo: React.FC = () => {
	return (
		<div className="flex items-center -mt-3">
			<img src="/favicon.svg" alt="Mehta Finvest Logo" className="h-12 w-12 " />
			<div className="flex flex-col mt-4 ">
				<span className="text-[#58595b] font-heading font-bold text-xl tracking-wide">
					MEHTA
				</span>
				<span className="text-[#58595b] font-heading text-base text-sm tracking-[0.2em] -mt-1">
					FINVEST
				</span>
			</div>
		</div>
	);
};

export default Logo;
