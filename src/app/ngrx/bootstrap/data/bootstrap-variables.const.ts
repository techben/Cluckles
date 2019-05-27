import { v4 as uuid } from 'uuid';

import { IVariable, VariableTypes } from '../variables.interface';
import { BootstrapComponentNamesEnum } from './bootstrap-component-names.enum';

export const bootstrapVariables: Array<IVariable<VariableTypes>> = [
  {
    type: VariableTypes.size,
    value: '.75',
    unit: 'rem',
    variable: '$alert-padding-y',
    label: 'Padding Y',
    component: BootstrapComponentNamesEnum.Alert,
  },
  {
    type: VariableTypes.size,
    value: '1.25',
    unit: 'rem',
    variable: '$alert-padding-x',
    label: 'Padding X',
    component: BootstrapComponentNamesEnum.Alert,
  },
  {
    type: VariableTypes.size,
    value: '1',
    unit: 'rem',
    variable: '$alert-margin-bottom',
    label: 'Margin bottom',
    component: BootstrapComponentNamesEnum.Alert,
  },
  {
    type: VariableTypes.size,
    value: '1',
    unit: 'rem',
    variable: '$alert-margin-bottom',
    label: 'Margin bottom',
    component: BootstrapComponentNamesEnum.Alert,
  },
  {
    type: VariableTypes.size,
    value: '1',
    unit: 'px',
    variable: '$alert-border-width',
    label: 'Border width',
    component: BootstrapComponentNamesEnum.Alert,
  },
  {
    type: VariableTypes.size,
    value: '.25',
    unit: 'rem',
    variable: '$alert-border-radius',
    label: 'Border radius',
    component: BootstrapComponentNamesEnum.Alert,
  },
  {
    type: VariableTypes.fontweight,
    value: '700',
    variable: '$alert-link-font-weight',
    label: 'Font weight',
    component: BootstrapComponentNamesEnum.Alert,
  },
  {
    type: VariableTypes.fontweight,
    value: '700',
    variable: '$close-font-size',
    label: 'Close icon font weight',
    component: BootstrapComponentNamesEnum.Alert,
  },

  {
    type: VariableTypes.size,
    value: '75',
    unit: '%',
    variable: '$badge-font-size',
    label: 'Font size',
    component: BootstrapComponentNamesEnum.Badge,
  },
  {
    type: VariableTypes.fontweight,
    value: '700',
    variable: '$badge-font-weight',
    label: 'Font weight',
    component: BootstrapComponentNamesEnum.Badge,
  },
  {
    type: VariableTypes.size,
    value: '.25',
    unit: 'em',
    variable: '$badge-padding-y',
    label: 'Padding y',
    component: BootstrapComponentNamesEnum.Badge,
  },
  {
    type: VariableTypes.size,
    value: '.4',
    unit: 'em',
    variable: '$badge-padding-x',
    label: 'Padding x',
    component: BootstrapComponentNamesEnum.Badge,
  },
  {
    type: VariableTypes.size,
    value: '.25',
    unit: 'rem',
    variable: '$badge-border-radius',
    label: 'Border radius',
    component: BootstrapComponentNamesEnum.Badge,
  },
  {
    type: VariableTypes.size,
    value: '.6em',
    unit: 'em',
    variable: '$badge-pill-padding-x',
    label: 'Pill padding x',
    component: BootstrapComponentNamesEnum.Badge,
  },
  {
    type: VariableTypes.size,
    value: '10',
    unit: 'rem',
    variable: '$badge-pill-border-radius',
    label: 'Pill border radius',
    component: BootstrapComponentNamesEnum.Badge,
  },

  {
    type: VariableTypes.size,
    value: '.75',
    unit: 'rem',
    variable: '$breadcrumb-padding-y',
    label: 'Padding Y',
    component: BootstrapComponentNamesEnum.Breadcrumbs,
  },
  {
    type: VariableTypes.size,
    value: '1',
    unit: 'rem',
    variable: '$breadcrumb-padding-x',
    label: 'Padding X',
    component: BootstrapComponentNamesEnum.Breadcrumbs,
  },
  {
    type: VariableTypes.size,
    value: '.5',
    unit: 'rem',
    variable: '$breadcrumb-item-padding',
    label: 'Item padding',
    component: BootstrapComponentNamesEnum.Breadcrumbs,
  },
  {
    type: VariableTypes.color,
    value: '#e9ecef',
    variable: '$breadcrumb-bg',
    label: 'Background',
    component: BootstrapComponentNamesEnum.Breadcrumbs,
  },
  {
    type: VariableTypes.color,
    value: '#6c757d',
    variable: '$breadcrumb-divider-color',
    label: 'Divider color',
    component: BootstrapComponentNamesEnum.Breadcrumbs,
  },
  {
    type: VariableTypes.color,
    value: '#6c757d',
    variable: '$breadcrumb-active-color',
    label: 'Active color',
    component: BootstrapComponentNamesEnum.Breadcrumbs,
  },
  {
    type: VariableTypes.text,
    value: '/',
    variable: '$breadcrumb-divider',
    label: 'Divider',
    component: BootstrapComponentNamesEnum.Breadcrumbs,
  },

  {
    type: VariableTypes.size,
    value: '1',
    unit: 'rem',
    variable: '$breadcrumb-margin-bottom',
    label: 'Margin bottom',
    component: BootstrapComponentNamesEnum.Breadcrumbs,
  },

  {
    type: VariableTypes.size,
    value: '2',
    unit: 'rem',
    variable: '$jumbotron-padding',
    label: 'Padding',
    component: BootstrapComponentNamesEnum.Jumbotron,
  },
  {
    type: VariableTypes.color,
    value: '#E9ECEF',
    variable: '$jumbotron-bg',
    label: 'Background color',
    component: BootstrapComponentNamesEnum.Jumbotron,
  },
  {
    type: VariableTypes.color,
    value: '#E9ECEF',
    variable: '$card-bg',
    label: 'Background color',
    component: BootstrapComponentNamesEnum.Card,
  },
  {
    type: VariableTypes.color,
    value: '#E9ECEF',
    variable: '$progress-bg',
    label: 'Background color',
    component: BootstrapComponentNamesEnum.Progress,
  },
].map(
  (entity: Partial<IVariable<VariableTypes>>): IVariable<VariableTypes> => {
    entity.id = uuid();

    return entity as IVariable<VariableTypes>;
  }
);
