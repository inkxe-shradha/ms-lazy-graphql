export const generateRandomLat = () => {
  const latLang = [
    {
      latitude: 12.303202,
      longitude: -129.92392,
    },
    {
      latitude: 19382.303202,
      longitude: -29399.92392,
    },
    {
      latitude: 2929.303202,
      longitude: -29238.92392,
    },
    {
      latitude: 122829.303202,
      longitude: 29238.92392,
    },
    {
      latitude: 2929.303202,
      longitude: 29329.92392,
    },
    {
      latitude: 9392.303202,
      longitude: 2829.92392,
    },
    {
      latitude: 9439.303202,
      longitude: -2382.92392,
    },
    {
      latitude: 329209.303202,
      longitude: 233728.92392,
    },
    {
      latitude: -128128.303202,
      longitude: -12828.92392,
    },
    {
      latitude: 993392.303202,
      longitude: 8299.92392,
    },
  ];
  return latLang[Math.floor(Math.random() * 10)];
};
