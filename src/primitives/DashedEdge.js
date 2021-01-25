import icon from "./dashed-edge.svg";

export default class ObjectModelPrimitive {
	static getPrimitiveInfo() {
		return {
			title: "Связь",
			name: "DashedEdge",
			groups: ["Edge"],
			requirements: ["yfiles.js"],
			icon,
		};
	}

	constructor(yFiles) {
		this.yfiles = yFiles.default;
	}

	create() {
		const instance = new this.yfiles.SimpleEdge();
		instance.style = new this.yfiles.PolylineEdgeStyle({
			stroke: "2px dashed gray",
		});
		return instance;
	}
}
