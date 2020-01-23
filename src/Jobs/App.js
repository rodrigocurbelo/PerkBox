import React, {Component} from 'react'
import classnames from 'classnames';
import {
  Form,
  Button,
  FormGroup,
  ControlLabel,
  ButtonGroup,
  FormControl,
} from 'react-bootstrap'
import { FORM_TYPES, getForm } from '../shared/helpers/form';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jobCount: 0,
      forms: [
        getForm('1 job! Cool, what do you do?'),
        getForm('2 jobs? Oh, wow. Tell me more!'),
        getForm('3 jobs?? Sorry, are you even human?'),
      ]
    }
  }

  renderField(field) {
    switch (field.type) {
      case FORM_TYPES.select:
        return (
          <div>
            <ControlLabel>{field.title}</ControlLabel>
            <FormControl componentClass="select">
              <option>Select occupation</option>
              {field.options.map((option, i) => <option key={i}>{option}</option>)}
            </FormControl>
          </div>
        );

      case FORM_TYPES.text:
      case FORM_TYPES.number:
        return (
          <div>
            <ControlLabel>{field.title}</ControlLabel>
            <FormControl type={field.type} placeholder={field.placeholder} />
          </div>
        );
    }
  }

  renderForm(form) {
    return (
      <Form>
        {form.fields.map((field, i) => (
          <FormGroup key={i}>
            {this.renderField(field)}
          </FormGroup>
        ))}
      </Form>
    );
  }

  render() {
    const {jobCount, forms} = this.state

    return (
      <div>
        <ButtonGroup>
          {[0, ...forms].map((_, i) => (
            <Button
              key={i}
              onClick={() => this.setState({ jobCount: i })}
              className={classnames({ selected: jobCount === i})}
            >
              {i}
            </Button>
          ))}
        </ButtonGroup>

        {forms.slice(0, jobCount).map((form, i) => (
          <div key={i} style={{ marginTop: 30 }}>
            <h3>{form.title}</h3>
            <p>About your job #{i + 1}...</p>

            {this.renderForm(form)}
          </div>
        ))}
      </div>
    )
  }
}
