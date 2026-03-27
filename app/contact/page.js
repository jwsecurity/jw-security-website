import ContactPage from "@/components/ContactPage";

export const metadata = {
	title: "Contact Us | JW Security",
	description:
		"Get in touch with JW Security for locksmith and security services in London and Surrey.",
};

const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	"mainEntity": [
		{
			"@type": "Question",
			"name": "How do I get a price quote for your services?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text":
					"You can get a free, no-obligation price quote by contacting us directly. We offer bespoke solutions, so every project begins with a free security check and insurance schedule review to understand your specific needs. This allows us to provide an accurate estimate. Call us or use the contact form on our website.",
			},
		},
		{
			"@type": "Question",
			"name":
				"Can I become a regular customer or set up a maintenance contract?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text":
					"Yes, we value long-term relationships with our clients. We work with many repeat customers, including residential properties, businesses, and managing agents. We can discuss regular maintenance schedules or ongoing security service agreements tailored to your requirements.",
			},
		},
		{
			"@type": "Question",
			"name": "What areas do you cover?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text":
					"JW Security is based in Wandsworth and our mobile service covers the whole of London as well as Surrey. If you're unsure whether we cover your specific area, please don't hesitate to contact us.",
			},
		},
		{
			"@type": "Question",
			"name": "Do you offer emergency call-out services?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text":
					"Yes, we provide a 24/7 emergency call-out service for urgent issues such as lockouts, burglary repairs, or critical security system failures. Our team aims to respond quickly to ensure your property is secured.",
			},
		},
		{
			"@type": "Question",
			"name": "How long has JW Security been in business?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text":
					"JW Security (previously known as 1st Call Security) was established in 1991. We have over 30 years of experience in providing locksmith and security related services to South London and Surrey.",
			},
		},
	],
};

export default function Contact() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(faqSchema),
				}}
			/>

			<ContactPage />
		</>
	);
}
