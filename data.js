var APP_DATA = {
  "scenes": [
    {
      "id": "0-stone-plate-of-nus-law",
      "name": "Stone Plate of NUS Law",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.6243422319066934,
        "pitch": 0.14650728737820629,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.8283461340242155,
          "pitch": 0.11817794600503717,
          "rotation": 0.7853981633974483,
          "target": "1-the-summit-canteen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.009838315353848,
          "pitch": 0.27374534779053405,
          "title": "Welcome to NUS Law",
          "text": "Bukit Timah Campus"
        }
      ]
    },
    {
      "id": "1-the-summit-canteen",
      "name": "The Summit Canteen",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.14465785664635078,
        "pitch": 0.07058148788967955,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.4011007450878008,
          "pitch": 0.025444085914624992,
          "rotation": 5.497787143782138,
          "target": "0-stone-plate-of-nus-law"
        },
        {
          "yaw": -2.6997917206715325,
          "pitch": -0.05906483392175588,
          "rotation": 1.5707963267948966,
          "target": "2-c-j-koh-law-library"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.04525672310772677,
          "pitch": -0.44498656118075175,
          "title": "The Summit Canteen",
          "text": "Remember social distancing rules"
        }
      ]
    },
    {
      "id": "2-c-j-koh-law-library",
      "name": "C J Koh Law Library",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.12969578033882456,
        "pitch": 0.06962209607964986,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -2.848955354266204,
          "pitch": -0.0022434962398634184,
          "rotation": 1.5707963267948966,
          "target": "1-the-summit-canteen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.06094162661420377,
          "pitch": 0.25875863374376706,
          "title": "Welcome to the Library",
          "text": "Reference materials available"
        }
      ]
    }
  ],
  "name": "NUS Bukit Timah Campus",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
