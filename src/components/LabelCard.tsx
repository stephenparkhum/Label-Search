import { FC, ReactElement } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { LabelCardProps } from '../types/types';
import { Link, Box } from '@mui/material';

// Icons
import EmailIcon from '@mui/icons-material/Email';
import CheckIcon from '@mui/icons-material/Check';
import LanguageIcon from '@mui/icons-material/Language';
import CancelIcon from '@mui/icons-material/Cancel';

const LabelCard: FC<LabelCardProps> = ({ label }): ReactElement => {
  const { genres } = label;
  const mGap = 1.5;

  const displayLabelGenres = (genres: string[]) => {
    return genres.map((genre: string) => {
      return <>{genre} - </>;
    });
  };

  return (
    <Card sx={{ mb: mGap, minWidth: 275 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: mGap }}>
          <Typography sx={{ fontSize: 22 }} color="text.primary" gutterBottom>
            {label.displayName}
          </Typography>
          <Typography color="text.secondary">
            <Link
              href={`${label.email.includes('@') ? 'mailto:' : ''}${label.email}`}
              target="blank">
              {label.email.includes('@') && <EmailIcon color="primary" />}
              {!label.email.includes('@') && <LanguageIcon color="primary" />}
            </Link>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" component="p">
            Accepting Demos?
          </Typography>
          {!label.accepting && <CancelIcon sx={{ ml: mGap }} color="error" />}
          {label.accepting && <CheckIcon sx={{ ml: mGap }} color="success" />}
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">Genres:</Typography>
          <Typography sx={{ mb: mGap }} color="text.secondary">
            {displayLabelGenres(genres)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LabelCard;
