import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';


export default function SimpleDialog({ open, onClose, jobId, deleteJob }) {

    const confirmDelete = () => {
        deleteJob(jobId);
        onClose()
    }

    return (
        <Dialog aria-labelledby="simple-dialog-title" open={open} style={{ textAlign: 'center' }}>
            <DialogTitle id="simple-dialog-title">Are you sure you want to delete that job?</DialogTitle>
            <div>
                <Button
                    style={{ width: '50%', marginBottom: '0.2rem' }}
                    color="primary"
                    variant="contained"
                    onClick={confirmDelete}
                >Yes!</Button>
            </div>
            <div>
                <Button
                    style={{ width: '50%', marginBottom: '0.2rem' }}
                    color="secondary"
                    variant="contained"
                    onClick={onClose}
                >No!</Button>
            </div>
        </Dialog>
    );
}