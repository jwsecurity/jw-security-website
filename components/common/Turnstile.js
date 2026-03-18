"use client";
import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

export default function Turnstile({ onVerify, options = {} }) {
	const containerRef = useRef(null);
	const widgetIdRef = useRef(null);

	useEffect(() => {
		const renderWidget = () => {
			if (window.turnstile && containerRef.current && !widgetIdRef.current) {
				widgetIdRef.current = window.turnstile.render(containerRef.current, {
					sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
					callback: (token) => {
						onVerify(token);
					},
					...options,
				});
			}
		};

		if (window.turnstile) {
			renderWidget();
		} else {
			// If script hasn't loaded yet, wait for it
			const interval = setInterval(() => {
				if (window.turnstile) {
					renderWidget();
					clearInterval(interval);
				}
			}, 100);
			return () => clearInterval(interval);
		}

		return () => {
			if (widgetIdRef.current && window.turnstile) {
				window.turnstile.remove(widgetIdRef.current);
				widgetIdRef.current = null;
			}
		};
	}, [onVerify, options]);

	return (
		<Box
			ref={containerRef}
			sx={{ my: 2, display: "flex", justifyContent: "flex-start" }}
		/>
	);
}
