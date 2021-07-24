export function songIsUnique(list, newSong) {
  return !list.data.some((song) => song.id === newSong.id);
}
