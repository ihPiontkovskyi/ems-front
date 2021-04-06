import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    let description = '';
    let name = '';

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const changeDescription = e => {
        description = e.target.value;
    }

    const changeName = e => {
        name = e.target.value;
    }

    const handleCreate = () => {
        axios.defaults.baseURL = 'https://service-ems.herokuapp.com//'
        axios.defaults.withCredentials = true;
        axios.post('add?userUid='+localStorage.getItem('uid'),
            {
                "description": description,
                "name": name
            }
        ).then();
        setOpen(false);
    }

    return (
        <div>
            <Button variant="outlined" color="secondary" hidden={localStorage.getItem('role') === 'STUDENT'} onClick={handleClickOpen} style={{margin: 20}}>
                Add Course
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create Course</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                       Course creation form
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Name"
                        label="Name"
                        type="text"
                        fullWidth
                        onChange={changeName}
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        onChange={changeDescription}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleCreate} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

