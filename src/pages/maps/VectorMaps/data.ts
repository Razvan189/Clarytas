export const worldMapOpts = {
  normalizeFunction: "polynomial",
  zoomOnScroll: false,
  hoverOpacity: 0.7,
  hoverColor: false,
  backgroundColor: "transparent",
  markers: [
    {
      coords: [44.439663, 26.096306],
      name: "Bucharest",
    }

  ],
  markerStyle: {
    initial: {
      r: 9,
      fill: "#3e60d5",
      "fill-opacity": 0.9,
      stroke: "#fff",
      "stroke-width": 7,
      "stroke-opacity": 0.4,
    },

    hover: {
      stroke: "#fff",
      "fill-opacity": 1,
      "stroke-width": 1.5,
    },
  },
  regionStyle: {
    initial: {
      fill: "rgba(145,166,189,.25)",
    },
  },
};

export const usaMapOpts = {
  backgroundColor: "transparent",
  regionStyle: {
    initial: {
      fill: "#3e60d5",
    },
  },
};
export const russiaMapOpts = {
  backgroundColor: "transparent",
  regionStyle: {
    initial: {
      fill: "#6c757d",
    },
  },
};

export const spainMapOpts = {
  backgroundColor: "transparent",
  regionStyle: {
    initial: {
      fill: "#39afd1",
    },
  },
};

export const canadaMapOpts = {
  backgroundColor: "transparent",
  regionStyle: {
    initial: {
      fill: "#ffbc00",
    },
  },
};

export const italyMapOpts = {
  backgroundColor: "transparent",
  regionStyle: {
    initial: {
      fill: "#47ad77",
    },
  },
};

export const iraqMapOpts = {
  backgroundColor: "transparent",
  regionStyle: {
    initial: {
      fill: "#fa5c7c",
    },
  },
};
