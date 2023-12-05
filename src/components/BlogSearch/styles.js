import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '16px',
    position: 'absolute',
    display: 'flex',
    padding: '16px',
    height: '40%',
    width: '40%', 
    left: '30%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // Add other container styles as needed
  },
  tag: {
    margin: '3%',
    width: '90%'

  },
  searchtext: {
    margin : '3%',
    width : '90%'
  },

  searchcontainer: {
    marginBottom: theme.spacing(2), 
  
    
  },
  blogsContainer: {
    margin : '20%'
  },
  // searchbutton : {
  //   margin : '3%',
  //   width : '8%'
  // }
}));