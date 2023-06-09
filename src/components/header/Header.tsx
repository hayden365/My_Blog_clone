"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import NavFirstRow from "./NavFirstRow";
import TopNavContainer from "./TopNavContainer";
import NavContainer from "./NavContainer";

export default function Header() {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<>
			<div ref={ref}>
				<TopNavContainer show={!isInView} />
				<header className="max-w-5xl flex flex-col mx-auto">
					<NavFirstRow />
					<NavContainer />
				</header>
			</div>
		</>
	);
}
