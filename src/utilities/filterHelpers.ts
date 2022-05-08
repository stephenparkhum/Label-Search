import { Label } from '../types/types';

export const filterLabels = (labels: Label[], selectedGenre: string) => {
  if (selectedGenre === '' || selectedGenre === 'all') {
    return labels;
  }

  let filteredLabels = [];
  for (let i = 0; i < labels.length; i++) {
    if (labels[i].genres.includes(selectedGenre)) {
      filteredLabels.push(labels[i]);
    }
  }
  return filteredLabels;
};
