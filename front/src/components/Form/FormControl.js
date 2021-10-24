// == Import
import React from 'react';

// Prop type
import PropTypes from 'prop-types';

import Input from 'src/components/Form/Input';
import TextArea from 'src/components/Form/TextArea';
import Select from 'src/components/Form/Select';
import RadioButton from 'src/components/Form/RadioButton';
import CheckboxMulti from 'src/components/Form/CheckboxMulti';
import CheckBoxSample from 'src/components/Form/CheckBoxSample';
import DatePicker from 'src/components/Form/DatePicker';

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
