import { Home } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';

import { useState } from 'react';
import SelectTree from '@/components/treeSelect';
import { data } from '@/constants/data';
import style from '@/styles/Home.module.css';

const Index = () => {
  const initId = '1';
  const [selectedId, setSelectedId] = useState<string>(initId);
  return (
    <Container>
      <Grid container>
        <Grid xs={12} item>
          <Card className={style.title}>
            <h2>
              <Link href='/' style={{ color: 'black' }}>
                <Home className={style.inLineIcons} />
                Home
              </Link>
            </h2>
          </Card>
        </Grid>
        <Grid xs={12} item>
          <br />
        </Grid>
        <Grid xs={6} item>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                SelectTrees
              </Typography>
              <Typography variant='h5' component='div'>
                Trees In The SelectBox
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                Slected Id is :{selectedId}
              </Typography>
              <SelectTree data={data} initId={initId} onChange={(id) => setSelectedId(id)} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;
