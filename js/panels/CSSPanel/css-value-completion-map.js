/* <copyright>
This file contains proprietary software owned by Motorola Mobility, Inc.<br/>
No rights, expressed or implied, whatsoever to this software are provided by Motorola Mobility, Inc. hereunder.<br/>
(c) Copyright 2011 Motorola Mobility, Inc.  All Rights Reserved.
</copyright> */

var colorKeywords = [
    "aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "orange", "purple", "red",
    "silver", "teal", "white", "yellow", "transparent", "currentcolor", "grey", "aliceblue", "antiquewhite",
    "aquamarine", "azure", "beige", "bisque", "blanchedalmond", "blueviolet", "brown", "burlywood", "cadetblue",
    "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan",
    "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange",
    "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey",
    "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick",
    "floralwhite", "forestgreen", "gainsboro", "ghostwhite", "gold", "goldenrod", "greenyellow", "honeydew", "hotpink",
    "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue",
    "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink",
    "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow",
    "limegreen", "linen", "magenta", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen",
    "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream",
    "mistyrose", "moccasin", "navajowhite", "oldlace", "olivedrab", "orangered", "orchid", "palegoldenrod", "palegreen",
    "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "rosybrown",
    "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "skyblue", "slateblue",
    "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "thistle", "tomato", "turquoise", "violet",
    "wheat", "whitesmoke", "yellowgreen"
];

