/* <copyright>
This file contains proprietary software owned by Motorola Mobility, Inc.<br/>
No rights, expressed or implied, whatsoever to this software are provided by Motorola Mobility, Inc. hereunder.<br/>
(c) Copyright 2011 Motorola Mobility, Inc.  All Rights Reserved.
</copyright> */
///////////////////////////////////////////////////////////////////////
// Class MaterialsLibrary
//      Contains an array of GLMaterials.
///////////////////////////////////////////////////////////////////////
var MaterialsLibrary = Object.create(Object.prototype, {

    _materials : { value: [], writable: true, enumerable: true, configurable: true },

    materials : {
    get: function() {
            return this._materials;
        }
    },
    
    addMaterial: {
        value: function (material)
        {
            this._materials.push(material);
        }
    },

    addMaterialAt: {
        value: function (material, index)
        {
            this._materials.splice(index, 0, material);
        }
    },

    removeMaterialAt: {
        value: function (index)
        {
            return this._materials.splice(index, 1);
        }
    },

    removeMaterial: {
        value: function (materialName)
        {
            var index = this.getIndexOfMaterial(materialName);
            if(index !== -1)
            {
                return this.removeMaterialAt(index);
            }
        }
    },

    getMaterialAt: {
        value: function (index)
        {
            return this._materials[index];
        }
    },

    getMaterial: {
        value: function (materialName)
        {
            var index = this.getIndexOfMaterial(materialName);
            if(index !== -1)
            {
                return this._materials[index];
            }
        }
    },			

    getIndexOfMaterial: {
        value: function (materialName)
        {
            var len = this._materials.length;
            for(var i=0; i<len; i++)
            {
                var material = this._materials[i];
                if(material.getName() === materialName)
                {
                    return i;
                }
            }

            return -1;
        }
    },

	clearAllMaterials:
	{
		value: function()
		{
			this._materials = [];
		}
	},

	export:
	{
		value: function()
		{
			var exportStr = "MaterialLibrary: \n"

			var nMats = this._materials.length;
			for (var i=0;  i<nMats;  i++)
			{
				var material = this._materials[i];
				exportStr += material.export();
			}

			exportStr += "endMatLib\n";
			return exportStr;
		}
	},

	import:
	{
		value: function( importStr )
		{ 
			// we replace allmaterials, so remove anything
			// that is currently there.
			this.clearAllMaterials();

			var pu = new ParseUtils( importStr );
			
			var type = pu.nextValue( "material: ", "\n", false );
			while (type)
			{
				var mat = null;
				switch (type)
				{
					case "flat":				mat = new FlatMaterial();				break;
					case "brick":				mat = new BrickMaterial();				break;
					case "iridescentScales":	mat = new IridescentScalesMaterial();	break;
					case "quilt_1":				mat = new QuiltMaterial01();			break;
					case "quilt_2":				mat = new QuiltMaterial02();			break;
					case "linearGradient":		mat = new LinearGradientMaterial();		break;
					case "radialGradient":		mat = new RadialGradientMaterial();		break;
					case "radialBlur":			mat = new RadiaBlurMaterial();			break;
					case "pulse":				mat = new PulseMaterial();				break;
					case "tunnel":				mat = new TunnelMaterial();				break;
					case "reliefTunnel":		mat = new ReliefTunnelMaterial();		break;
					case "squareTunnel":		mat = new SquareTunnelMaterial();		break;
					case "fly":					mat = new FlyMaterial();				break;
					case "water":				mat = new WaterMaterial();				break;
					case "zInvert":				mat = new ZInvertMaterial();			break;
					case "deform":				mat = new DeformMaterial();				break;
					case "star":				mat = new StarMaterial();				break;
					case "twist":				mat = new TwistMaterial();				break;
					case "keleidoscope":		mat = new KeleidoscopeMaterial();		break;
					case "julia":				mat = new JuliaMaterial();				break;
					case "mandel":				mat = new MandelMaterial();				break;
					case "plasma":				mat = new PlasmaMaterial();				break;
					case "bumpMetal":			mat = new PlasmaMaterial();				break;
					case "uber":				mat = new UberMaterial();				break;

					default:
						throw new Error( "Unrecognized material type: " + type );
						pu.advancePastToken( "endMaterial\n" );
						break;
				}

				if (mat)
				{
					importStr = mat.import( importStr );
					pu.setBuffer( importStr );
					this.addMaterial( mat );
				}

				type = pu.nextValue( "material: ", "\n", false );
			}

			return pu.getBuffer();
		}
	}

});


// create the library of stroke and fill materials

var flatMaterial				= new FlatMaterial();
var uberMaterial				= new UberMaterial();
var linearGradientMaterial		= new LinearGradientMaterial();
var radialGradientMaterial		= new RadialGradientMaterial();
var radialBlurMaterial			= new RadialBlurMaterial();
var pulseMaterial				= new PulseMaterial();
var tunnelMaterial				= new TunnelMaterial();
var reliefTunnelMaterial		= new ReliefTunnelMaterial();
var squareTunnelMaterial		= new SquareTunnelMaterial();
var flyMaterial					= new FlyMaterial();
var waterMaterial				= new WaterMaterial();
var zInvertMaterial				= new ZInvertMaterial();
var deformMaterial				= new DeformMaterial();
var starMaterial				= new StarMaterial();
var twistMaterial				= new TwistMaterial();
var keleidoscopeMaterial		= new KeleidoscopeMaterial();
var juliaMaterial				= new JuliaMaterial();
var mandelMaterial				= new MandelMaterial();
var plasmaMaterial				= new PlasmaMaterial();
var bumpMetalMaterial			= new BumpMetalMaterial();

MaterialsLibrary.addMaterial(linearGradientMaterial);
MaterialsLibrary.addMaterial(flatMaterial);
MaterialsLibrary.addMaterial(radialGradientMaterial);
MaterialsLibrary.addMaterial(radialBlurMaterial);
MaterialsLibrary.addMaterial(pulseMaterial);
MaterialsLibrary.addMaterial(tunnelMaterial);
MaterialsLibrary.addMaterial(reliefTunnelMaterial);
MaterialsLibrary.addMaterial(squareTunnelMaterial);
MaterialsLibrary.addMaterial(flyMaterial);
MaterialsLibrary.addMaterial(waterMaterial);
MaterialsLibrary.addMaterial(zInvertMaterial);
MaterialsLibrary.addMaterial(deformMaterial);
MaterialsLibrary.addMaterial(starMaterial);
MaterialsLibrary.addMaterial(twistMaterial);
MaterialsLibrary.addMaterial(keleidoscopeMaterial);
MaterialsLibrary.addMaterial(juliaMaterial);
MaterialsLibrary.addMaterial(mandelMaterial);
MaterialsLibrary.addMaterial(plasmaMaterial);
MaterialsLibrary.addMaterial(bumpMetalMaterial);
MaterialsLibrary.addMaterial(uberMaterial);

