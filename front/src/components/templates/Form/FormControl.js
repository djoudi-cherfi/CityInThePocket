// == Import
import React from 'react';

// Prop type
import PropTypes from 'prop-types';

import Input from 'src/components/templates/Form/Input';
import TextArea from 'src/components/templates/Form/TextArea';
import Select from 'src/components/templates/Form/Select';
import RadioButton from 'src/components/templates/Form/RadioButton';
import CheckboxMulti from 'src/components/templates/Form/CheckboxMulti';
import CheckBoxSample from 'src/components/templates/Form/CheckBoxSample';
import DatePicker from 'src/components/templates/Form/DatePicker';

// == Composant
const FormControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <Input {...rest} />;

    case 'textarea':
      return <TextArea {...rest} />;

    case 'select':
      return <Select {...rest} />;

    case 'radio':
      return <RadioButton {...rest} />;

    case 'checkboxMulti':
      return <CheckboxMulti {...rest} />;

    case 'checkboxSample':
      return <CheckBoxSample {...rest} />;

    case 'date':
      return <DatePicker {...rest} />;

    default:
      return null;
  }
};

FormControl.propTypes = {
  control: PropTypes.string.isRequired,
};

export default FormControl;
