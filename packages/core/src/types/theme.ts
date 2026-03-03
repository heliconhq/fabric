import { InterpolationMode } from 'chroma-js';

export type AppearanceValue =
  | 'neutral'
  | 'primary'
  | 'cta'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'info';

export type TextAppearanceValue =
  | 'text'
  | 'textMuted'
  | 'textFaint'
  | 'primaryText'
  | 'positiveText'
  | 'negativeText'
  | 'warningText'
  | 'infoText';

export type TextWeightValue = 'thin' | 'normal' | 'medium' | 'bold';

export type BackdropValue =
  | 'root'
  | 'light'
  | 'dark'
  | 'overlay'
  | 'basic'
  | 'primary'
  | 'danger'
  | 'warning'
  | 'success';

export type TitleSizeValues = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type PaddingValue =
  | 'standard'
  | 'reduced'
  | 'compact'
  | 'minimal'
  | 'none';

export type BevelValue =
  | 'standard'
  | 'reduced'
  | 'compact'
  | 'minimal'
  | 'none';

export type MarginValue =
  | 'maximum'
  | 'extended'
  | 'standard'
  | 'reduced'
  | 'compact'
  | 'minimal'
  | 'none';

export type SizeValue = 'small' | 'medium' | 'large';

export type ExtendedSizeValue =
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge';

export type DesignValue = 'text' | 'outline' | 'regular';

export type PositionValue =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type BreakpointValue = 'sm' | 'md' | 'lg';

export type HorizontalAlignmentValue = 'left' | 'center' | 'right';

export type LeftRightAlignmentValue = 'left' | 'right';

export type NotificationPositionValue =
  | 'top'
  | 'bottom'
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left';

export type ImageFit = 'fill' | 'cover' | 'contain' | 'none' | 'scale-down';

export type AlignValue = 'stretch' | 'start' | 'center' | 'end';

export type FontFamilyValue = 'normal' | 'display' | 'monospace';

type FontValues = {
  family: string;
  thin: number;
  normal: number;
  medium: number;
  bold: number;
};

export type DefinitiveColorValue =
  | 'red'
  | 'green'
  | 'blue'
  | 'yellow'
  | 'magenta'
  | 'cyan'
  | 'purple'
  | 'orange'
  | 'indigo'
  | 'violet'
  | 'coral'
  | 'amber'
  | 'brown'
  | 'lime'
  | 'olive'
  | 'teal';

export type HexColor = string;

export type Contextual = {
  [key in
    | 'background'
    | 'backdropMuted'
    | 'text'
    | 'textMuted'
    | 'textFaint'
    | 'divider'
    | 'border'
    | 'faded'
    | 'fadedText'
    | 'focus'
    | 'focusText'
    | 'field'
    | 'fieldHover'
    | 'negativeText'
    | 'backgroundFaint'
    | 'disabled'
    | 'disabledText'
    | 'selected'
    | 'neutral'
    | 'neutralHover'
    | 'link'
    | 'backgroundMuted'
    | 'action'
    | 'actionText'
    | 'actionHover'
    | 'actionActive'
    | 'hover'
    | 'active']: HexColor;
};

export type ColorRangeKeys =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000
  | 1100
  | 1200
  | 'contrast';

export type ColorRange = {
  [key in ColorRangeKeys]: HexColor;
};

export type SemanticValues =
  | 'basic'
  | 'cta'
  | 'primary'
  | 'positive'
  | 'negative'
  | 'info'
  | 'focus'
  | 'warning';

export type ChartValues = 'primary' | 'secondary' | 'trinary';

export type Semantic = {
  [key in SemanticValues]: ColorRange;
} & { neutral?: ColorRange };

export type SemanticBaseColors = {
  [key in SemanticValues]: HexColor;
} & { neutral?: HexColor };

export type Definitive = {
  [key in DefinitiveColorValue]: ColorRange;
} & { gray?: ColorRange };

export type DefinitiveBaseColors = {
  [key in DefinitiveColorValue]: HexColor;
} & { gray?: HexColor };

export type ChartBaseColors = {
  [key in ChartValues]: HexColor;
};

export type SetLayer = string | string[] | undefined;

type LayerConfig = {
  extends?: string;
  components?: {
    [name: string]: {
      borders: boolean | undefined;
      elevated: boolean | undefined;
      bevel: BevelValue | string | number | undefined;
      margin: MarginValue | string | number | undefined;
      padding: MarginValue | string | number | undefined;
      background: string | undefined;
      text: string | undefined;
      themeName: string | undefined;
    };
  };
};

export type BaseLayerValue = {
  next?: string;
  border?: boolean;
  base: string;
  contrast: string;
  colorSpace: InterpolationMode | undefined;
  mix?: number;
  modifyContrast?: number;
  black?: string;
  white?: string;
  palette: {
    contextual: Contextual;
    definitive: DefinitiveBaseColors;
    semantic: SemanticBaseColors;
    neutrals: ColorRange;
  };
  config?: LayerConfig;
};

type BaseTheme = {
  name: string;
  mode: string;
  spacing: {
    standard: string;
    reduced: string;
    compact: string;
    minimal: string;
    extended: string;
    maximum: string;
    none: string;
  };
  elevation: {
    standard: string;
    reduced: string;
  };
  bevels: {
    standard: string;
    reduced: string;
    compact: string;
    minimal: string;
    none: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
  };
  palette: {
    definitive: DefinitiveBaseColors;
    semantic: SemanticBaseColors;
    chart: ChartBaseColors;
  };
  schemes: {
    qualitative: {
      default: string[];
      pairs: string[];
    };
    diverging: {
      [key: string]: {
        low: string;
        mid: string;
        high: string;
        mode?: 'lab' | 'rgb';
      };
    };
    sequential: {
      [key: string]: {
        colors: string[];
        mode?: 'lab' | 'rgb';
        correct?: boolean;
        beizerInterpolation?: boolean;
        padding?: number[];
      };
    };
  };
  typography: {
    baseSize: string;
    normal: FontValues;
    display: FontValues;
    monospace: FontValues;
  };
  config: {
    groups: {
      [groupName: string]: unknown;
    };
    components: {
      panel: {
        borders: boolean;
        elevated: boolean;
      };
      button: {
        fontSizes: {
          small: string;
          medium: string;
          large: string;
        };
      };
      input: {
        borders: boolean;
      };
      highlight: {
        themeName: string;
      };
      editor: {
        themeName: string;
      };
    };
    external: {
      mapbox: string;
    };
    overrides?: {
      contrast?: {
        palette?: {
          semantic: SemanticBaseColors;
        };
      };
    };
  };
};

export interface PartialTheme extends BaseTheme {
  layers: { [key: string]: BaseLayerValue };
}

export type LayerValue = {
  next: string;
  border: boolean;
  config?: LayerConfig;
  palette: {
    contextual: Contextual;
    definitive: Definitive;
    semantic: Semantic;
    neutrals: ColorRange;
  };
};

export interface ProcessedTheme extends BaseTheme {
  layers: { [key: string]: LayerValue };
}

export interface ActiveTheme extends ProcessedTheme {
  layer: LayerValue;
}
