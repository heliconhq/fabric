import {
  Highlight as BaseHighlight,
  Prism,
  PrismTheme,
  themes,
} from 'prism-react-renderer';
import { useTheme } from '@heliconhq/core';
import LineNumberContainer from './HightlightPartials/LineNumberContainer';
import LineNumber from './HightlightPartials/LineNumber';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

// eslint-disable-next-line @typescript-eslint/no-floating-promises
import('prismjs/components/prism-python');
// eslint-disable-next-line @typescript-eslint/no-floating-promises
import('prismjs/components/prism-json');

type Props = {
  lineNumbers?: boolean;
  code: string;
  language?: 'text' | 'json' | 'python' | 'jsx';
};

export default function Highlight({
  lineNumbers,
  language = 'text',
  code,
  ...props
}: Props) {
  const { theme } = useTheme();

  return (
    <BaseHighlight
      language={language}
      code={code}
      theme={themes[theme.config.components.highlight.themeName] as PrismTheme}
      {...props}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <LineNumberContainer styles={style} className={className}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {lineNumbers && <LineNumber>{i + 1}</LineNumber>}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </LineNumberContainer>
      )}
    </BaseHighlight>
  );
}
