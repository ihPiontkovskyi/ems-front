import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PostCard from './Posts/PostCard';
import Button from '@material-ui/core/Button';
import PostForm from './Posts/PostForm'
import TasksForm from './Tasks/TasksForm'
import TasksCard from './Tasks/TasksCard'
import ResultForm from './Tasks/ResultForm'
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const posts = [
       {
           title: "Leonardo",
           nickName: "Leo",
           
       },
       {
           title: "Donatello",
           nickName: "Don",
           
       },
       {
           title: "Michelangelo",
           nickName: "Mikey",
           
       },
       {
           title: "Raphael",
           nickName: "Raph",
           
       }
    ]
  
    const tasks = [
      {
          title: "Task1",
          score: "12/20",
          
      },
      {
          title: "Task2",
          score: "0/15",
          
      },
      {
          title: "Task3",
          score: "7/10",
          
      },
      {
          title: "Task4",
          score: "25/25",
          
      }
   ]
    
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Posts" {...a11yProps(0)} />
          <Tab label="Tasks" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <PostForm/>
        {posts.map((t,index)=>{
            return(
                <PostCard title={t.title} nickName={t.nickName}/>
            )
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box display="flex">
          <TasksForm/>
          <ResultForm />
        </Box>
        {tasks.map((t,index)=>{
            return(
                <TasksCard title={t.title} score={t.score}/>
            )
        })}
      </TabPanel>
    </div>
  );
}