export function hashSeparator(hash, index) {
  const hashFragment = hash.substring(index);
  const params = hashFragment.split("&");
  let keyValueParams = {};

  params.forEach((param) => {
    const value = param.split("=");
    keyValueParams[value[0]] = value[1];
  });

  return keyValueParams;
}

export function msToMinutesConverter(ms) {
  const minutes = ms * 0.0000166667;
  return minutes.toFixed(2);
}
