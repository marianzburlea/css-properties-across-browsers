export const cssCondensedPropertyMap = {
  animation: {
    className: 'animation',
    condensed: true,
    children: {
      composition: 'replace',
      delay: 0,
      direction: 'normal',
      duration: 0,
      fillMode: 'none',
      iterationCount: 1,
      name: 'none',
      playState: 'running',
      timingFunction: 'ease',
    },
  },
  background: {
    className: 'background',
    condensed: true,
    children: {
      attachment: 'scroll',
      blendMode: 'normal',
      clip: 'border-box',
      color: 'transparent',
      image: 'none',
      origin: 'padding-box',
      positionX: 0,
      positionY: 0,
      repeat: 'repeat',
      size: 'auto',
    },
  },
  borderImage: {
    className: 'border-image',
    condensed: true,
    children: {
      outset: 0,
      repeat: 'stretch',
      slice: '100%',
      source: 'none',
      width: 1,
    },
  },
  borderBlock: {
    className: 'border-block',
    condensed: true,
    children: {
      endColor: 'currentcolor',
      endStyle: 'none',
      endWidth: 'medium',
      startColor: 'currentcolor',
      startStyle: 'none',
      startWidth: 'medium',
    },
  },
  borderInline: {
    className: 'border-inline',
    condensed: true,
    children: {
      endColor: 'currentcolor',
      endStyle: 'none',
      endWidth: 'medium',
      startColor: 'currentcolor',
      startStyle: 'none',
      startWidth: 'medium',
    },
  },
  borderTop: {
    className: 'border-top',
    condensed: true,
    children: {
      leftRadius: 0,
      rightRadius: 0,
      color: 'currentcolor',
      style: 'none',
      width: 'medium',
    },
  },
  borderRight: {
    className: 'border-right',
    condensed: true,
    children: {
      color: 'currentcolor',
      style: 'none',
      width: 'medium',
    },
  },
  borderBottom: {
    className: 'border-bottom',
    condensed: true,
    children: {
      leftRadius: 0,
      rightRadius: 0,
      color: 'currentcolor',
      style: 'none',
      width: 'medium',
    },
  },
  borderLeft: {
    className: 'border-left',
    condensed: true,
    children: {
      color: 'currentcolor',
      style: 'none',
      width: 'medium',
    },
  },
  borderStart: {
    className: 'border-start',
    condensed: true,
    children: {
      endRadius: 0,
      startRadius: 0,
    },
  },
  borderEnd: {
    className: 'border-end',
    condensed: true,
    children: {
      endRadius: 0,
      startRadius: 0,
    },
  },
  border: {
    className: 'border',
    condensed: true,
    children: {
      width: 0,
      style: 'solid',
      color: 'initial',
    },
  },
  column: {
    className: 'column',
    condensed: false,
    children: {
      count: 'auto',
      fill: 'balance',
      ruleColor: 'currentcolor',
      ruleStyle: 'none',
      ruleWidth: 'medium',
      span: 'none',
      width: 'auto',
    },
  },
  padding: {
    className: 'padding',
    condensed: true,
    children: {
      top: 'spacing',
      bottom: 'spacing',
      left: 'spacing',
      right: 'spacing',
    },
  },

  paddingBlock: {
    className: 'padding-block',
    condensed: true,
    children: {
      start: 'spacing',
      end: 'spacing',
    },
  },

  paddingInline: {
    className: 'padding-inline',
    condensed: true,
    children: {
      start: 'spacing',
      end: 'spacing',
    },
  },
  flex: {
    className: 'flex',
    condensed: true,
    children: {
      basis: 'auto',
      grow: '0',
      shrink: '1',
    },
  },
  font: {
    className: 'font',
    condensed: true,
    children: {
      style: 'normal',
      variant: 'normal',
      weight: 400,
      stretch: 'normal',
      size: 'medium',
      lineHeight: 'normal',
      family: 'serif',
    },
  },
  fontSynthesis: {
    className: 'font-synthesis',
    condensed: false,
    children: {
      weight: 'auto',
      style: 'auto',
      smallCaps: 'auto',
    },
  },
  gap: {
    className: 'gap',
    condensed: true,
    prefix: true,
    children: {
      row: 'normal',
      column: 'normal',
    },
  },
  grid: {
    className: 'grid',
    condensed: false,
    children: {
      autoColumns: 'auto',
      autoFlow: 'row',
      autoRows: 'auto',
      columnStart: 'auto',
      columnEnd: 'auto',
      rowStart: 'auto',
      rowEnd: 'auto',
      templateAreas: 'none',
      templateColumns: 'none',
      templateRows: 'none',
    },
  },
  insetBlock: {
    className: 'inset-block',
    condensed: true,
    children: {
      start: 'auto',
      end: 'auto',
    },
  },
  insetInline: {
    className: 'inset-inline',
    condensed: true,
    children: {
      start: 'auto',
      end: 'auto',
    },
  },
  margin: {
    className: 'margin',
    condensed: true,
    children: {
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
    },
  },
  marginBlock: {
    className: 'margin-block',
    condensed: true,
    children: {
      start: '0',
      end: '0',
    },
  },
  marginInline: {
    className: 'margin-inline',
    condensed: true,
    children: {
      start: '0',
      end: '0',
    },
  },
  width: {
    className: 'width',
    condensed: true,
    prefix: true,
    children: {
      min: 'initial',
      max: 'initial',
    },
  },

  height: {
    className: 'height',
    condensed: true,
    prefix: true,
    children: {
      min: 'initial',
      max: 'initial',
    },
  },

  marker: {
    className: 'marker',
    condensed: false,
    children: {
      end: 'svg',
      mid: 'svg',
      start: 'svg',
    },
  },

  mask: {
    className: 'mask',
    condensed: true,
    children: {
      value: 'none',
      clip: 'border-box',
      image: 'none',
      mode: 'match-source',
      origin: 'border-box',
      repeat: 'no-repeat',
      size: 'auto',
    },
  },

  max: {
    className: 'max',
    condensed: false,
    children: {
      blockSize: 'none',
      inlineSize: 'none',
    },
  },

  min: {
    className: 'min',
    condensed: false,
    children: {
      blockSize: 'auto',
      inlineSize: 'auto',
    },
  },

  object: {
    className: 'object',
    condensed: false,
    children: {
      fit: 'fill',
      position: '50% 50%',
    },
  },

  offset: {
    className: 'offset',
    condensed: false,
    children: {
      anchor: 'auto',
      distance: 0,
      path: 'none',
      position: 'auto',
      rotate: 'auto',
    },
  },

  outline: {
    className: 'outline',
    condensed: true,
    children: {
      color: 'invert',
      style: 'none',
      width: 'medium',
    },
  },

  overflow: {
    className: 'overflow',
    condensed: true,
    children: {
      x: 'visible',
      y: 'visible',
    },
  },

  overscrollBehavior: {
    className: 'overscroll-behavior',
    condensed: false,
    children: {
      block: 'auto',
      inline: 'auto',
      x: 'auto',
      y: 'auto',
    },
  },

  pageBreak: {
    className: 'page-break',
    condensed: false,
    children: {
      after: 'auto',
      before: 'auto',
      inside: 'auto',
    },
  },

  place: {
    className: 'place',
    condensed: false,
    children: {
      items: 'normal',
      content: 'normal',
      self: 'normal',
    },
  },

  ruby: {
    className: 'ruby',
    condensed: false,
    children: {
      align: 'space-around',
      position: 'over',
    },
  },

  scrollMargin: {
    className: 'scroll-margin',
    condensed: true,
    children: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },

  scrollMarginBlock: {
    className: 'scroll-margin-block',
    condensed: false,
    children: {
      start: 0,
      end: 0,
    },
  },

  scrollMarginInline: {
    className: 'scroll-margin-inline',
    condensed: false,
    children: {
      start: 0,
      end: 0,
    },
  },

  scrollPadding: {
    className: 'scroll-padding',
    condensed: true,
    children: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },

  scrollPaddingBlock: {
    className: 'scroll-padding-block',
    condensed: false,
    children: {
      start: 0,
      end: 0,
    },
  },

  scrollPaddingInline: {
    className: 'scroll-padding-inline',
    condensed: false,
    children: {
      start: 0,
      end: 0,
    },
  },

  scrollSnap: {
    className: 'scroll-snap',
    condensed: false,
    children: {
      align: 'none',
      stop: 'normal',
      type: 'none',
    },
  },

  scrollbar: {
    className: 'scrollbar',
    condensed: false,
    children: {
      gutter: 'auto',
      width: 'auto',
    },
  },

  shape: {
    className: 'shape',
    condensed: false,
    children: {
      imageThreshold: 0,
      margin: 0,
      outside: 'none',
      rendering: 'auto',
    },
  },

  text: {
    className: 'text',
    condensed: false,
    children: {
      align: 'start',
      alignLast: 'auto',
      anchor: 'start',
      combineUpright: 'none',
      indent: '0',
      orientation: 'mixed',
      overflow: 'clip',
      rendering: 'auto',
      shadow: 'none',
      transform: 'none',
    },
  },

  textDecoration: {
    className: 'text-decoration',
    condensed: false,
    children: {
      color: 'currentcolor',
      line: 'none',
      skipInk: 'auto',
      style: 'solid',
      thickness: 'auto',
    },
  },

  textEmphasis: {
    className: 'text-emphasis',
    condensed: false,
    children: {
      color: 'currentcolor',
      position: 'over right',
      style: 'none',
    },
  },

  textUnderline: {
    className: 'text-underline',
    condensed: false,
    children: {
      offset: 'auto',
      position: 'auto',
    },
  },

  textWrap: {
    className: 'text-wrap',
    condensed: false,
    children: {
      mode: 'normal',
      style: 'normal',
    },
  },

  word: {
    className: 'word',
    condensed: false,
    children: {
      break: 'normal',
      spacing: 'normal',
    },
  },

  transition: {
    className: 'transition',
    condensed: true,
    children: {
      delay: '0s',
      duration: '0s',
      property: 'all',
      timingFunction: 'ease',
    },
  },
}

