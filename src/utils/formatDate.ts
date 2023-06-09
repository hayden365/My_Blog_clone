export default function formatDate(date: string): string {
	const newDate = new Date(date);
	const options: Intl.DateTimeFormatOptions = {
		month: "long",
		day: "numeric",
		year: "numeric",
	};
	return newDate.toLocaleDateString("en-US", options);
}
