/* <copyright>
 This file contains proprietary software owned by Motorola Mobility, Inc.<br/>
 No rights, expressed or implied, whatsoever to this software are provided by Motorola Mobility, Inc. hereunder.<br/>
 (c) Copyright 2011 Motorola Mobility, Inc.  All Rights Reserved.
 </copyright> */

exports.stylePresets = {
    "text": "Style Presets Library",
    "children": [{
        "text": "Box Styles",
        "children": [
            {
                "text": "Border-Radius",
                "selectorBase" : "border-radius-preset",
                "rules" : [{
                    "selectorSuffix" : "",
                    "styles" : {
                        "border-radius": "100px",
                        "border" : "1px solid #333"
                    }
                }]
            },
            {
                "text": "Drop Shadow",
                "selectorBase" : "drop-shadow",
                "rules" : [{
                    "selectorSuffix" : "",
                    "styles" : {
                        "box-shadow": "2px 2px 50px rgba(0,0,0,0.5)",
                        "border" : "1px solid #CCC"
                    }
                }]
            },
            {
                "text": "Fancy Box",
                "selectorBase" : "fancy-box",
                "rules" : [{
                    "selectorSuffix" : "",
                    "styles" : {
                        "box-shadow": "inset 0 0 0 1px #666, inset 0 0 0 2px rgba(225, 225, 225, 0.4), 0 0 20px -10px #333",
                        "border" : "1px solid #FFF",
                        "border-radius": "30px",
                        "background-color": "#7db9e8",
                        "background-image": "-webkit-linear-gradient(top, rgba(255,255,255,0.74) 0%,rgba(255,255,255,0) 100%)"
                    }
                }]
            }]
    }, {
        "text": "Font Styles",
        "children": [
            {
                "text": "Italic",
                "selectorBase" : "italicize",
                "rules" : [{
                    "selectorSuffix" : "",
                    "styles" : {
                        "font-style": "italic"
                    }
                }]
            },
            {
                "text": "Text Shadow",
                "selectorBase" : "italicize",
                "rules" : [{
                    "selectorSuffix" : "",
                    "styles" : {
                        "text-shadow": "1px 1px 3px #333"
                    }
                }]
            }]
    }]
};