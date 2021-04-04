import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import Tabs from './Tabs'
import PostCard from "./Posts/PostCard"
import CoursesCard from "./Courses/CoursesCard"
import CoursesForm from "./Courses/CoursesForm"
import GroupsCard from "./Groups/GroupsCard"
import GroupsForm from "./Groups/GroupsForm"

const styles = (theme) => ({
    paper: {
        maxWidth: 1600,
        margin: 'auto',
        overflow: 'hidden',
    },
    // searchBar: {
    //     borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    // },
    // searchInput: {
    //     fontSize: theme.typography.fontSize,
    // },
    // block: {
    //     display: 'block',
    // },
    // addUser: {
    //     marginRight: theme.spacing(1),
    // },
    contentWrapper: {
        margin: '40px 16px',
    },
    course: {
        margin: '20px 15px'
    }
});

function Content(props) {
    const { classes } = props;
    //  const turtles = [
    //      {
    //          name: "Leonardo",
    //          nickName: "Leo",
    //          weapon: "Katana",
    //          imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
    //      },
    //      {
    //          name: "Donatello",
    //          nickName: "Don",
    //          weapon: "Bo staff",
    //          imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5a/Donatello_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
    //      },
    //      {
    //          name: "Michelangelo",
    //          nickName: "Mikey",
    //          weapon: "Nunchucks",
    //          imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f3/Michelangelo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
    //      },
    //      {
    //          name: "Raphael",
    //          nickName: "Raph",
    //          weapon: "Sai",
    //          imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/72/Raphael_%28Teenage_Mutant_Ninja_Tutles%29.jpg"
    //      }
    //  ]
    return (
      <div>
        {/* <Tabs/> */}
         <Paper className={classes.paper}>
            {/* <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <SearchIcon className={classes.block} color="inherit" />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                placeholder="Search by email address or user UID"
                                InputProps={{
                                    disableUnderline: true,
                                    className: classes.searchInput,
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" className={classes.addUser}>
                                Add user
                            </Button>
                            <Tooltip title="Reload">
                                <IconButton>
                                    <RefreshIcon className={classes.block} color="inherit" />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar> */}
            {/* <div className={classes.contentWrapper}>
                <Typography color="textSecondary" align="center">
                    {turtles.map((t,index)=>{
                        return(
                            <PostCard title={t.name} weapon={t.weapon} img={t.imgUrl} nickName={t.nickName}/>
                        )
                    })}
                </Typography>
            </div> */}
            <div>
                <Typography color="inherit" variant="h5" component="h1" style={{margin: 15}}>
                    Courses
                </Typography>
                <CoursesForm />
                <Grid container spacing={24} justify="space-between">
                    <Grid item md={3} className={classes.course}>
                    <CoursesCard />
                    </Grid>
                    <Grid item md={3} className={classes.course}>
                    <CoursesCard />
                    </Grid>
                    <Grid item md={3} className={classes.course}>
                    <CoursesCard />
                    </Grid>
                </Grid>
                <Typography
                    type="title"
                    color="inherit"
                    style={{ borderBottom: '0.1em solid black', padding: '0.5em' }}
                ></Typography>
                <Typography color="inherit" variant="h5" component="h1" style={{margin: 15}}>
                    Groups
                </Typography>
                <GroupsForm />
                <Grid container spacing={24} justify="space-between">
                    <Grid item md={3} className={classes.course}>
                    <GroupsCard />
                    </Grid>
                    <Grid item md={3} className={classes.course}>
                    <GroupsCard />
                    </Grid>
                    <Grid item md={3} className={classes.course}>
                    <GroupsCard />
                    </Grid>
                </Grid>
            </div>
        </Paper>
      </div>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);