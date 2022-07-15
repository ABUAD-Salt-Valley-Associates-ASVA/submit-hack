import React from "react";
import { Formik, Field } from "formik";
import axios from "axios";
import "./Form.css";

const inputStyle = {
  width: "100%",
  margin: "10px 0",
  padding: "10px",
};

const Form = () => {
  return (
    <div className="form-container">
      <Formik
        initialValues={{
          name: "",
          email: "",
          department: "",
          telephone: "",
          college: "",
          level: "",
          social: "",
          file: null,
        }}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          const formData = new FormData();
          for (let value in values) {
            formData.append(value, values[value]);
          }
          axios
            .post("submit-hack.herokuapp.com/google-blah-blah", formData)
            .then((res) => {
              resetForm({ values: "" });
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
          setSubmitting(false);
        }}
      >
        {({
          values,
          isSubmitting,
          errors,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="grid-container rw-rev">
              <div className="col-f-1">
                <Field
                  style={inputStyle}
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="Your Full Name*"
                  required
                  className="form_input"
                />
                <Field
                  style={inputStyle}
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Your Email*"
                  required
                  className="form_input"
                />
                <Field
                  style={inputStyle}
                  name="department"
                  type="text"
                  onChange={handleChange}
                  value={values.department}
                  placeholder="Your Department*"
                  required
                  className="form_input"
                />
                <Field
                  style={inputStyle}
                  name="telephone"
                  type="tel"
                  value={values.telephone}
                  placeholder="Your Telephone*"
                  required
                  className="form_input"
                />
                <Field
                  as="select"
                  style={inputStyle}
                  name="college"
                  type="text"
                  onChange={handleChange}
                  value={values.college}
                  required
                  className="form_input"
                >
                  <option value="">Select College*</option>
                  <option value="ENG">College of Engineering</option>
                  <option value="SCI">College of Sciences</option>
                  <option value="MHS">
                    College of Medicine and Health Sciences
                  </option>
                  <option value="LAW">College of Law</option>
                  <option value="PHARM">College of Pharmacy</option>
                  <option value="SMS">
                    College of Social &apos; Management Sciences
                  </option>
                </Field>
                <Field
                  as="select"
                  style={inputStyle}
                  name="level"
                  type="text"
                  required
                  className="form_input"
                >
                  <option value="">Select Level*</option>
                  <option value="100">100 Level</option>
                  <option value="200">200 Level</option>
                  <option value="300">300 Level</option>
                  <option value="400">400 Level</option>
                  <option value="500">500 Level</option>
                  <option value="600">600 Level</option>
                </Field>
                <Field
                  style={inputStyle}
                  name="social"
                  type="text"
                  onChange={handleChange}
                  value={values.social}
                  placeholder="Social Media Handle*"
                  required
                  className="form_input"
                />
              </div>
              <div className="col-f-1">
                <div className="upload-container">
                  <div className="drop">
                    <input
                      id="file"
                      name="file"
                      type="file"
                      className="form-control"
                      required
                      style={inputStyle}
                      onChange={(event) =>
                        setFieldValue("file", event.currentTarget.files[0])
                      }
                    />
                    Ensure to save the file with your name
                  </div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <button
                className="submit"
                type="submit"
                style={{ padding: "10px 5px" }}
                disabled={isSubmitting}
              >
                {isSubmitting && <div className="swap"></div>}
                {!isSubmitting && "Submit"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
