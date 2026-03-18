"use client";
import { styled } from "@mui/material/styles";
import { Box, CircularProgress } from "@mui/material";

const LoadingContainer = styled(Box)(() => ({
	display: "flex",
	flexDirection: "column",
	backgroundColor: "#1c2e4a",
	alignItems: "center",
	justifyContent: "center",
	height: "100vh",
	width: "100%",
	position: "fixed",
	top: 0,
	left: 0,
	zIndex: 9999,
}));

const LogoContainer = styled(Box)(({ theme }) => ({
	marginBottom: theme.spacing(3),
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

export default function Loading() {
	return (
		<LoadingContainer>
			<LogoContainer>
				<Box
					component="img"
					src="/images/jw/jw-logo.png"
					alt="JW Security"
					sx={{ height: 60 }}
				/>
			</LogoContainer>
			<CircularProgress
				size={40}
				thickness={4}
				sx={{
					color: "#00c6d7",
					mb: 2,
				}}
			/>
		</LoadingContainer>
	);
}
