import './globals.css';
import { Josefin_Sans, Source_Serif_Pro } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import AuthContext from '@/context/AuthContext';
import SWRConfigContext from '@/context/SWRConfigContext';

const sourceSerifPro = Source_Serif_Pro({
	weight: ['200', '300', '400', '600', '700', '900'],
	subsets: ['latin'],
	variable: '--font-source-serif-pro',
});
const josefinSans = Josefin_Sans({
	subsets: ['latin'],
	variable: '--font-josefin',
});

export const metadata = {
	title: 'My Blog',
	description: 'Generated by create next app',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${josefinSans.variable} ${sourceSerifPro.variable}`}
		>
			<body>
				<AuthContext>
					<SWRConfigContext>
						<Header />
						<main className="max-w-5xl w-full mx-auto">{children}</main>
						<Footer />
					</SWRConfigContext>
				</AuthContext>
			</body>
		</html>
	);
}
