import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Home from '@mui/icons-material/Home';
import { Card, Container, Grid } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import HomeCard from '../components/HomeCard';
import style from '@/styles/Home.module.css';

const Index = () => {
  const router = useRouter();
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
        <Grid xs={2}>
          <HomeCard
            HeadDiscription={'Do you want to select tree node?'}
            Title={'SelectTree'}
            SubTitle={'Selectable Tree'}
            main={'click on the box, popover will be shown with selectable and expandable tree.'}
            ButtonLabel={'Look'}
            ButtonAction={() => router.push('/tree/selectTree')}
            TitleIcon={<AccountTreeIcon className={style.inLineIcons} />}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;
