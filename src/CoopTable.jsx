import React, { useReducer } from 'react';
import './styles/CoopTable.css';
import JobRecord from './JobRecord';

export default function CoopTable({ jobs, sortJobs, selectedSort, deleteJob }) {

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const sortAndUpdate = e => {
        sortJobs(e);
        forceUpdate();
    }

    const tableHeaders = [
        { id: 1, abbr: 'job_title', htmlValue: 'Job Title' },
        { id: 2, abbr: 'company', htmlValue: 'Company' },
        { id: 3, abbr: 'location', htmlValue: 'Location' },
        { id: 4, abbr: 'term', htmlValue: 'Work Term' },
        { id: 5, abbr: 'pay', htmlValue: 'Pay' },
    ]
    return (
        <section className="section">
            <div className="container table-wrapper">
                <table className="table" align="center">
                    <thead>
                        <tr>
                            {tableHeaders.map(tHead => (
                                <th
                                    key={tHead.id}
                                    abbr={tHead.abbr}
                                    onClick={sortAndUpdate}
                                    className={selectedSort === tHead.abbr ? 'selected' : ''}
                                >
                                    {tHead.htmlValue}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {/* should convert the following into its own component */}
                        {/* When the user hits EDIT, replace component with a form
                                - when the form is saved, edit record from firestore    
                        */}
                        {jobs.map(job => (
                            <JobRecord job={job} deleteJob={deleteJob} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