export const cssPropertyMap = {
  accentColor: 'theme',
  alignContent: 'flex',
  alignItems: 'flex',
  alignSelf: 'individual',
  appearance: 'appearance',
  aspectRatio: 'box',
  backdropFilter: 'visual-effect',
  backfaceVisibility: 'transform',
  blockSize: 'box',
  borderCollapse: 'border-collapse',
  bottom: 'position',
  boxShadow: 'shadow',
  boxSizing: 'box',
  breakAfter: 'content-flow',
  breakBefore: 'content-flow',
  breakInside: 'content-flow',
  captionSide: 'caption',
  caretColor: 'interaction',
  clear: 'content-flow',
  clip: 'masking',
  clipPath: 'masking',
  clipRule: 'masking',
  color: 'text',
  colorInterpolation: 'text',
  colorInterpolationFilters: 'text',
  colorScheme: 'theme',
  contain: 'contain',
  containIntrinsicBlockSize: 'contain',
  containIntrinsicHeight: 'contain',
  containIntrinsicInlineSize: 'contain',
  containIntrinsicWidth: 'contain',
  containerName: 'container',
  containerType: 'container',
  content: 'content',
  contentVisibility: 'content',
  counterIncrement: 'list',
  counterReset: 'list',
  counterSet: 'list',
  cursor: 'cursor',
  direction: 'content-flow',
  display: 'display',
  dominantBaseline: 'svg',
  emptyCells: 'table',
  fill: 'svg',
  fillOpacity: 'svg',
  fillRule: 'svg',
  filter: 'visual-effect',
  flexDirection: 'flex',
  flexWrap: 'flex',
  float: 'content-flow',
  floodColor: 'svg',
  floodOpacity: 'svg',
  fontFeatureSettings: 'typography',
  fontKerning: 'typography',
  fontOpticalSizing: 'typography',
  fontPalette: 'typography',
  fontSizeAdjust: 'typography',
  fontVariantAlternates: 'typography',
  fontVariationSettings: 'typography',
  hyphenateCharacter: 'text',
  hyphens: 'text',
  imageOrientation: 'image',
  imageRendering: 'image',
  inlineSize: 'box',
  inset: 'position',
  isolation: 'visual-effect',
  justifyContent: 'flex',
  justifyItems: 'flex',
  justifySelf: 'individual',
  left: 'position',
  letterSpacing: 'typography',
  lightingColor: 'svg',
  lineBreak: 'text',
  lineHeight: 'typography',
  listStyleImage: 'list',
  listStylePosition: 'list',
  listStyleType: 'list',

  maskComposite: 'masking',
  maskType: 'masking',
  mathStyle: 'math',
  mixBlendMode: 'visual-effect',

  opacity: 'visual-effect',
  order: 'flex',
  orientation: 'media',

  outlineOffset: 'outline',
  overflowWrap: 'content-flow',

  paintOrder: 'svg',
  perspective: 'transform',
  perspectiveOrigin: 'transform',

  pointerEvents: 'interaction',
  position: 'position',
  quotes: 'text',
  resize: 'interaction',
  right: 'position',
  rotate: 'transform',
  scale: 'transform',
  scrollBehavior: 'interaction',

  size: 'media',
  stopColor: 'svg',
  stopOpacity: 'svg',
  stroke: 'svg',
  strokeDasharray: 'svg',
  strokeDashoffset: 'svg',
  strokeLinecap: 'svg',
  strokeLinejoin: 'svg',
  strokeMiterlimit: 'svg',
  strokeOpacity: 'svg',
  strokeWidth: 'svg',
  tabSize: 'typography',
  tableLayout: 'table',

  top: 'position',
  touchAction: 'interaction',
  transform: 'transform',
  transformBox: 'transform',
  transformOrigin: 'transform',
  transformStyle: 'transform',
  transitionBehavior: 'transition',

  translate: 'transform',
  unicodeBidi: 'text',
  userSelect: 'interaction',
  vectorEffect: 'svg',
  verticalAlign: 'text',
  visibility: 'visibility',
  whiteSpaceCollapse: 'text',
  willChange: 'optimization',
  writingMode: 'text',
  zIndex: 'position',
  zoom: 'box',
}