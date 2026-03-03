import style from '../../../../utils/style';

type Props = {
  valueWidth: number;
  withLabel: boolean;
  label: string;
};

const StyledContainer = style('div')<{ isValue: boolean; valueWidth: number }>({
  base: ({ theme, isValue, valueWidth }) => ({
    padding: '10px 0',
    width: `${valueWidth}px`,
    position: 'relative',
    fontWeight: theme.typography.normal.medium,
    '&:after': {
      content: "''",
      height: isValue ? '16px' : '8px',
      width: '2px',
      background: theme.layer.palette.contextual.divider,
      position: 'absolute',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  }),
});

const ValueLabel = style('div')({
  base: ({ theme }) => ({
    position: 'relative',
    left: '-50%',
    bottom: '15px',
    fontSize: '0.9rem',
    transform: 'translateX(.1rem)',
    background: theme.layer.palette.contextual.background,
  }),
});

export default function IndicatorValue({
  valueWidth,
  withLabel,
  label,
}: Props) {
  return (
    <StyledContainer valueWidth={valueWidth} isValue={!!withLabel}>
      {withLabel && <ValueLabel>{label}</ValueLabel>}
    </StyledContainer>
  );
}
