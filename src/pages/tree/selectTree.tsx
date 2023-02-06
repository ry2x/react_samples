import HomeIcon from '@mui/icons-material/Home';
import { Card } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import SelectTree from '@/components/treeSelect';
import { data } from '@/constants/data';

const Index = () => {
  const initId = '1';
  const [selectedId, setSelectedId] = useState<string>(initId);
  return (
    <>
      <br />
      <Link href='/'>
        <HomeIcon style={{ verticalAlign: 'bottom' }} />
        To Home
      </Link>
      <br />
      <Card style={{ textAlign: 'center', width: '30vw', height: '50vh' }}>
        <br />
        <title>SelectTree</title>
        <Card style={{ padding: '-1%' }}>
          <h1>Select Tree</h1>
        </Card>
        <br />
        <h3>selected ID is :{selectedId}</h3>
        <SelectTree data={data} initId={initId} onChange={(id) => setSelectedId(id)} />
      </Card>
    </>
  );
};

export default Index;
