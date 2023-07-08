import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "AirBnb",
	description: "Made By Ashmeet Singh Monga",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={nunito.className}>
				<Navbar />
				<RegisterModal />
				{children}
			</body>
		</html>
	);
}
