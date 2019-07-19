import React from "react";
import { withFormik, Form, Field, validateYupSchema } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { axiosWithAuth } from '../../axiosAuth';


function AddFriends({ touched, errors, values }) {
    
    return (
        <Form className="form">
            <div className="form-group">
                <label className="label">name</label>
                <Field
                    className="input"
                    name="name"
                    type="text"
                    autoComplete="off"
                    value={values.name}
                />
                {touched.name && errors.name && <p>{errors.name}</p>}
            </div>
            <div className="form-group">
                <label className="label">Age</label>
                <Field
                    className="input"
                    name="age"
                    type="text"
                    autoComplete="off"
                    value={values.age}
                />
            </div>
            {touched.age && errors.age && <p>{errors.age}</p>}

            <div className="form-group">
                <label className="label">email</label>
                <Field
                    className="input"
                    name="email"
                    type="email"
                    autoComplete="off"
                    value={values.email}
                />
            </div>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <button className="btn" type="submit">Submit &rarr;</button>
        </Form>
    );
}

export default withFormik({
    mapPropsToValues() {
        return {
            name: "",
            age: "",
            email: ""
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required("A name is required.  Please enter a name."),
        age: Yup.number()
            .required("age is required, please enter age"),
        email: Yup.string().email()
            .required("A email is required.  Please enter a email.")

    }),
    handleSubmit(values, formikBag) {
        formikBag.setSubmitting(true)
        const url =
            "http://localhost:5000/api/friends";
        axiosWithAuth()
            .post(url, values)
            .then(response => {
                formikBag.props.history.push("/FriendsList");
                formikBag.setSubmitting(false)
            })
            .catch(e => {
                console.log(e.response.data);
                formikBag.setSubmitting(false)
            });
    }
})(AddFriends);
