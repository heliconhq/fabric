import React, { forwardRef } from 'react';

import DatePicker from 'react-datepicker';

import { Global } from '@emotion/react';

import { Input, style } from '@heliconhq/core';

const Popper = style('div')({
  base: {
    '.react-datepicker-popper': {
      zIndex: 20000,
    },
  },
});

const Calendar = style('div')({
  base: ({ theme }) => ({
    '&': {
      background: theme.layer.palette.contextual.background,
      border: `1px solid ${theme.layer.palette.contextual.border}`,
      borderRadius: '.3rem',
      display: 'inline-flex',
      position: 'relative',
      padding: '1rem',
      zIndex: 20000,
      '.react-datepicker__header': {
        '.react-datepicker__day-names': {
          color: theme.layer.palette.contextual.textMuted,
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gridGap: '0.4rem',
          padding: '0.4rem 0',
          '.react-datepicker__day-name': {
            textAlign: 'center',
          },
        },
      },
      '.react-datepicker': {
        display: 'flex',
      },
      '.react-datepicker__month': {
        '.react-datepicker__week': {
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gridGap: '0.4rem',
          paddingBottom: '0.4rem',
        },
      },
      '.react-datepicker__year-wrapper, .react-datepicker__month-wrapper': {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '0.4rem',
        padding: '0 3.5rem',
      },
      '.react-datepicker__day--in-range': {
        background: theme.layer.palette.semantic.focus[700],
        color: theme.layer.palette.semantic.focus.contrast,
        fontWeight: theme.typography.normal.medium,
        marginBottom: '1px',
      },
      '.react-datepicker__day--in-selecting-range': {
        background: theme.layer.palette.semantic.focus[300],
        color: theme.layer.palette.semantic.focus.contrast,
        fontWeight: theme.typography.normal.medium,
      },
      '.react-datepicker__day': {
        padding: '0.6rem',
        cursor: 'pointer',
        textAlign: 'center',
        borderRadius: theme.bevels.reduced,

        '&:hover': {
          background: theme.layer.palette.semantic.focus[800],
          color: theme.layer.palette.semantic.focus.contrast,
        },
      },
      '.react-datepicker__year-text, .react-datepicker__month-text, .react-datepicker__time-list-item':
        {
          padding: '0.6rem',
          cursor: 'pointer',
          textAlign: 'center',
          borderRadius: theme.bevels.reduced,

          '&:hover': {
            background: theme.layer.palette.semantic.focus[800],
            color: theme.layer.palette.semantic.focus.contrast,
          },
        },
      '.react-datepicker__day--weekend': {
        color: theme.layer.palette.definitive.red[700],

        '&:hover': {
          color: theme.layer.palette.definitive.red[800],
        },
      },
      '.react-datepicker__day--outside-month': {
        color: theme.layer.palette.contextual.textFaint,
      },
      '.react-datepicker__day--disabled, .react-datepicker__year-text--disabled, .react-datepicker__month-text--disabled':
        {
          color: theme.layer.palette.contextual.disabledText,
          cursor: 'not-allowed',
          '&:hover': {
            background: 'transparent',
          },
        },
      '.react-datepicker__day--selected, .react-datepicker__month-text--selected, .react-datepicker__year-text--selected, .react-datepicker__time-list-item--selected ':
        {
          background: theme.layer.palette.semantic.focus[700],
          color: theme.layer.palette.semantic.focus.contrast,
          '&:hover': {
            background: theme.layer.palette.semantic.focus[800],
          },
        },
    },
    // Time
    '.react-datepicker__time-container': {
      height: '15rem',
    },
    '.react-datepicker-time__header': {
      padding: '0.7rem 0 0.4rem',
      fontWeight: theme.typography.normal.medium,
      fontSize: '0.9rem',
      textAlign: 'center',
    },
    '.react-datepicker__time-list': {
      listStyle: 'none',
      overflow: 'auto',
      padding: '0 1rem',
    },
  }),
});

type CustomInputProps = {
  width?: 'inherit' | '200px';
  block?: boolean;
};

const CustomInput = forwardRef(
  (props: CustomInputProps, ref: React.Ref<HTMLInputElement>) => (
    <Input {...props} ref={ref} />
  )
);

export default function BasePicker(
  props: React.ComponentProps<typeof DatePicker> & CustomInputProps
) {
  return (
    <>
      <Global
        styles={{
          '.react-datepicker__aria-live': {
            position: 'absolute',
            clipPath: 'circle(0)',
            border: 0,
            height: '1px',
            margin: '-1px',
            overflow: 'hidden',
            padding: 0,
            width: '1px',
            whiteSpace: 'nowrap',
          },
        }}
      />
      <DatePicker
        customInput={<CustomInput width={props.width} block={props.block} />}
        popperContainer={Popper}
        calendarContainer={Calendar}
        calendarStartDay={1}
        {...props}
      />
    </>
  );
}
