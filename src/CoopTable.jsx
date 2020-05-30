import React, { useReducer } from 'react';
import './styles/CoopTable.css';

export default function CoopTable({ jobs, sortJobs, selectedSort }) {

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
                        {jobs.map(job => (
                            <tr key={job.id}>
                                <td>{job.job_title}</td>
                                <td>{job.company}</td>
                                <td>{job.location}</td>
                                <td>{job.term}</td>
                                <td>${job.pay}/hr</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
