import { useEffect, useState } from "react";
import BottomCTA from "../sections/BottomCTA";
import Container from "../ui/Container";
import FancyButton from "../ui/FancyButton";
import styles from "./index.module.scss";
import Quickinfo from "./Quickinfo";

interface TrianagleProps {
	scale: number;
	translate: [number, number];
	rotate: number;
}

function Trianagle({ scale, translate, rotate }: TrianagleProps) {
	return (
		<g
			transform={`scale(${scale}) translate(${translate.join(
				","
			)}) rotate(${rotate})`}
		>
			<polygon
				fill="#0b110c"
				stroke="#14763d"
				strokeWidth="1.5px"
				className={styles["hero-svg-triangle"]}
				points="62.5,15 12.5,100 112.5,100"
			/>
		</g>
	);
}

export function HomePage() {
	const [perspective, setPerspective] = useState<[number, number]>([0, 0]);
	const [mobile, setMobile] = useState(false);

	const handleResize = () => {
		setMobile(document.documentElement.clientWidth < 900);
	};

	useEffect(() => {
		handleResize();

		window.addEventListener("resize", () => {
			handleResize();
		});
	}, []);

	return (
		<Container title="Home">
			<div className={styles["home"]}>
				<div
					className={styles["hero"]}
					onMouseMove={(e) => setPerspective([e.pageX, e.pageY])}
				>
					<div className={styles["hero-text"]}>
						<h1 className={styles["hero-text-title"]}>
							Dank Memer
						</h1>
						<p className={styles["hero-text-slogan"]}>
							Join millions of users around the world in Discord's
							largest fun economic bot.
						</p>
					</div>
					<div className={styles["hero-cta"]}>
						<FancyButton
							text={"INVITE NOW"}
							link="https://invite.dankmemer.lol"
						/>
					</div>

					<div
						className={styles["hero-svg"]}
						style={{
							transform: `translate(${
								(perspective[0] * -1) / 100
							}px, ${(perspective[1] * -1) / 100}px)`,
						}}
					>
						<svg height="500" width="1100">
							<Trianagle
								scale={1.4}
								translate={[150, 150]}
								rotate={180}
							/>
							<Trianagle
								scale={0.7}
								translate={[340, 400]}
								rotate={140}
							/>
							<Trianagle
								scale={0.6}
								translate={[1200, 30]}
								rotate={85}
							/>
							<Trianagle
								scale={1}
								translate={[900, 200]}
								rotate={20}
							/>
						</svg>
					</div>
					{/* TODO */}
					{/* <div id="nitropay-home-top" className="nitropay" /> */}
				</div>
				<Quickinfo mobile={mobile} />
				<BottomCTA />
			</div>
		</Container>
	);
}