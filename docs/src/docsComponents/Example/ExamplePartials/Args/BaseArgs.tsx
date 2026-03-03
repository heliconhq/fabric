import styled from '@emotion/styled';
import { ActiveTheme, LayerValue } from '@heliconhq/core/dist/types/theme';

const StyledArgs = styled.div<{ theme: ActiveTheme; layer: LayerValue }>`
  margin: ${(props) => props.theme.spacing.extended} 0;

  table {
    font-size: 1rem;
    .prop-name {
      font-weight: ${(props) => props.theme.typography.normal.medium};
    }

    tr {
      vertical-align: top;
    }

    .description {
      margin-bottom: 0.75rem;
      line-height: 150%;
      font-style: italic;
    }

    .type-values {
      line-height: 200%;
    }

    .union-value,
    .type-value {
      margin-right: 0.3rem;
      display: inline-block;
      padding: 0.1rem 0.3rem;
      border-radius: 0.1rem;
      line-height: normal;
      background: ${({ layer }) => layer.palette.contextual.faded};
      color: ${({ layer }) => layer.palette.contextual.fadedText};
    }
  }
`;

export default StyledArgs;
