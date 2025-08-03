import React from "react";
import "./CoverImage.css";
import "../assets/css/patterns.css";
import OutlineTheme from "./Themes/OutlineTheme";

const CoverImage = (props) => {
	// hexToRgbA(hex, opacity) {
	// 	var c;
	// 	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
	// 		c = hex.substring(1).split("");
	// 		if (c.length === 3) {
	// 			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
	// 		}
	// 		c = "0x" + c.join("");
	// 		return "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + `,${opacity})`;
	// 	}
	// 	throw new Error("Bad Hex");
	// }

	const { theme } = props;

	const selectTheme = (theme) => {
		switch (theme) {
			case 'outline': return <OutlineTheme config={props} />

			default: return <OutlineTheme config={props} />
		}
	}


	return (
		<div className={`border-2  border-gray-50 md:scale-100 scale-50 hashnode`}>
			{selectTheme(theme)}
		</div>
	);

}

export default CoverImage;
