import { FC, useEffect, useState } from 'react';
import { labelsRef } from '../firebaseSetup';
import { Label, LabelListProps } from '../types/types';
import LabelCard from './LabelCard';

const LabelList: FC<LabelListProps> = ({ selectedGenre }) => {
  const [labels, setLabels] = useState<Label[]>([]);

  useEffect(() => {
    labelsRef.on('value', (snapshot) => {
      let allLabels: Label[] = [];
      snapshot.forEach((snap) => {
        allLabels.push(snap.val());
      });
      setLabels(allLabels);
    });
  }, []);

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
