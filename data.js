var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen1",
      "name": "Kitchen1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.1382837791964775,
        "pitch": 0.13181630222426222,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 2.592864896637213,
          "pitch": 0.720915313418061,
          "rotation": 0,
          "target": "4-back-hall"
        },
        {
          "yaw": -0.9016594037200498,
          "pitch": 0.6078746223813134,
          "rotation": 0,
          "target": "1-kitchen2"
        },
        {
          "yaw": 0.6532123238365113,
          "pitch": 0.6243576275899105,
          "rotation": 0,
          "target": "2-great-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen2",
      "name": "Kitchen2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.7853981633974474,
        "pitch": 0.15927803185431344,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 0.09129423880333931,
          "pitch": 0.5448859359947029,
          "rotation": 0,
          "target": "2-great-room"
        },
        {
          "yaw": 1.5388858762624507,
          "pitch": 0.41305219747039246,
          "rotation": 0,
          "target": "0-kitchen1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-great-room",
      "name": "Great Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.5206976952558797,
        "pitch": -0.05481576620272932,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 1.0887513836210125,
          "pitch": 0.42355776511578824,
          "rotation": 0,
          "target": "3-gr-corner"
        },
        {
          "yaw": 0.450963213199465,
          "pitch": 0.40186241055196525,
          "rotation": 0,
          "target": "1-kitchen2"
        },
        {
          "yaw": -0.5227298444858448,
          "pitch": 0.3907709055711255,
          "rotation": 0,
          "target": "0-kitchen1"
        },
        {
          "yaw": 2.553258633477288,
          "pitch": 0.3503097452368884,
          "rotation": 0,
          "target": "9-steps-to-ll"
        },
        {
          "yaw": 2.936012712290479,
          "pitch": 0.5375722373450778,
          "rotation": 0,
          "target": "6-stair-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-gr-corner",
      "name": "GR Corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.2805927596904567,
        "pitch": 0.03844642148207633,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 0.1681292442541995,
          "pitch": 0.5530636870364631,
          "rotation": 0,
          "target": "2-great-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-back-hall",
      "name": "Back Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.20272969056443912,
        "pitch": 0.22701696494178591,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 1.5254582016996494,
          "pitch": 0.8937422976571554,
          "rotation": 0.7853981633974483,
          "target": "0-kitchen1"
        },
        {
          "yaw": 0.026905415298642765,
          "pitch": 0.7047903356989345,
          "rotation": 0,
          "target": "5-laundry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-laundry",
      "name": "Laundry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 0.1470159550546679,
          "pitch": 0.47806279147659936,
          "rotation": 0,
          "target": "4-back-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-stair-landing",
      "name": "Stair Landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -0.8839144502301401,
          "pitch": 0.7875779793154649,
          "rotation": 0,
          "target": "2-great-room"
        },
        {
          "yaw": 0.4604919773231071,
          "pitch": 0.43446535224580707,
          "rotation": 0,
          "target": "7-walkway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-walkway",
      "name": "Walkway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.1678201203840768,
        "pitch": 0.2874327701279089,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -1.1234469883898655,
          "pitch": 0.7971215715052367,
          "rotation": 0,
          "target": "6-stair-landing"
        },
        {
          "yaw": 0.5861929313402747,
          "pitch": 0.30498577914033653,
          "rotation": 0,
          "target": "8-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-loft",
      "name": "Loft",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.7193215923231087,
        "pitch": 0.28861739375899376,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -0.13446303919955582,
          "pitch": 0.6330372962897055,
          "rotation": 0,
          "target": "7-walkway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-steps-to-ll",
      "name": "Steps to L.L.",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.2953634118759698,
        "pitch": 0.5182038545266678,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 0.6763498600885995,
          "pitch": 0.6941437562883692,
          "rotation": 0,
          "target": "11-owners-suite"
        },
        {
          "yaw": -0.9540408905954774,
          "pitch": 0.8730936659869677,
          "rotation": 0,
          "target": "12-ll-family-room"
        },
        {
          "yaw": 0.08402577163312408,
          "pitch": 0.5066918346592111,
          "rotation": 0,
          "target": "2-great-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-owners-bath",
      "name": "Owner's Bath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.000004511492999625943,
        "pitch": 0,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -1.8095449124164684,
          "pitch": 0.36721699492983895,
          "rotation": 4.71238898038469,
          "target": "11-owners-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-owners-suite",
      "name": "Owner's Suite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.21472385363907165,
        "pitch": 0.09385779558054175,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 0.942462098418968,
          "pitch": 0.5499252959367347,
          "rotation": 5.497787143782138,
          "target": "9-steps-to-ll"
        },
        {
          "yaw": -3.067301646159148,
          "pitch": 0.5554187367667591,
          "rotation": 0,
          "target": "10-owners-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-ll-family-room",
      "name": "L.L. Family Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -0.2338630591733999,
          "pitch": 0.28862672198869355,
          "rotation": 0,
          "target": "13-bar"
        },
        {
          "yaw": -0.6525152676160104,
          "pitch": 0.4503316482669426,
          "rotation": 5.497787143782138,
          "target": "9-steps-to-ll"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bar",
      "name": "Bar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.8186458118567987,
        "pitch": 0.4229789479634185,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -0.11889398067256707,
          "pitch": 0.25384488593102184,
          "rotation": 0,
          "target": "12-ll-family-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "241 OC",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
