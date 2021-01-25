import icon from "./simple-edge.svg";

export default class ObjectModelPrimitive {
	static getPrimitiveInfo() {
		return {
			title: "Связь",
			name: "SimpleEdge",
			groups: ["Common", "Edge"],
			requirements: ["yfiles.js"],
			icon,
		};
	}

	constructor(yFiles) {
		this.yfiles = yFiles.default;
	}

	create() {
		const instance = new this.yfiles.SimpleEdge();
		instance.style = new this.yfiles.PolylineEdgeStyle();
		return instance;
	}
}
