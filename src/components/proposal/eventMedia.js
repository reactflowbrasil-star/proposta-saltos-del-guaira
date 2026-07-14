const asset = (name) => `/assets/evento/${name}`;

const allEventPhotos = Array.from(
  { length: 41 },
  (_, index) => asset(`foto-${String(index + 1).padStart(2, "0")}.jpeg`),
);

const barbecuePhotos = new Set([
  asset("foto-13.jpeg"),
  asset("foto-14.jpeg"),
  asset("foto-26.jpeg"),
]);

export const eventPhotos = allEventPhotos.filter((photo) => !barbecuePhotos.has(photo));

export const eventVideos = Array.from(
  { length: 4 },
  (_, index) => asset(`video-${String(index + 1).padStart(2, "0")}.mp4`),
);

export const eventMedia = {
  hero: "/assets/hero-patrocinadores.jpeg",
  eventHighlight: allEventPhotos[27],
  networking: allEventPhotos[24],
  stand: allEventPhotos[14],
  crowd: allEventPhotos[34],
  leader: "/assets/publico-evento.jpeg",
  cocktail: "/assets/coquetel.jpg",
  partnership: allEventPhotos[37],
  layoutFront: "/assets/maquetes/maquete-frontal.png",
  layoutPanoramic: "/assets/maquetes/maquete-panoramica.png",
  layoutPerspective: "/assets/maquetes/maquete-perspectiva.png",
};
