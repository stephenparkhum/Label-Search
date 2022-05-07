import { FC, useEffect } from 'react';
import data from '../data/data';
import { Label, LabelListProps } from '../types/types';
import LabelCard from './LabelCard';

const LabelList: FC<LabelListProps> = ({ selectedGenre }) => {
  const { labels } = data;

  useEffect(() => {}, [selectedGenre]);

  const filterLabels = (labels: Label[], selectedGenre: string) => {
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

  const displayLabels = () => {
    return filterLabels(labels, selectedGenre).map((label: Label) => {
      return <LabelCard key={label.slug} label={label} />;
    });
  };

  return <div>{displayLabels()}</div>;
};

export default LabelList;
