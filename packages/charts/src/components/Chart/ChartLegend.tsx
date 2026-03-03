import { LegendItem, LegendLabel, LegendOrdinal } from '@visx/legend';

import { useTheme, style } from '@heliconhq/core';

import useChart from './useChart';

interface Props {
  shouldToggle?: boolean;
}

interface WrapperStyleProps {
  marginLeft?: number;
  marginRight?: number;
}

const StyledLegendItem = style(LegendItem, {
  shouldForwardProp: (propName) => propName !== 'data-should-toggle',
})<{ 'data-should-toggle'?: boolean }>({
  base: ({ 'data-should-toggle': shouldToggle }) => ({
    cursor: shouldToggle ? 'pointer' : 'initial',
  }),
});

const StyledLegendColor = style('div')<{ color: string }>({
  base: ({ color }) => ({
    borderRadius: '2px',
    display: 'inline-block',
    width: '8px',
    height: '8px',
    marginRight: '8px',
    backgroundColor: color,
  }),
});

const StyledLegendLabel = style(LegendLabel, {
  shouldForwardProp: (propName) => propName !== 'data-is-disabled',
})<{ 'data-is-disabled': boolean }>({
  base: ({ 'data-is-disabled': isDisabled }) => ({
    fontSize: '0.8rem',
    textDecoration: isDisabled ? 'line-through' : 'none',
  }),
});

const Wrapper = style('div')<WrapperStyleProps>({
  base: ({ theme, marginLeft, marginRight }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing.standard,
    flexWrap: 'wrap',
    marginLeft,
    marginRight,
  }),
});

const ChartLegend = ({ shouldToggle, ...props }: Props) => {
  const {
    labelKeys,
    handleLabelToggle,
    mapKeyToLabel,
    getSeriesColor,
    getIsSeriesDisabled,
    margin,
  } = useChart();

  const { theme } = useTheme();

  if (!getSeriesColor) {
    return null;
  }

  return (
    <LegendOrdinal
      scale={getSeriesColor}
      labelFormat={(label) => String(label).toUpperCase()}
    >
      {(labels) => (
        <Wrapper
          theme={theme}
          marginLeft={margin?.left}
          marginRight={margin?.right}
          {...props}
        >
          {labelKeys.length
            ? labelKeys
                .filter(
                  (labelKey) => mapKeyToLabel && !!mapKeyToLabel(labelKey)
                )
                .map((key: string) => (
                  <StyledLegendItem
                    key={key}
                    onClick={
                      shouldToggle ? () => handleLabelToggle?.(key) : undefined
                    }
                    data-should-toggle={shouldToggle}
                  >
                    <StyledLegendColor color={getSeriesColor(key)} />
                    <StyledLegendLabel
                      align="left"
                      margin="0"
                      data-is-disabled={getIsSeriesDisabled(key)}
                    >
                      {mapKeyToLabel
                        ? mapKeyToLabel(key)
                        : String(key).toUpperCase()}
                    </StyledLegendLabel>
                  </StyledLegendItem>
                ))
            : null}

          {!labelKeys.length
            ? labels
                .filter(
                  (label) =>
                    mapKeyToLabel && label.value && !!mapKeyToLabel(label.value)
                )
                .map((item, i) => (
                  <StyledLegendItem
                    key={`legend-${i}`}
                    onClick={
                      shouldToggle
                        ? () => handleLabelToggle(item.datum)
                        : undefined
                    }
                    data-should-toggle={shouldToggle}
                  >
                    <StyledLegendColor color={item.value || 'gray'} />
                    <StyledLegendLabel
                      align="left"
                      margin="0"
                      data-is-disabled={getIsSeriesDisabled(item.text)}
                    >
                      {mapKeyToLabel
                        ? mapKeyToLabel(item.text.toLowerCase())
                        : item.text.toLowerCase()}
                    </StyledLegendLabel>
                  </StyledLegendItem>
                ))
            : null}
        </Wrapper>
      )}
    </LegendOrdinal>
  );
};

export default ChartLegend;
