import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { material } from 'components/material-ui'
import { Button }  from 'components/Button'


export default function Admin(props) {
  const classes = material.useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Teko App
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Change Password
            </Link>
          </nav>
          < Button.LogoutButton {...props}  />
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Hello
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Nguyen Duy Chien
        </Typography>
      </Container>
      {/* End hero unit */}
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {material.footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <material.MadeWithLove />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

