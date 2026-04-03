"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function BorealMotionStage({
	children,
}: {
	children: ReactNode;
}) {
	const stageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const stage = stageRef.current;
		if (!stage) return;

		const revealTargets = Array.from(
			stage.querySelectorAll<HTMLElement>("[data-boreal-reveal]"),
		);
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					entry.target.setAttribute(
						"data-boreal-in-view",
						entry.isIntersecting ? "true" : "false",
					);
				}
			},
			{
				threshold: 0.2,
				rootMargin: "0px 0px -10% 0px",
			},
		);

		for (const target of revealTargets) {
			target.classList.add("boreal-reveal");
			observer.observe(target);
		}

		const cleanupFns: Array<() => void> = [];
		const canHover =
			typeof window !== "undefined" &&
			window.matchMedia("(hover: hover) and (pointer: fine)").matches;

		if (canHover) {
			const hoverTargets = Array.from(
				stage.querySelectorAll<HTMLElement>("[data-boreal-hover]"),
			);

			for (const target of hoverTargets) {
				target.classList.add("boreal-hover");

				const onPointerMove = (event: PointerEvent) => {
					const rect = target.getBoundingClientRect();
					const x = (event.clientX - rect.left) / rect.width - 0.5;
					const y = (event.clientY - rect.top) / rect.height - 0.5;
					target.style.setProperty(
						"--boreal-tilt-x",
						`${(-y * 5).toFixed(2)}deg`,
					);
					target.style.setProperty(
						"--boreal-tilt-y",
						`${(x * 7).toFixed(2)}deg`,
					);
					target.style.setProperty("--boreal-lift", "-4px");
				};

				const onPointerEnter = () => {
					target.setAttribute("data-boreal-pointer", "on");
				};

				const onPointerLeave = () => {
					target.setAttribute("data-boreal-pointer", "off");
					target.style.setProperty("--boreal-tilt-x", "0deg");
					target.style.setProperty("--boreal-tilt-y", "0deg");
					target.style.setProperty("--boreal-lift", "0px");
				};

				target.addEventListener("pointermove", onPointerMove);
				target.addEventListener("pointerenter", onPointerEnter);
				target.addEventListener("pointerleave", onPointerLeave);

				cleanupFns.push(() => {
					target.removeEventListener("pointermove", onPointerMove);
					target.removeEventListener("pointerenter", onPointerEnter);
					target.removeEventListener("pointerleave", onPointerLeave);
				});
			}
		}

		return () => {
			observer.disconnect();
			for (const target of revealTargets) {
				target.classList.remove("boreal-reveal");
				target.removeAttribute("data-boreal-in-view");
			}
			for (const cleanup of cleanupFns) cleanup();
		};
	}, []);

	return <div ref={stageRef}>{children}</div>;
}
