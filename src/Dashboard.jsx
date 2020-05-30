import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import './styles/Dashboard.css';
import Header from './Header';
import Form from './Form';
import CoopTable from './CoopTable';


export default function Dashboard({ signOut }) {
    const [jobs, setJobs] = useState([]);
    const [selectedSort, setSelectedSort] = useState('');

    const getJobs = async () => {
        let tempJobs = [];
        const db = firebase.firestore();
        await db.collection('users').doc(JSON.parse(window.localStorage.getItem('user')).uid)
            .collection('jobs').get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    tempJobs.push({ id: doc.id, ...doc.data() });
                    tempJobs[tempJobs.length - 1].timeAdded = tempJobs[tempJobs.length - 1].timeAdded.toDate();
                });
            });
        tempJobs = tempJobs.sort(function (a, b) {
            a = new Date(a.timeAdded);
            b = new Date(b.timeAdded);
            return a > b ? -1 : a < b ? 1 : 0;
        });

        setJobs(tempJobs);
    }

    useEffect(() => {
        getJobs();
    }, []);

    const sortJobs = e => {
        const sortBy = e.target.abbr;
        setJobs(jobs.sort((a, b) => a[sortBy].localeCompare(b[sortBy])));
        setSelectedSort(sortBy);
    }

    return (
        <div className="content-container">
            <Header signOut={signOut} />
            <Form getJobs={getJobs} />
            <CoopTable jobs={jobs} sortJobs={sortJobs} selectedSort={selectedSort} />
        </div>
    )
}
