import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import CoursesCard from "./Courses/CoursesCard"
import CoursesForm from "./Courses/CoursesForm"
import GroupsCard from "./Groups/GroupsCard"
import GroupsForm from "./Groups/GroupsForm"
import axios from "axios";

const styles = (theme) => ({
    paper: {
        maxWidth: 1600,
        margin: 'auto',
        overflow: 'hidden',
    },
    contentWrapper: {
        margin: '40px 16px',
    },
    course: {
        margin: '20px 15px'
    }
});

function Content(props) {
    const {classes} = props;
    const [isLoadingCourses, setLoadingCourses] = React.useState(true);
    const [isLoadingGroup, setLoadingGroup] = React.useState(true);
    const [courseData, setCourseData] = React.useState([]);
    const [groupData, setGroupData] = React.useState([]);

    axios.defaults.baseURL = 'http://localhost:33500/'
    axios.defaults.withCredentials = true;
    if (isLoadingCourses) {
        axios.get('/all-courses').then(function (res) {
            let courseGrids = [];
            res.data.forEach(function (item) {
                let card = React.createElement(CoursesCard, {
                    courseName: item.name,
                    courseUid: item.uid,
                    courseLecturer: item.lecturer
                });
                let grid = React.createElement(Grid, {item, className: classes.course, md: 3}, card);
                courseGrids.push(grid);
            });
            setCourseData(courseGrids);
            setLoadingCourses(false);
        });
    }
    if (isLoadingGroup) {
        axios.get('/all-groups').then(function (res) {
            let grids = [];
            res.data.forEach(function (item) {
                let card = React.createElement(GroupsCard, {
                    groupName: item.name,
                    groupUid: item.uid,
                    groupLecturer: item.lecturer
                });
                let grid = React.createElement(Grid, {item, className: classes.course, md: 3}, card);
                grids.push(grid);
            });
            setGroupData(grids);
            setLoadingGroup(false);
        });
    }

    if (isLoadingCourses || isLoadingGroup) {
        return (
            <div>
                {}
                <Paper className={classes.paper}>
                    {}
                    {}
                    <div>
                        <Typography color="inherit" variant="h5" component="h1" style={{margin: 15}}>
                            Courses
                        </Typography>
                        <CoursesForm/>
                        <Grid container spacing={24} justify="space-between">
                            <Grid item md={3} className={classes.course}>
                                <CoursesCard courseName='Loading...'/>
                            </Grid>
                        </Grid>
                        <Typography
                            type="title"
                            color="inherit"
                            style={{borderBottom: '0.1em solid black', padding: '0.5em'}}
                        >

                        </Typography>
                        <Typography color="inherit" variant="h5" component="h1" style={{margin: 15}}>
                            Groups
                        </Typography>
                        <GroupsForm/>
                        <Grid container spacing={24} justify="space-between">
                            <Grid item md={3} className={classes.course}>
                                <GroupsCard groupName='Loading...'/>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </div>
        );
    }

    return (
        <div>
            {}
            <Paper className={classes.paper}>
                {}
                {}
                <div>
                    <Typography color="inherit" variant="h5" component="h1" style={{margin: 15}}>
                        Courses
                    </Typography>
                    <CoursesForm/>
                    <Grid container spacing={24} justify="space-between">
                        {courseData}
                    </Grid>
                    <Typography
                        type="title"
                        color="inherit"
                        style={{borderBottom: '0.1em solid black', padding: '0.5em'}}
                    >

                    </Typography>
                    <Typography color="inherit" variant="h5" component="h1" style={{margin: 15}}>
                        Groups
                    </Typography>
                    <GroupsForm/>
                    <Grid container spacing={24} justify="space-between">
                        {groupData}
                    </Grid>
                </div>
            </Paper>
        </div>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
    courseName: PropTypes.string,
    courseUid: PropTypes.string
};

export default withStyles(styles)(Content);