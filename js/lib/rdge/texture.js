/* <copyright>
This file contains proprietary software owned by Motorola Mobility, Inc.<br/>
No rights, expressed or implied, whatsoever to this software are provided by Motorola Mobility, Inc. hereunder.<br/>
(c) Copyright 2011 Motorola Mobility, Inc.  All Rights Reserved.
</copyright> */

var Material = require("js/lib/rdge/materials/material").Material;

///////////////////////////////////////////////////////////////////////
// Class GLTexture
//      GL representation of a texture.
///////////////////////////////////////////////////////////////////////
function Texture( dstWorld, texMapName,  wrap, mips )
{
    ///////////////////////////////////////////////////////////////////////
    // Instance variables
    ///////////////////////////////////////////////////////////////////////
    this._texture;

    // texture attributes
    this._texMapName = texMapName.slice();

    // set default values for wrap and mips
    if (wrap === undefined)
        wrap = "REPEAT";
    if (mips === undefined)
        mips = true;
    this._wrap = wrap;
    this._mips = mips;

   // the canvas generating the texture map (if there is one)
    this._srcCanvas;	
    this._srcWorld;

    // cache whether or not the source is animated
    this._isAnimated = false;
    
    // the destination world that will use the texture map
    this._dstWorld = dstWorld;

    ///////////////////////////////////////////////////////////////////////
    // Property Accessors
    ///////////////////////////////////////////////////////////////////////
    this.getTexture		= function()	{  return this._texture;	}

    this.setSrcWorld	= function(w)	{  this._srcWorld = w;		}
    this.getSrcWorld	= function()	{  return this._srcWorld;	}

    this.setDstWorld	= function(w)	{  this._dstWorld = w;		}
    this.getDstWorld	= function()	{  return this._dstWorld;	}

    this.isAnimated     = function()    {  return this._isAnimated; }

    ///////////////////////////////////////////////////////////////////////
    // Methods
    ///////////////////////////////////////////////////////////////////////

    this.init = function()
    {
        // determine if the source is a canvas or an image file
        var viewUtils = require("js/helper-classes/3D/view-utils").ViewUtils;
        var root = viewUtils.application.ninja.currentDocument.documentRoot;
        var srcCanvas = this.findCanvas( this._texMapName, root );
        if (srcCanvas)
        {
            this._srcCanvas = srcCanvas;
            if (srcCanvas.elementModel && srcCanvas.elementModel.shapeModel && srcCanvas.elementModel.shapeModel.GLWorld)
            {
                this._srcWorld = srcCanvas.elementModel.shapeModel.GLWorld;

                // check if the source is animated
                if (srcCanvas.elementModel && srcCanvas.elementModel.shapeModel  && srcCanvas.elementModel.shapeModel.GLWorld)
                    this._isAnimated = this._srcWorld._hasAnimatedMaterials;
            }

            this.loadFromCanvas();
        }
        else
        {
            this.loadFromFile();  
        }


    }

    this.loadFromFile = function()
    {
        var tex = this._texture;
        this._srcCanvas = null;

        // only load if something has changed
        if (this._texMapName !== texMapName)	// does RDGE allow us to change wrap or mips?
        {
            var texMapName = this._texMapName;
            var wrap = this._wrap;
            var mips = this._mips;

            var dstWorld = this.getDstWorld();
            if (dstWorld)
            {
                var renderer = dstWorld.getRenderer();
                tex = renderer.getTextureByName(texMapName, wrap, mips );
                this._texture = tex;
                dstWorld.textureToLoad( tex );
            }
        }

        return tex;
    }

    var __texCounter = 0;
    this.loadFromCanvas = function()
    {
        var srcCanvas = this._srcCanvas;
        var wrap = this._wrap;
        var mips = this._mips;

        this._texMapName = "GLTexture_" + __texCounter;
        __texCounter++;

        // create the texture
        var world = this.getDstWorld();
        tex = world.getGLContext().createTexture();
        this._texture = tex;
        tex.texparams = new _texparams(wrap, mips);	// defined in renderer.js
        tex.image = new Image;

        // create the canvas and context to render into
        var doc = srcCanvas.ownerDocument;
        this._renderCanvas = doc.createElement("canvas");

        // cache whether this is a 2D canvas or 3D canvas
        var srcCtx = srcCanvas.getContext("2d");
        this._is3D = false;
        if (!srcCtx)  this._is3D = true;

        this.rerender();

        return tex;
    }

    this.rerender = function()
    {
        if (!this._srcCanvas)
        {
            console.log( " no source canvas in GLTexture.rerender" );
            return;
        }
        var srcCanvas = this._srcCanvas;

        var world = this.getDstWorld();
        if (!world)
        {
            console.log( "no world in GLTexture.rerender" );
            return;
        }
        var renderer = world.getRenderer();

        var imageData;
        var width = srcCanvas.width,  height = srcCanvas.height;
        if (!this.isPowerOfTwo(width) || !this.isPowerOfTwo(height))
        {
            width = this.nextLowerPowerOfTwo( width );
            height = this.nextLowerPowerOfTwo( height );
        }

        // create a canvas to be used as the image for the texture map
        var renderCanvas = this._renderCanvas;
        if (!renderCanvas)
        {
            console.log( "no render canvas in GLTexture.rerender" );
            return;
        }
        renderCanvas.width = width;
        renderCanvas.height = height;
        var renderCtx = renderCanvas.getContext("2d");

        // create the texture
        var tex = this._texture;
        if (!tex)
        {
            console.log( "no texture in GLTexture.rerender" );
            return;
        }

        var srcCtx;
        if (!this._is3D)
        {
            srcCtx = srcCanvas.getContext("2d");
            imageData = srcCtx.getImageData( 0, 0, width, height );
            renderCtx.putImageData( imageData, 0, 0 );
        }
        else
        {
            srcCtx = srcCanvas.getContext("experimental-webgl");
            if (srcCtx)
            {
                renderCtx.drawImage(srcCanvas, 0, 0);
//				var data = new Uint8Array(width * height * 4);
//				srcCtx.readPixels(0, 0, width, height, srcCtx.RGBA, srcCtx.UNSIGNED_BYTE, data);
//				imageData = renderCtx.createImageData(width, height);
//				var nBytes = width*height*4;
//				for (var i=0;  i<nBytes;  i++)
//					imageData.data[i] = data[i];
//		        renderCtx.putImageData( imageData, 0, 0 );

            }
        }

        /////////////////
        tex.image = renderCanvas;
        renderer.commitTexture( tex );

        return tex;
}
 
    this.isPowerOfTwo = function(x)
    {
        return (x & (x - 1)) == 0;
    }
 
    this.nextHighestPowerOfTwo = function(x)
    {
        --x;
        for (var i = 1; i < 32; i <<= 1) {
            x = x | x >> i;
        }
        return x + 1;
    }
 
    this.nextLowerPowerOfTwo = function(x)
    {
        return this.nextHighestPowerOfTwo(x) >> 1;
    }

    this.findCanvas = function( id,  elt )
    {
        if (elt.id && elt.id === id)
            return elt;
 
		if (elt.children)
		{
			var nKids = elt.children.length;
			for (var i=0;  i<nKids;  i++)
			{
				var child = elt.children[i];
				var canvas = this.findCanvas( id, child );
                if (canvas)  return canvas;
			}
		}
   }

    /*
    this.findWorld = function( id,  elt )
    {
        if (elt.id && elt.id === id)
        {
            if (elt.elementModel && elt.elementModel.shapeModel && elt.elementModel.shapeModel.GLWorld)
            {
                var world = elt.elementModel.shapeModel.GLWorld;
                return world;
            }
        }
 
		if (elt.children)
		{
			var nKids = elt.children.length;
			for (var i=0;  i<nKids;  i++)
			{
				var child = elt.children[i];
				var world = this.findWorld( id, child );
                if (world)  return world;
			}
		}
   }
   */

   // initialize the object
   this.init();
}

if (typeof exports === "object") {
    exports.Texture = Texture;
}


