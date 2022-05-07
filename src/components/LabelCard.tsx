import { FC, ReactElement } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { LabelCardProps } from '../types/types';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import { Link, Box } from '@mui/material';

const LabelCard: FC<LabelCardProps> = ({ label }): ReactElement => {
  const { genres } = label;

  const displayLabelGenres = (genres: string[]) => {
    return genres.map((genre: string) => {
      return <>{genre} - </>;
    });
  };

  return (
    <Card sx={{ mb: 1.5, minWidth: 275 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
            {label.displayName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <Link
              href={`${label.email.includes('@') ? 'mailto:' : ''}${label.email}`}
              target="blank">
              {label.email.includes('@') && <EmailIcon color="primary" />}
              {!label.email.includes('@') && <LanguageIcon color="primary" />}
            </Link>
          </Typography>
        </Box>
        <Typography variant="body2">Genres:</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {displayLabelGenres(genres)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LabelCard;
