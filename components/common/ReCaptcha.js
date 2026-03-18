"use client";
import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";

export default function ReCaptcha({ onVerify, options = {} }) {
	const containerRef = useRef(null);
	const widgetIdRef = useRef(null);

	const onVerifyRef = useRef(onVerify);
	const optionsRef = useRef(options);

	// Update refs when props change
	useEffect(() => {
		onVerifyRef.current = onVerify;
	}, [onVerify]);

	useEffect(() => {
		optionsRef.current = options;
	}, [options]);

	useEffect(() => {
		const container = containerRef.current;
		let wrapper = null;

		const renderWidget = () => {
			if (
				window.grecaptcha &&
				window.grecaptcha.render &&
				container &&
				widgetIdRef.current === null
			) {
				wrapper = document.createElement("div");
				container.appendChild(wrapper);

				widgetIdRef.current = window.grecaptcha.render(wrapper, {
					sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
					callback: (token) => {
						if (onVerifyRef.current) onVerifyRef.current(token);
					},
					...optionsRef.current,
				});
			}
		};

		if (window.grecaptcha && window.grecaptcha.render) {
			renderWidget();
		} else {
			const interval = setInterval(() => {
				if (window.grecaptcha && window.grecaptcha.render) {
					renderWidget();
					clearInterval(interval);
				}
			}, 100);
			return () => clearInterval(interval);
		}

		return () => {
			if (container && wrapper) {
				try {
					container.removeChild(wrapper);
				} catch (e) {}
			}
			widgetIdRef.current = null;
		};
	}, []);

	return (
		<Box
			ref={containerRef}
			sx={{ my: 2, display: "flex", justifyContent: "flex-start" }}
		/>
	);
}
