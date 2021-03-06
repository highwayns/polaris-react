import React from 'react';
// eslint-disable-next-line no-restricted-imports
import {mountWithAppProvider} from 'test-utilities/legacy';
import {Checkbox, CheckboxProps} from '../Checkbox';

describe('<Checkbox />', () => {
  const defaultProps: CheckboxProps = {
    checked: true,
    disabled: false,
    id: 'checkboxId',
    name: 'Checkbox',
    value: 'checkbox',
    onChange: noop,
  };

  it('sets pass through props for input', () => {
    const input = mountWithAppProvider(<Checkbox {...defaultProps} />).find(
      'input',
    );
    const {checked, disabled, id, name, value} = defaultProps;

    expect(input.prop('checked')).toBe(checked);
    expect(input.prop('disabled')).toBe(disabled);
    expect(input.prop('id')).toBe(id);
    expect(input.prop('name')).toBe(name);
    expect(input.prop('value')).toBe(value);
  });

  it('calls onChange', () => {
    const spy = jest.fn();

    mountWithAppProvider(<Checkbox {...defaultProps} onChange={spy} />)
      .find('input')
      .simulate('change');

    expect(spy).toHaveBeenCalledTimes(1);
  });
});

function noop() {}
