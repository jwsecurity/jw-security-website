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

		const container = containerRef.current;
		return () => {
			if (container) {
				container.innerHTML = "";
			}
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
