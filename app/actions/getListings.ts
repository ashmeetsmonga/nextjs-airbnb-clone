import prisma from "@/app/libs/prismadb";

export default async function getListings() {
	try {
		const listings = prisma.listing.findMany({ orderBy: { createdAt: "desc" } });
		return listings;
	} catch (e: any) {
		throw new Error(e);
	}
}
