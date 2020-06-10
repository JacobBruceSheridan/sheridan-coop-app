import React, { useState } from 'react';
import ConfirmDelete from './ConfirmDelete';



export default function JobRecord({ job, deleteJob }) {
    const [open, setOpen] = React.useState(false);
    const handleDelete = () => {
        setOpen(true);
    }

    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <tr key={job.id}>
            <td>{job.job_title}</td>
            <td>{job.company}</td>
            <td>{job.location}</td>
            <td>{job.term}</td>
            <td>{job.pay.toUpperCase() === 'TBD' ? job.pay : `$${job.pay}/hr`}</td>
            <span><i style={{ color: 'red' }} onClick={handleDelete} id={job.id} className="fas fa-trash icon"></i></span>
            <ConfirmDelete open={open} onClose={handleClose} jobId={job.id} deleteJob={deleteJob} />
        </tr>
    )
}
