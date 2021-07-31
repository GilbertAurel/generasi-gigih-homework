export function hashSeparator(hash, index) {
  const hashFragment = hash.substring(index);
  const params = hashFragment.split('&');
  const keyValueParams = {};

  params.forEach((param) => {
    const values = param.split('=');
    const name = values[0];
    const value = values[1];
    keyValueParams[name] = value;
  });

  return keyValueParams;
}

export function msToMinutesConverter(ms) {
  const minutes = ms * 0.0000166667;
  return minutes.toFixed(2);
}
