"use client";
import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

export default function ReCaptcha({ onVerify, options = {} }) {
	const containerRef = useRef(null);
	const widgetIdRef = useRef(null);

	useEffect(() => {
		const renderWidget = () => {
			if (window.grecaptcha && containerRef.current && widgetIdRef.current === null) {
				widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
					sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
					callback: (token) => {
						onVerify(token);
					},
					...options,
				});
			}
		};

		if (window.grecaptcha && window.grecaptcha.render) {
			renderWidget();
		} else {
			// If script hasn't loaded yet, wait for it
			const interval = setInterval(() => {
				if (window.grecaptcha && window.grecaptcha.render) {
					renderWidget();
					clearInterval(interval);
				}
			}, 100);
			return () => clearInterval(interval);
		}

		return () => {
			// reCAPTCHA doesn't have a direct "remove" like Turnstile in the same way, 
			// but we can at least reset or handle cleanup if needed.
			// Re-rendering will handle it if the component unmounts/remounts.
			widgetIdRef.current = null;
		};
	}, [onVerify, options]);

	return (
		<Box
			ref={containerRef}
			sx={{ my: 2, display: "flex", justifyContent: "flex-start" }}
		/>
	);
}
