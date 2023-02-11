import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { ReactElement } from 'react';

type HomeCardProps = {
  HeadDiscription: string;
  TitleIcon: ReactElement<any, any>;
  Title: string;
  SubTitle: string;
  main: string;
  ButtonLabel: string;
  ButtonAction: () => void;
};

const HomeCard = (props: HomeCardProps) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {props.HeadDiscription}
        </Typography>
        <Typography variant='h5' component='div'>
          {props.TitleIcon}
          {props.Title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {props.SubTitle}
        </Typography>
        <Typography variant='body2'>{props.main}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={props.ButtonAction}>
          {props.ButtonLabel}
        </Button>
      </CardActions>
    </Card>
  );
};

export default HomeCard;
