let idCounters = {};

export const getId = (prefix = "key") => {
  if (!idCounters[prefix]) {
    idCounters[prefix] = 0;
  }
  idCounters[prefix] += 1;
  return `${prefix}_${idCounters[prefix]}`;
};
