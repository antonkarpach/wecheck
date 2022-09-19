const getRandomArbitrary = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const delay = (id: number) => {
  return new Promise((res, rej) => setTimeout(id ? res : rej, getRandomArbitrary(12000, 30000), id));
};

export const mockFetch = (id: number) => {
  return delay(id);
};
