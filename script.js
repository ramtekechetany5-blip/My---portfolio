
// particles
tsParticles.load("tsparticles", {
  fullScreen: { enable: true, zIndex: -1 },
  particles: {
    number: { value: 50 },
    color: { value: "#38bdf8" },
    links: {
      enable: true,
      color: "#38bdf8"
    },
    move: {
      enable: true,
      speed: 1
    },
    size: { value: 2 }
  }
});

// smooth console test
console.log("Advanced Portfolio Loaded");
