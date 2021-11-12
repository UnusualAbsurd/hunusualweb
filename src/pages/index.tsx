import { useEffect, useState } from "react";
import BottomCTA from "../components/BottomCTA";
import Container from "../components/ui/Container";
import FancyButton from "../components/ui/FancyButton";
import { QUICK_INFO } from "../constants";
import clsx from "clsx";
import { GetServerSideProps } from "next";
import { withSession } from "../util/session";
import { unauthenticatedRoute } from "../util/redirects";
import { PageProps } from "../types";
import { useRouter } from "next/router";
import createAd from "../util/createAd";

interface TriangleProps {
	scale: number;
	translate: [number, number];
	rotate: number;
}

function Triangle({ scale, translate, rotate }: TriangleProps) {
	return (
		<g
			transform={`scale(${scale}) translate(${translate.join(
				","
			)}) rotate(${rotate})`}
		>
			<polygon
				stroke="#14763d"
				strokeWidth="1.5px"
				style={{ filter: "drop-shadow(0px 0px 18px #14763d)" }}
				points="62.5,15 12.5,100 112.5,100"
				className="fill-current text-light-200 dark:text-dark-300"
			/>
		</g>
	);
}

export default function HomePage({ user }: PageProps) {
	const router = useRouter();

	const [perspective, setPerspective] = useState<[number, number]>([0, 0]);
	const [mobile, setMobile] = useState(false);

	const handleResize = () => {
		setMobile(document.documentElement.clientWidth < 900);
	};

	useEffect(() => {
		if (router.query.r) {
			location.replace("/");
		}

		handleResize();

		window.addEventListener("resize", () => {
			handleResize();
		});

		createAd(
			"nitropay-home-top",
			{
				sizes: [
					[320, 50],
					[300, 50],
					[300, 250],
				],
				renderVisibleOnly: true,
			},
			"mobile"
		);

		createAd(
			"nitropay-home-bottom",
			{
				sizes: [
					[728, 90],
					[970, 90],
				],
				renderVisibleOnly: true,
			},
			"desktop"
		);
		createAd(
			"nitropay-home-bottom",
			{
				sizes: [
					[320, 50],
					[300, 50],
					[300, 250],
				],
				renderVisibleOnly: true,
			},
			"mobile"
		);
	}, []);

	return (
		<Container title="Home" user={user}>
			<div
				className="flex flex-col justify-center items-center mt-32 lg:mt-72"
				onMouseMove={(e) => setPerspective([e.pageX, e.pageY])}
			>
				<div className="flex flex-col items-center space-y-8">
					<div className="flex flex-col items-center max-w-3xl text-center">
						<h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-dank-300 dark:text-white">
							HUNUSUAL
						</h1>
						<p className="text-lg md:text-2xl max-w-lg md:max-w-xl text-center text-light-600 dark:text-gray-400">
							Utilize your discord server easier!
						</p>
					</div>
					<FancyButton
						text={"INVITE NOW"}
						link="https://discord.com/api/oauth2/authorize?client_id=906898913498382396&permissions=536857803991&scope=bot%20applications.commandsl"
					/>
				</div>
				<div
					className="absolute hidden lg:block z-[-99]"
					style={{
						transform: `translate(${
							(perspective[0] * -1) / 100
						}px, ${(perspective[1] * -1) / 100}px)`,
					}}
				>
					<svg height="500" width="1100">
						<Triangle
							scale={1.4}
							translate={[150, 150]}
							rotate={180}
						/>
						<Triangle
							scale={0.7}
							translate={[340, 400]}
							rotate={140}
						/>
						<Triangle
							scale={0.6}
							translate={[1200, 30]}
							rotate={85}
						/>
						<Triangle
							scale={1}
							translate={[900, 200]}
							rotate={20}
						/>
					</svg>
				</div>
				<div id="nitropay-home-top" className="nitropay" />
			</div>
	
		</Container>
	);
}

export const getServerSideProps: GetServerSideProps =
	withSession(unauthenticatedRoute);
