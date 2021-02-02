import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Button,
  Icon,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

class SimpleForm extends Component {
  state = {
    username: "",
    firstName: "",
    email: "",
    date: new Date(),
    creditCard: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    gender: "",
    agreement: "",
  };

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== this.state.password) {
        return false;
      }
      return true;
    });
  }

  componentWillUnmount() {
    // remove rule when it is not needed
    ValidatorForm.removeValidationRule("isPasswordMatch");
  }

  handleSubmit = (event) => {
    // console.log("submitted");
    // console.log(event);
  };

  handleChange = (event) => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDateChange = (date) => {
    // console.log(date);

    this.setState({ date });
  };

  render() {
    let { uploadImage } = this.state;
    return (
      <div>
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={(errors) => null}
        >
          <h6 style={{ marginTop: "10px" }}>Upload Image </h6>
          <TextValidator
            label="Image*"
            onChange={this.handleChange}
            type="file"
            name="UPLOAD Image"
            value={uploadImage}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <FormControlLabel
                control={<Checkbox />}
                label="I have read and agree to the terms of service."
              />
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" type="submit">
            <Icon>send</Icon>
            <span className="pl-2 capitalize">Submit</span>
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default SimpleForm;
