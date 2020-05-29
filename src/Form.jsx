import React from 'react';
import './styles/Form.css';
import useInputState from './hooks/useInputState';
import * as firebase from 'firebase';
import { v4 as uuid } from 'uuid';



export default function Form({ getJobs }) {
    const [title, handleTitleChange, titleReset] = useInputState('');
    const [company, handleCompanyChange, companyReset] = useInputState('');
    const [location, handleLocationChange, locationReset] = useInputState('');
    const [term, handleTermChange, termReset] = useInputState('');
    const [pay, handlePayChange, payReset] = useInputState('');

    const inputs = [
        { name: 'title', placeholder: 'Job Title', handleChange: handleTitleChange, value: title },
        { name: 'company', placeholder: 'Company', handleChange: handleCompanyChange, value: company },
        { name: 'location', placeholder: 'Location', handleChange: handleLocationChange, value: location },
        { name: 'term', placeholder: 'Work Term', handleChange: handleTermChange, value: term },
        { name: 'pay', placeholder: 'Hourly Pay', handleChange: handlePayChange, value: pay },
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();
        const db = firebase.firestore();
        await db.collection('users').doc(JSON.parse(window.localStorage.getItem('user')).uid)
            .collection('jobs').doc(uuid()).set({
                job_title: title,
                company,
                location,
                term,
                pay
            })
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
        titleReset();
        companyReset();
        locationReset();
        termReset();
        payReset();
        getJobs();
    }
    return (
        <section className="section">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="columns is-centered is-vcentered">
                        {inputs.map(input => (
                            <div className="column">
                                <div className="field">
                                    <div className="control">
                                        <input name={input.name} className="input is-small" type="text" placeholder={input.placeholder}
                                            autoComplete="off" value={input.value} onChange={input.handleChange} />
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="field btn-container">
                            <input className="btn-body" type="submit" value="ENTER" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
