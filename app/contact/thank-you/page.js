import ThankYouPage from "@/components/ThankYouPage";

export const metadata = {
	title: "Thank You | JW Security",
	description:
		"Thank you for contacting JW Security. Your enquiry has been received and we will be in touch shortly.",
	alternates: {
		canonical: "https://jwsecurity.co.uk/contact/thank-you",
	},
	robots: {
		index: false,
		follow: false,
	},
};

export default function ThankYouRoute() {
	return <ThankYouPage />;
}
