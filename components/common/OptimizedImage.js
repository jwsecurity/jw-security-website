import React, { useState, useRef, useEffect } from "react";
import { Box, Skeleton } from "@mui/material";

const OptimizedImage = ({
	src,
	alt,
	placeholder = "/images/placeholder.webp",
	sx = {},
	loading = "lazy",
	threshold = 0.1,
	...props
}) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isInView, setIsInView] = useState(false);
	const [error, setError] = useState(false);
	const imgRef = useRef(null);

	// Intersection Observer for lazy loading
	useEffect(() => {
		if (loading === "eager") {
			setIsInView(true);
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsInView(true);
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold,
				rootMargin: "50px 0px",
			},
		);

		const currentRef = imgRef.current;
		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [loading, threshold]);

	const handleLoad = () => {
		setIsLoaded(true);
	};

	const handleError = () => {
		setError(true);
		setIsLoaded(true);
	};

	return (
		<Box
			ref={imgRef}
			sx={{
				position: "relative",
				overflow: "hidden",
				...sx,
			}}
			{...props}>
			{!isLoaded && (
				<Skeleton
					variant="rectangular"
					width="100%"
					height="100%"
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
					}}
				/>
			)}

			{isInView && (
				<Box
					component="img"
					src={error ? placeholder : src}
					alt={alt}
					onLoad={handleLoad}
					onError={handleError}
					sx={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						transition: "opacity 0.3s ease",
						opacity: isLoaded ? 1 : 0,
						...sx,
					}}
				/>
			)}
		</Box>
	);
};

export default OptimizedImage;
