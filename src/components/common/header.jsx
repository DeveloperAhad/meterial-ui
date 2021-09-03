import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  buttonNavigation: {
      background: 'transparent',
  },
  buttonIcon: {
    color: '#ffffffc4',
    
  }
}));

export default function SearchAppBar({searchNewsHandler}) {
  const classes = useStyles();

  const searchInputHandler = (e) => {
    if(e.code === "Enter") {
      searchNewsHandler(e.target.value);
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Newes
          </Typography>
          <BottomNavigation showLabels className={classes.buttonNavigation}>
                <BottomNavigationAction className={classes.buttonIcon} label="Entertainment" onClick={() => searchNewsHandler("Entertainment")} icon={<MovieFilterIcon />} />
                <BottomNavigationAction className={classes.buttonIcon} label="Sports" onClick={() => searchNewsHandler("Sports")} icon={<SportsSoccerIcon />} />
                <BottomNavigationAction  className={classes.buttonIcon} label="Lifestyle" onClick={() => searchNewsHandler("Lifestyle")} icon={<BeachAccessIcon/>} />
                <BottomNavigationAction  className={classes.buttonIcon} label="Science" onClick={() => searchNewsHandler("Science")} icon={<AcUnitIcon/>} />
           </BottomNavigation>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onKeyUp={searchInputHandler}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
