type Log = {
	ip: string;
	method: string;
	host: string;
	path: string;
	ua: string;
	date: Date;
	worker: string;
	color: {
		bg: string;
		fg: string;
	};
}

export default Log;