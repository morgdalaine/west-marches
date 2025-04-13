import { dieN } from "@/composables/dice";
import { getDetailMagicType, getDetailElement, getDetailOddity } from "./details";
import { getHazardNatural } from "./hazards";
import { getObstacleNatural } from "./obstacles";

export const AREA_UNNATURAL: Array<string> = [
	"magical",
	"magical",
	"magical",
	"magical",
	"magical",
	"magical",
	"planar",
	"divine",
];

export const AREA_NATURAL: Array<string> = [
	"oddity-based",
	"hazard-based",
	"obstacle-based",
	"obstacle-based",
	"hunting/gathering ground of local CREATURE",
	"claimed as territory by local FACTION",
	"difficult terrain (icefield, rocky land, dense forest, etc.)",
	"difficult terrain (icefield, rocky land, dense forest, etc.)",
];

export const getAreaNatural = (index = -1) => {
	const die = index < 0 ? index : dieN(AREA_NATURAL.length);
	const area = AREA_NATURAL.at(die) ?? "";

	if (area === "oddity-based") return `${getDetailOddity()}} ODDITY`;
	if (area === "hazard-based") return `${getHazardNatural()}} HAZARD`;
	if (area === "obstacle-based") return `${getObstacleNatural()} OBSTACLE`;

	return area;
};

export const getArea = (subcatIndex: number, featIndex: number) => {
	let subcategory = "Natural";
	// unnatural
	if (subcatIndex < 1) {
		subcategory = "Unnatural";
		let feature = AREA_UNNATURAL.at(featIndex);

		if (feature === "magical") {
			subcategory += " magical";
			feature = `${getAreaNatural()} [${getDetailMagicType()}]`;
		} else if (feature === "planar") {
			subcategory += " planar";
			feature = `${getAreaNatural()} [${getDetailElement()}]`;
		} else if (feature === "divine") {
			subcategory += " divine";
			feature = `${getAreaNatural()} [attach diety]`;
		}

		return [subcategory, feature];
	}

	// natural
	return [subcategory, getAreaNatural(featIndex)];
};
