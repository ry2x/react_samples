import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Link from 'next/link';

const index = () => {
  return (
    <div>
      <h3>Hello World</h3>
      <Link href='/tree/selectTree'>
        <AccountTreeIcon style={{ verticalAlign: 'bottom' }} />
        Select Tree
      </Link>
    </div>
  );
};

export default index;
