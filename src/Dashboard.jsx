import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import './styles/Dashboard.css';
import Header from './Header';
import Form from './Form';
import CoopTable from './CoopTable';


export default function Dashboard({ signOut }) {
    const [jobs, setJobs] = useState([]);

    const getJobs = async () => {
        const tempJobs = [];
        const db = firebase.firestore();
        await db.collection('users').doc(JSON.parse(window.localStorage.getItem('user')).uid)
            .collection('jobs').get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    tempJobs.push(doc.data());
                });
            });
        setJobs(tempJobs);
    }

    useEffect(() => {
        getJobs();
    }, []);

    return (
        <div className="content-container">
            <Header signOut={signOut} />
            <Form getJobs={getJobs} />
            <CoopTable jobs={jobs} />
        </div>
    )
}
