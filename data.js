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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.8714328273851244,
        "pitch": 0.14579834671438086,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -0.8588125972565983,
          "pitch": 0.41796894862857314,
          "rotation": 0,
          "target": "1-kitchen2"
        },
        {
          "yaw": 0.7051670215566439,
          "pitch": 0.6795820751621626,
          "rotation": 11.780972450961727,
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.7947960901389575,
        "pitch": 0.1354778661749343,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": 0.057473792625463815,
          "pitch": 0.40439145282510935,
          "rotation": 0,
          "target": "2-great-room"
        },
        {
          "yaw": 1.555893866402232,
          "pitch": 0.3987551088333632,
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.26163981940924863,
        "pitch": 0.15313966495735087,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -0.5308418654879858,
          "pitch": 0.4047774864785172,
          "rotation": 0,
          "target": "0-kitchen1"
        },
        {
          "yaw": 0.45364722015671255,
          "pitch": 0.41546100900871963,
          "rotation": 0,
          "target": "1-kitchen2"
        },
        {
          "yaw": 1.0891820935043164,
          "pitch": 0.4216701049485039,
          "rotation": 0,
          "target": "3-great-room-corner"
        },
        {
          "yaw": 2.5526154549451032,
          "pitch": 0.47001585829356785,
          "rotation": 0,
          "target": "4-stairs-bottom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-great-room-corner",
      "name": "Great Room Corner",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.33832536269428637,
        "pitch": 0.08421597086550214,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -0.4899497146666878,
          "pitch": 0.39609482719804134,
          "rotation": 0,
          "target": "4-stairs-bottom"
        },
        {
          "yaw": 0.2719052118833112,
          "pitch": 0.4936997496343203,
          "rotation": 0,
          "target": "2-great-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-stairs-bottom",
      "name": "Stairs Bottom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.1409689011226245,
        "pitch": 0.14463177605161803,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -0.11198220357094257,
          "pitch": 0.4478551764678915,
          "rotation": 0,
          "target": "2-great-room"
        },
        {
          "yaw": 0.6909316245392638,
          "pitch": 0.34852942089294814,
          "rotation": 0,
          "target": "3-great-room-corner"
        },
        {
          "yaw": -1.5919366272400222,
          "pitch": 0.5692225162365254,
          "rotation": 0,
          "target": "5-stair-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-stair-landing",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.000907258095503849,
        "pitch": 0,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -0.867975589028859,
          "pitch": 0.8357578299612634,
          "rotation": 0,
          "target": "4-stairs-bottom"
        },
        {
          "yaw": 0.4568789614836959,
          "pitch": 0.25086039488620493,
          "rotation": 0,
          "target": "6-stairs-at-boxout"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-stairs-at-boxout",
      "name": "Stairs at Boxout",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -1.1600650393650476,
          "pitch": 0.8169000170688729,
          "rotation": 0,
          "target": "5-stair-landing"
        },
        {
          "yaw": 0.6119880581529245,
          "pitch": 0.28797087767826035,
          "rotation": 0,
          "target": "7-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-loft",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.737553174535707,
        "pitch": 0.5923074453569672,
        "fov": 1.4261791587875234
      },
      "linkHotspots": [
        {
          "yaw": -0.10088207381787306,
          "pitch": 0.47642154476687537,
          "rotation": 0,
          "target": "6-stairs-at-boxout"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "241OC",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
