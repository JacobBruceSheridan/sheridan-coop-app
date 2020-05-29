import React, { useState, useEffect } from 'react';
import './styles/CoopTable.css';
import * as firebase from 'firebase';

export default function CoopTable({ jobs }) {


    return (
        <section className="section">
            <div className="container table-wrapper">
                <table className="table" align="center">
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th>Work Term</th>
                            <th>Pay</th>
                        </tr>
                    </thead>

                    <tbody>
                        {jobs.map(job => (
                            <tr>
                                <td>{job.job_title}</td>
                                <td>{job.company}</td>
                                <td>{job.location}</td>
                                <td>{job.term}</td>
                                <td>${job.pay}/hr</td>
                            </tr>
                        ))}
                    </tbody>

                    {/* {% for job in jobs %}
                    <tr>
                        <td>{{ job.title }}</td>
                        <td>{{ job.company }}</td>
                        <td>{{ job.location }}</td>
                        <td>{{ job.term }}</td>
                        <td>${{ job.pay }}/hr</td>
                        <!-- <input type="hidden" name="job_id" id="job_id" value="{{job.job_id}}"> -->
                        <td onclick="window.location.replace('delete_job/{{job.job_id}}');"> <i
                                className="fas fa-trash trash-can"></i> </td>
                    </tr>
                    {% endfor %} */}

                </table>
            </div>
        </section>
    )
}
