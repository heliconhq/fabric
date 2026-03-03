import styled from '@emotion/styled';
import { ActiveTheme } from '@heliconhq/core/dist/types/theme';

const StyledExample = styled.div<{ theme: ActiveTheme; wide: boolean }>`
  margin: ${(props) => props.theme.spacing.extended} 0;

  .code pre {
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    padding: 1rem !important;
    border-radius: 0.2rem;
  }

  .display {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .preview {
      flex: 1;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .code {
      flex: 0;
    }
  }
`;

export default StyledExample;
