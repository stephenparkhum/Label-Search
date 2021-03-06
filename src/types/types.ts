export interface Genres {
  id: number;
  displayName: string;
  slug: string;
}

export interface Label {
  id: number;
  displayName: string;
  slug: string;
  url: string;
  email: string;
  genres: string[];
  accepting?: boolean;
}

export interface Data {
  genres: Genres[];
  labels: Label[];
}

export interface LabelCardProps {
  key: string;
  label: Label;
}

export interface LabelListProps {
  selectedGenre: string;
}

export interface MainProps {
  selectedGenre: string;
  onClickUpdate(val: any): void;
}

export interface AdminAddLabelProps {
  genres: Genres[];
}

export interface InputFields {
  display: string;
  machineName: string;
}
