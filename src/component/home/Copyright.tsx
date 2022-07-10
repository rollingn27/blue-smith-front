import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Copyright = (props: any) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Blue Smith
      </Link>{' '}
      {2022}
      {'.'}
    </Typography>
  );
};

export default Copyright;
