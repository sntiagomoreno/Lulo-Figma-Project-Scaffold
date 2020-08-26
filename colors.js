const Colors = {
    white: {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 1, g: 1, b: 1 }
    },
    lime: {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0.9019607901573181, g: 1, b: 0 }
    },
    prussian: {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0.5098039507865906, g: 0.5921568870544434, b: 0.7176470756530762 },
    },
    surface: {
        type: "GRADIENT_RADIAL",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        gradientStops: [
            {
                color: { r: 0.14210528135299683, g: 0.1736842393875122, b: 0.25789472460746765, a: 1 },
                position: 0
            },
            {
                color: { r: 0.10588235408067703, g: 0.12941177189350128, b: 0.1921568661928177, a: 1 },
                position: 1
            }
        ],
        gradientTransform: [
            [-4.798151209683965e-9, 0.621745765209198, 0.5],
            [-0.37419557571411133, -1.3576851642937982e-8, 0.6865988969802856]
        ]
    }
};
export default Colors;