exports.cssValueCompletionMap = {
    "table-layout": [
    "auto", "fixed"
    ],
    "visibility": [
    "hidden", "visible", "collapse"
    ],
    "background-repeat": [
    "repeat", "repeat-x", "repeat-y", "no-repeat", "space", "round"
    ],
    "text-underline": [
    "none", "dotted", "dashed", "solid", "double", "dot-dash", "dot-dot-dash", "wave"
    ],
    "content": [
    "list-item", "close-quote", "no-close-quote", "no-open-quote", "open-quote"
    ],
    "list-style-image": [
    "none"
    ],
    "clear": [
    "none", "left", "right", "both"
    ],
    "text-underline-mode": [
    "continuous", "skip-white-space"
    ],
    "overflow-x": [
    "hidden", "auto", "visible", "overlay", "scroll"
    ],
    "stroke-linejoin": [
    "round", "miter", "bevel"
    ],
    "baseline-shift": [
    "baseline", "sub", "super"
    ],
    "border-bottom-width": [
    "medium", "thick", "thin"
    ],
    "marquee-speed": [
    "normal", "slow", "fast"
    ],
    "margin-top-collapse": [
    "collapse", "separate", "discard"
    ],
    "max-height": [
    "none"
    ],
    "box-orient": [
    "horizontal", "vertical", "inline-axis", "block-axis"
    ],
    "font-stretch": [
    "normal", "wider", "narrower", "ultra-condensed", "extra-condensed", "condensed", "semi-condensed",
    "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"
    ],
    "-webkit-color-correction": [
    "default", "srgb"
    ],
    "text-underline-style": [
    "none", "dotted", "dashed", "solid", "double", "dot-dash", "dot-dot-dash", "wave"
    ],
    "text-overline-mode": [
    "continuous", "skip-white-space"
    ],
    "-webkit-background-composite": [
    "highlight", "clear", "copy", "source-over", "source-in", "source-out", "source-atop", "destination-over",
    "destination-in", "destination-out", "destination-atop", "xor", "plus-darker", "plus-lighter"
    ],
    "border-left-width": [
    "medium", "thick", "thin"
    ],
    "-webkit-writing-mode": [
    "lr", "rl", "tb", "lr-tb", "rl-tb", "tb-rl", "horizontal-tb", "vertical-rl", "vertical-lr", "horizontal-bt"
    ],
    "text-line-through-mode": [
    "continuous", "skip-white-space"
    ],
    "border-collapse": [
    "collapse", "separate"
    ],
    "page-break-inside": [
    "auto", "avoid"
    ],
    "border-top-width": [
    "medium", "thick", "thin"
    ],
    "outline-color": [
    "invert"
    ],
    "text-line-through-style": [
    "none", "dotted", "dashed", "solid", "double", "dot-dash", "dot-dot-dash", "wave"
    ],
    "outline-style": [
    "none", "hidden", "inset", "groove", "ridge", "outset", "dotted", "dashed", "solid", "double"
    ],
    "cursor": [
    "none", "copy", "auto", "crosshair", "default", "pointer", "move", "vertical-text", "cell", "context-menu",
    "alias", "progress", "no-drop", "not-allowed", "-webkit-zoom-in", "-webkit-zoom-out", "e-resize", "ne-resize",
    "nw-resize", "n-resize", "se-resize", "sw-resize", "s-resize", "w-resize", "ew-resize", "ns-resize",
    "nesw-resize", "nwse-resize", "col-resize", "row-resize", "text", "wait", "help", "all-scroll", "-webkit-grab",
    "-webkit-grabbing"
    ],
    "border-width": [
    "medium", "thick", "thin"
    ],
    "size": [
    "a3", "a4", "a5", "b4", "b5", "landscape", "ledger", "legal", "letter", "portrait"
    ],
    "background-size": [
    "contain", "cover"
    ],
    "direction": [
    "ltr", "rtl"
    ],
    "marquee-direction": [
    "left", "right", "auto", "reverse", "forwards", "backwards", "ahead", "up", "down"
    ],
    "enable-background": [
    "accumulate", "new"
    ],
    "float": [
    "none", "left", "right"
    ],
    "overflow-y": [
    "hidden", "auto", "visible", "overlay", "scroll"
    ],
    "margin-bottom-collapse": [
    "collapse", "separate", "discard"
    ],
    "box-reflect": [
    "left", "right", "above", "below"
    ],
    "overflow": [
    "hidden", "auto", "visible", "overlay", "scroll"
    ],
    "text-rendering": [
    "auto", "optimizespeed", "optimizelegibility", "geometricprecision"
    ],
    "text-align": [
    "-webkit-auto", "left", "right", "center", "justify", "-webkit-left", "-webkit-right", "-webkit-center"
    ],
    "list-style-position": [
    "outside", "inside"
    ],
    "margin-bottom": [
    "auto"
    ],
    "color-interpolation": [
    "linearrgb"
    ],
    "background-origin": [
    "border-box", "content-box", "padding-box"
    ],
    "word-wrap": [
    "normal", "break-word"
    ],
    "font-weight": [
    "normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "700", "800", "900"
    ],
    "margin-before-collapse": [
    "collapse", "separate", "discard"
    ],
    "text-overline-width": [
    "normal", "medium", "auto", "thick", "thin"
    ],
    "text-transform": [
    "none", "capitalize", "uppercase", "lowercase"
    ],
    "border-right-style": [
    "none", "hidden", "inset", "groove", "ridge", "outset", "dotted", "dashed", "solid", "double"
    ],
    "border-left-style": [
    "none", "hidden", "inset", "groove", "ridge", "outset", "dotted", "dashed", "solid", "double"
    ],
    "-webkit-text-emphasis": [
    "circle", "filled", "open", "dot", "double-circle", "triangle", "sesame"
    ],
    "font-style": [
    "italic", "oblique", "normal"
    ],
    "speak": [
    "none", "normal", "spell-out", "digits", "literal-punctuation", "no-punctuation"
    ],
    "text-line-through": [
    "none", "dotted", "dashed", "solid", "double", "dot-dash", "dot-dot-dash", "wave", "continuous",
    "skip-white-space"
    ],
    "border-top-color" : colorKeywords,
    "border-right-color" : colorKeywords,
    "border-bottom-color" : colorKeywords,
    "border-left-color" : colorKeywords,
    "border-color" : colorKeywords,
    "text-overline-color" : colorKeywords,
    "background-color" : colorKeywords,
    "-webkit-text-emphasis-color" : colorKeywords,
    "outline-color" : colorKeywords,
    "text-underline-color" : colorKeywords,
    "color" : colorKeywords,
    "color-rendering": [
    "auto", "optimizespeed", "optimizequality"
    ],
    "list-style-type": [
    "none", "disc", "circle", "square", "decimal", "decimal-leading-zero", "arabic-indic", "binary", "bengali",
    "cambodian", "khmer", "devanagari", "gujarati", "gurmukhi", "kannada", "lower-hexadecimal", "lao", "malayalam",
    "mongolian", "myanmar", "octal", "oriya", "persian", "urdu", "telugu", "tibetan", "thai", "upper-hexadecimal",
    "lower-roman", "upper-roman", "lower-greek", "lower-alpha", "lower-latin", "upper-alpha", "upper-latin", "afar",
    "ethiopic-halehame-aa-et", "ethiopic-halehame-aa-er", "amharic", "ethiopic-halehame-am-et", "amharic-abegede",
    "ethiopic-abegede-am-et", "cjk-earthly-branch", "cjk-heavenly-stem", "ethiopic", "ethiopic-halehame-gez",
    "ethiopic-abegede", "ethiopic-abegede-gez", "hangul-consonant", "hangul", "lower-norwegian", "oromo",
    "ethiopic-halehame-om-et", "sidama", "ethiopic-halehame-sid-et", "somali", "ethiopic-halehame-so-et", "tigre",
    "ethiopic-halehame-tig", "tigrinya-er", "ethiopic-halehame-ti-er", "tigrinya-er-abegede",
    "ethiopic-abegede-ti-er", "tigrinya-et", "ethiopic-halehame-ti-et", "tigrinya-et-abegede",
    "ethiopic-abegede-ti-et", "upper-greek", "upper-norwegian", "asterisks", "footnotes", "hebrew", "armenian",
    "lower-armenian", "upper-armenian", "georgian", "cjk-ideographic", "hiragana", "katakana", "hiragana-iroha",
    "katakana-iroha"
    ],
    "-webkit-text-combine": [
    "none", "horizontal"
    ],
    "outline": [
    "none", "hidden", "inset", "groove", "ridge", "outset", "dotted", "dashed", "solid", "double"
    ],
    "font": [
    "caption", "icon", "menu", "message-box", "small-caption", "-webkit-mini-control", "-webkit-small-control",
    "-webkit-control", "status-bar", "italic", "oblique", "small-caps", "normal", "bold", "bolder", "lighter",
    "100", "200", "300", "400", "500", "600", "700", "800", "900", "xx-small", "x-small", "small", "medium",
    "large", "x-large", "xx-large", "-webkit-xxx-large", "smaller", "larger", "serif", "sans-serif", "cursive",
    "fantasy", "monospace", "-webkit-body"
    ],
    "dominant-baseline": [
    "middle", "auto", "central", "text-before-edge", "text-after-edge", "ideographic", "alphabetic", "hanging",
    "mathematical", "use-script", "no-change", "reset-size"
    ],
    "display": [
    "none", "inline", "block", "list-item", "run-in", "compact", "inline-block", "table", "inline-table",
    "table-row-group", "table-header-group", "table-footer-group", "table-row", "table-column-group",
    "table-column", "table-cell", "table-caption", "-webkit-box", "-webkit-inline-box", "-wap-marquee"
    ],
    "-webkit-text-emphasis-position": [
    "over", "under"
    ],
    "image-rendering": [
    "auto", "optimizespeed", "optimizequality"
    ],
    "alignment-baseline": [
    "baseline", "middle", "auto", "before-edge", "after-edge", "central", "text-before-edge", "text-after-edge",
    "ideographic", "alphabetic", "hanging", "mathematical"
    ],
    "outline-width": [
    "medium", "thick", "thin"
    ],
    "text-line-through-width": [
    "normal", "medium", "auto", "thick", "thin"
    ],
    "box-align": [
    "baseline", "center", "stretch", "start", "end"
    ],
    "border-right-width": [
    "medium", "thick", "thin"
    ],
    "border-top-style": [
    "none", "hidden", "inset", "groove", "ridge", "outset", "dotted", "dashed", "solid", "double"
    ],
    "line-height": [
    "normal"
    ],
    "text-overflow": [
    "clip", "ellipsis"
    ],
    "box-direction": [
    "normal", "reverse"
    ],
    "margin-after-collapse": [
    "collapse", "separate", "discard"
    ],
    "page-break-before": [
    "left", "right", "auto", "always", "avoid"
    ],
    "-webkit-hyphens": [
    "none", "auto", "manual"
    ],
    "border-image": [
    "repeat", "stretch"
    ],
    "text-decoration": [
    "blink", "line-through", "overline", "underline"
    ],
    "position": [
    "absolute", "fixed", "relative", "static"
    ],
    "font-family": [
    "serif", "sans-serif", "cursive", "fantasy", "monospace", "-webkit-body"
    ],
    "text-overflow-mode": [
    "clip", "ellipsis"
    ],
    "border-bottom-style": [
    "none", "hidden", "inset", "groove", "ridge", "outset", "dotted", "dashed", "solid", "double"
    ],
    "unicode-bidi": [
    "normal", "bidi-override", "embed"
    ],
    "clip-rule": [
    "nonzero", "evenodd"
    ],
    "margin-left": [
    "auto"
    ],
    "margin-top": [
    "auto"
    ],
    "zoom": [
    "document", "reset"
    ],
    "text-overline-style": [
    "none", "dotted", "dashed", "solid", "double", "dot-dash", "dot-dot-dash", "wave"
    ],
    "max-width": [
    "none"
    ],
    "empty-cells": [
    "hide", "show"
    ],
    "pointer-events": [
    "none", "all", "auto", "visible", "visiblepainted", "visiblefill", "visiblestroke", "painted", "fill", "stroke"
    ],
    "letter-spacing": [
    "normal"
    ],
    "background-clip": [
    "border-box", "content-box", "padding-box"
    ],
    "-webkit-font-smoothing": [
    "none", "auto", "antialiased", "subpixel-antialiased"
    ],
    "border": [
    "none", "hidden", "inset", "groove", "ridge", "outset", "dotted", "dashed", "solid", "double"
    ],
    "font-size": [
    "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large", "smaller",
    "larger"
    ],
    "font-variant": [
    "small-caps", "normal"
    ],
    "vertical-align": [
    "baseline", "middle", "sub", "super", "text-top", "text-bottom", "top", "bottom", "-webkit-baseline-middle"
    ],
    "marquee-style": [
    "none", "scroll", "slide", "alternate"
    ],
    "white-space": [
    "normal", "nowrap", "pre", "pre-line", "pre-wrap"
    ],
    "text-underline-width": [
    "normal", "medium", "auto", "thick", "thin"
    ],
    "box-lines": [
    "single", "multiple"
    ],
    "page-break-after": [
    "left", "right", "auto", "always", "avoid"
    ],
    "clip-path": [
    "none"
    ],
    "margin": [
    "auto"
    ],
    "marquee-repetition": [
    "infinite"
    ],
    "margin-right": [
    "auto"
    ],
    "-webkit-text-emphasis-style": [
    "circle", "filled", "open", "dot", "double-circle", "triangle", "sesame"
    ]
};