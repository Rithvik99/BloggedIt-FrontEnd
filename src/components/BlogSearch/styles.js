import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
  },
  tag: {
    margin: theme.spacing(1),
    width: '90%',
    maxWidth: 400, 
  },
  searchtext: {
    margin: theme.spacing(1),
    width: '90%',
    maxWidth: 400, 
  },
  blogsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
}));