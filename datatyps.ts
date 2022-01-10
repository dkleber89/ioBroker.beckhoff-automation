[
  {
    "name": "ST_Summenmessung",
    "bitSize": 480,
    "subItem": [
      {
        "name": "Zeitstempel",
        "type": "TIMESTRUCT",
        "comment": "Zeitstempel",
        "bitSize": 128,
        "bitOffs": 0
      },
      {
        "name": "Energie",
        "type": "REAL",
        "comment": "Energie",
        "bitSize": 32,
        "bitOffs": 128
      },
      {
        "name": "Frequenz",
        "type": "REAL",
        "comment": "Frequenz",
        "bitSize": 32,
        "bitOffs": 160
      },
      {
        "name": "Wirkleistung",
        "type": "REAL",
        "comment": "Wirkleistung",
        "bitSize": 32,
        "bitOffs": 192
      },
      {
        "name": "Blindleistung",
        "type": "REAL",
        "comment": "Blindleistung",
        "bitSize": 32,
        "bitOffs": 224
      },
      {
        "name": "Scheinleistung",
        "type": "REAL",
        "comment": "Scheinleistung",
        "bitSize": 32,
        "bitOffs": 256
      },
      {
        "name": "Bits1",
        "type": "BYTE",
        "comment": "Entleerstation: Bits",
        "bitSize": 8,
        "bitOffs": 288
      },
      {
        "name": "Bits2",
        "type": "BYTE",
        "comment": "Entleerstation: Bits",
        "bitSize": 8,
        "bitOffs": 296
      },
      {
        "name": "Bits3",
        "type": "BYTE",
        "comment": "Entleerstation: Bits",
        "bitSize": 8,
        "bitOffs": 304
      },
      {
        "name": "IstpunktVerschub",
        "type": "DINT",
        "comment": "Istpunkt Verschub",
        "bitSize": 32,
        "bitOffs": 320
      },
      {
        "name": "IstpunktHub",
        "type": "DINT",
        "comment": "Istpunkt Hub",
        "bitSize": 32,
        "bitOffs": 352
      },
      {
        "name": "IstpunktDrehwerk",
        "type": "DINT",
        "comment": "Istpunkt Drehwerk",
        "bitSize": 32,
        "bitOffs": 384
      },
      {
        "name": "Kistengewicht",
        "type": "REAL",
        "comment": "Kistengewicht",
        "bitSize": 32,
        "bitOffs": 416
      },
      {
        "name": "Entleergewicht",
        "type": "REAL",
        "comment": "Entleergewicht",
        "bitSize": 32,
        "bitOffs": 448
      }
    ]
  },
  {
    "name": "ST_MessungPhase",
    "bitSize": 320,
    "subItem": [
      {
        "name": "Strom",
        "type": "REAL",
        "comment": "Strom",
        "bitSize": 32,
        "bitOffs": 0
      },
      {
        "name": "Spannung",
        "type": "REAL",
        "comment": "Spannung",
        "bitSize": 32,
        "bitOffs": 32
      },
      {
        "name": "Wirkleistung",
        "type": "REAL",
        "comment": "Wirkleistung",
        "bitSize": 32,
        "bitOffs": 64
      },
      {
        "name": "Blindleistung",
        "type": "REAL",
        "comment": "Blindleistung",
        "bitSize": 32,
        "bitOffs": 96
      },
      {
        "name": "Scheinleistung",
        "type": "REAL",
        "comment": "Scheinleistung",
        "bitSize": 32,
        "bitOffs": 128
      },
      {
        "name": "Energie",
        "type": "REAL",
        "comment": "Energie",
        "bitSize": 32,
        "bitOffs": 160
      },
      {
        "name": "CosPHI",
        "type": "REAL",
        "comment": "CosPhi",
        "bitSize": 32,
        "bitOffs": 192
      },
      {
        "name": "Frequenz",
        "type": "REAL",
        "comment": "Frequenz",
        "bitSize": 32,
        "bitOffs": 224
      },
      {
        "name": "Energie_Neg",
        "type": "REAL",
        "comment": "negative Energie",
        "bitSize": 32,
        "bitOffs": 256
      },
      {
        "name": "WinkelLambda",
        "type": "REAL",
        "comment": "Winkel zwischen der ersten Phase und dieser Phase",
        "bitSize": 32,
        "bitOffs": 288
      }
    ]
  },
  {
    "name": "ST_Energiedatensatz",
    "bitSize": 1440,
    "subItem": [
      {
        "name": "Allgemein",
        "type": "ST_Summenmessung",
        "bitSize": 480,
        "bitOffs": 0
      },
      {
        "name": "Phase1",
        "type": "ST_MessungPhase",
        "bitSize": 320,
        "bitOffs": 480
      },
      {
        "name": "Phase2",
        "type": "ST_MessungPhase",
        "bitSize": 320,
        "bitOffs": 800
      },
      {
        "name": "Phase3",
        "type": "ST_MessungPhase",
        "bitSize": 320,
        "bitOffs": 1120
      }
    ]
  },
  {
    "name": "ARRAY [1..21] OF REAL",
    "type": "REAL",
    "comment": "x. Oberschwingung Effektiv",
    "bitSize": 672,
    "arrayInfo": {
      "lBound": 1,
      "elements": 21
    }
  },
  {
    "name": "ST_NetzanalysePhase",
    "bitSize": 1472,
    "subItem": [
      {
        "name": "Zeitstempel",
        "type": "TIMESTRUCT",
        "comment": "Zeitstempel für die Energiemessung",
        "bitSize": 128,
        "bitOffs": 0
      },
      {
        "name": "StromEffektiv",
        "type": "ARRAY [1..21] OF REAL",
        "comment": "x. Oberschwingung Effektiv",
        "bitSize": 672,
        "bitOffs": 128
      },
      {
        "name": "SpannungEffektiv",
        "type": "ARRAY [1..21] OF REAL",
        "comment": "x. Oberschwingung Effektiv",
        "bitSize": 672,
        "bitOffs": 800
      }
    ]
  },
  {
    "name": "ST_Netzanalyse",
    "bitSize": 4416,
    "subItem": [
      {
        "name": "Phase1",
        "type": "ST_NetzanalysePhase",
        "comment": "x. Oberschwingung Effektiv",
        "bitSize": 1472,
        "bitOffs": 0
      },
      {
        "name": "Phase2",
        "type": "ST_NetzanalysePhase",
        "comment": "x. Oberschwingung Effektiv",
        "bitSize": 1472,
        "bitOffs": 1472
      },
      {
        "name": "Phase3",
        "type": "ST_NetzanalysePhase",
        "comment": "x. Oberschwingung Effektiv",
        "bitSize": 1472,
        "bitOffs": 2944
      }
    ]
  },
  {
    "name": "ST_TOC",
    "bitSize": 992,
    "subItem": [
      {
        "name": "Zeitstempel",
        "type": "TIMESTRUCT",
        "comment": "Zeitstempel der Datei",
        "bitSize": 128,
        "bitOffs": 0
      },
      {
        "name": "Dateiname",
        "type": "STRING(100)",
        "comment": "Dateiname STRING",
        "bitSize": 808,
        "bitOffs": 128
      },
      {
        "name": "DateiGroesse",
        "type": "UDINT",
        "comment": "Dateigröße",
        "bitSize": 32,
        "bitOffs": 960
      }
    ]
  },
  {
    "name": "ARRAY [1..4] OF FW_SystemTaskInfoType",
    "type": "FW_SystemTaskInfoType",
    "bitSize": 1152,
    "arrayInfo": {
      "lBound": 1,
      "elements": 4
    }
  },
  {
    "name": "ARRAY [0..1024] OF BYTE",
    "type": "BYTE",
    "comment": "Puffer: eine Binäre Zeile",
    "bitSize": 8200,
    "arrayInfo": {
      "lBound": 0,
      "elements": 1025
    }
  },
  {
    "name": "ARRAY [1..100] OF ST_TOC",
    "type": "ST_TOC",
    "bitSize": 99200,
    "arrayInfo": {
      "lBound": 1,
      "elements": 100
    }
  },
  {
    "name": "ARRAY [0..1] OF ST_Netzanalyse",
    "type": "ST_Netzanalyse",
    "comment": "Speicher für die Netzanalyse",
    "bitSize": 8832,
    "arrayInfo": {
      "lBound": 0,
      "elements": 2
    }
  },
  {
    "name": "ARRAY [0..1, 0..899] OF ST_Energiedatensatz",
    "type": "ST_Energiedatensatz",
    "comment": "Datenbank für die Energiemesswerte",
    "bitSize": 2592000,
    "arrayInfo": [
      {
        "lBound": 0,
        "elements": 2
      },
      {
        "lBound": 0,
        "elements": 900
      }
    ]
  },
  {
    "name": "ARRAY [0..7] OF BYTE",
    "type": "BYTE",
    "comment": "Date And Time",
    "bitSize": 64,
    "arrayInfo": {
      "lBound": 0,
      "elements": 8
    }
  },
  {
    "name": "ARRAY [0..3] OF UINT",
    "type": "UINT",
    "comment": "don't use it! [0] := major, [1] := minor, [2] := revision/service pack, [3] := patch",
    "bitSize": 64,
    "arrayInfo": {
      "lBound": 0,
      "elements": 4
    }
  },
  {
    "name": "ARRAY [1..30] OF STRING(255)",
    "type": "STRING(255)",
    "bitSize": 61440,
    "arrayInfo": {
      "lBound": 1,
      "elements": 30
    }
  },
  {
    "name": "ARRAY [0..1, 0..15] OF BYTE",
    "type": "BYTE",
    "comment": "ASCII to decimal and decimal digits to ASCII codes",
    "bitSize": 256,
    "arrayInfo": [
      {
        "lBound": 0,
        "elements": 2
      },
      {
        "lBound": 0,
        "elements": 16
      }
    ]
  },
  {
    "name": "ARRAY [0..9] OF BYTE",
    "type": "BYTE",
    "comment": "Default precision values ( -1 => disabled (prints all characters or has special function)",
    "bitSize": 80,
    "arrayInfo": {
      "lBound": 0,
      "elements": 10
    }
  },
  {
    "name": "ARRAY [0..11] OF INT",
    "type": "INT",
    "comment": "plc var type support mask",
    "bitSize": 192,
    "arrayInfo": {
      "lBound": 0,
      "elements": 12
    }
  },
  {
    "name": "ARRAY [0..11, 0..18] OF BOOL",
    "type": "BOOL",
    "comment": "TYPEFIELD_EL",
    "bitSize": 1824,
    "arrayInfo": [
      {
        "lBound": 0,
        "elements": 12
      },
      {
        "lBound": 0,
        "elements": 19
      }
    ]
  },
  {
    "name": "ARRAY [0..3, 0..11] OF BOOL",
    "type": "BOOL",
    "comment": "PREFIXFLAG_HASH",
    "bitSize": 384,
    "arrayInfo": [
      {
        "lBound": 0,
        "elements": 4
      },
      {
        "lBound": 0,
        "elements": 12
      }
    ]
  },
  {
    "name": "ARRAY [0..1, 0..11] OF STRING(10)",
    "type": "STRING(10)",
    "comment": "HASHPREFIX_STDC",
    "bitSize": 2112,
    "arrayInfo": [
      {
        "lBound": 0,
        "elements": 2
      },
      {
        "lBound": 0,
        "elements": 12
      }
    ]
  },
  {
    "name": "ARRAY [0..18] OF BOOL",
    "type": "BOOL",
    "bitSize": 152,
    "arrayInfo": {
      "lBound": 0,
      "elements": 19
    }
  },
  {
    "name": "ARRAY [0..1, 1..12] OF WORD",
    "type": "WORD",
    "bitSize": 384,
    "arrayInfo": [
      {
        "lBound": 0,
        "elements": 2
      },
      {
        "lBound": 1,
        "elements": 12
      }
    ]
  },
  {
    "name": "ARRAY [0..1, 0..13] OF WORD",
    "type": "WORD",
    "bitSize": 448,
    "arrayInfo": [
      {
        "lBound": 0,
        "elements": 2
      },
      {
        "lBound": 0,
        "elements": 14
      }
    ]
  },
  {
    "name": "ARRAY [1..2] OF ST_SBCSTable",
    "type": "ST_SBCSTable",
    "bitSize": 4096,
    "arrayInfo": {
      "lBound": 1,
      "elements": 2
    }
  },
  {
    "name": "ARRAY [0..31] OF LREAL",
    "type": "LREAL",
    "comment": "CRC16-CCITT lookup table ( 0x1021 as generator polynomial )",
    "bitSize": 2048,
    "arrayInfo": {
      "lBound": 0,
      "elements": 32
    }
  },
  {
    "name": "ARRAY [0..255] OF WORD",
    "type": "WORD",
    "bitSize": 4096,
    "arrayInfo": {
      "lBound": 0,
      "elements": 256
    }
  },
  {
    "name": "ARRAY [0..2] OF STRING(10)",
    "type": "STRING(10)",
    "bitSize": 264,
    "arrayInfo": {
      "lBound": 0,
      "elements": 3
    }
  },
  {
    "name": "CTD",
    "bitSize": 80,
    "subItem": [
      {
        "name": "M",
        "type": "BOOL",
        "comment": "Variable for CD Edge Detection",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "CD",
        "type": "BOOL",
        "comment": "Count Down on rising edge",
        "bitSize": 8,
        "bitOffs": 8
      },
      {
        "name": "LOAD",
        "type": "BOOL",
        "comment": "Load Start Value",
        "bitSize": 8,
        "bitOffs": 16
      },
      {
        "name": "PV",
        "type": "WORD",
        "comment": "Start Value",
        "bitSize": 16,
        "bitOffs": 32
      },
      {
        "name": "Q",
        "type": "BOOL",
        "comment": "Counter reached 0",
        "bitSize": 8,
        "bitOffs": 48
      },
      {
        "name": "CV",
        "type": "WORD",
        "comment": "Current Counter Value",
        "bitSize": 16,
        "bitOffs": 64
      }
    ],
    "fbInfo": {
      "codeIndex": 8,
      "initIndex": 9
    }
  },
  {
    "name": "CTU",
    "bitSize": 80,
    "subItem": [
      {
        "name": "M",
        "type": "BOOL",
        "comment": "Variable for CU Edge Detection",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "CU",
        "type": "BOOL",
        "comment": "Count Up",
        "bitSize": 8,
        "bitOffs": 8
      },
      {
        "name": "RESET",
        "type": "BOOL",
        "comment": "Reset Counter to 0",
        "bitSize": 8,
        "bitOffs": 16
      },
      {
        "name": "PV",
        "type": "WORD",
        "comment": "Counter Limit",
        "bitSize": 16,
        "bitOffs": 32
      },
      {
        "name": "Q",
        "type": "BOOL",
        "comment": "Counter reached the Limit",
        "bitSize": 8,
        "bitOffs": 48
      },
      {
        "name": "CV",
        "type": "WORD",
        "comment": "Current Counter Value",
        "bitSize": 16,
        "bitOffs": 64
      }
    ],
    "fbInfo": {
      "codeIndex": 10,
      "initIndex": 11
    }
  },
  {
    "name": "CTUD",
    "bitSize": 96,
    "subItem": [
      {
        "name": "MU",
        "type": "BOOL",
        "comment": "Variable for CU Edge Detection",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "MD",
        "type": "BOOL",
        "comment": "Variable for CD Edge Detection",
        "bitSize": 8,
        "bitOffs": 8
      },
      {
        "name": "CU",
        "type": "BOOL",
        "comment": "Count Up",
        "bitSize": 8,
        "bitOffs": 16
      },
      {
        "name": "CD",
        "type": "BOOL",
        "comment": "Count Down",
        "bitSize": 8,
        "bitOffs": 24
      },
      {
        "name": "RESET",
        "type": "BOOL",
        "comment": "Reset Counter to Null",
        "bitSize": 8,
        "bitOffs": 32
      },
      {
        "name": "LOAD",
        "type": "BOOL",
        "comment": "Load Start Value",
        "bitSize": 8,
        "bitOffs": 40
      },
      {
        "name": "PV",
        "type": "WORD",
        "comment": "Start Value / Counter Limit",
        "bitSize": 16,
        "bitOffs": 48
      },
      {
        "name": "QU",
        "type": "BOOL",
        "comment": "Counter reached Limit",
        "bitSize": 8,
        "bitOffs": 64
      },
      {
        "name": "QD",
        "type": "BOOL",
        "comment": "Counter reached Null",
        "bitSize": 8,
        "bitOffs": 72
      },
      {
        "name": "CV",
        "type": "WORD",
        "comment": "Current Counter Value",
        "bitSize": 16,
        "bitOffs": 80
      }
    ],
    "fbInfo": {
      "codeIndex": 12,
      "initIndex": 13
    }
  },
  {
    "name": "F_TRIG",
    "bitSize": 24,
    "subItem": [
      {
        "name": "M",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "CLK",
        "type": "BOOL",
        "comment": "Signal to detect",
        "bitSize": 8,
        "bitOffs": 8
      },
      {
        "name": "Q",
        "type": "BOOL",
        "comment": "Edge detected",
        "bitSize": 8,
        "bitOffs": 16
      }
    ],
    "fbInfo": {
      "codeIndex": 15,
      "initIndex": 16
    }
  },
  {
    "name": "R_TRIG",
    "bitSize": 24,
    "subItem": [
      {
        "name": "M",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "CLK",
        "type": "BOOL",
        "comment": "Signal to detect",
        "bitSize": 8,
        "bitOffs": 8
      },
      {
        "name": "Q",
        "type": "BOOL",
        "comment": "Edge detected",
        "bitSize": 8,
        "bitOffs": 16
      }
    ],
    "fbInfo": {
      "codeIndex": 22,
      "initIndex": 23
    }
  },
  {
    "name": "RS",
    "bitSize": 24,
    "subItem": [
      {
        "name": "SET",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "RESET1",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 8
      },
      {
        "name": "Q1",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 16
      }
    ],
    "fbInfo": {
      "codeIndex": 26,
      "initIndex": 27
    }
  },
  {
    "name": "SEMA",
    "bitSize": 32,
    "subItem": [
      {
        "name": "X",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "CLAIM",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 8
      },
      {
        "name": "RELEASE",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 16
      },
      {
        "name": "BUSY",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 24
      }
    ],
    "fbInfo": {
      "codeIndex": 28,
      "initIndex": 29
    }
  },
  {
    "name": "SR",
    "bitSize": 24,
    "subItem": [
      {
        "name": "SET1",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "RESET",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 8
      },
      {
        "name": "Q1",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 16
      }
    ],
    "fbInfo": {
      "codeIndex": 30,
      "initIndex": 31
    }
  },
  {
    "name": "TOF",
    "bitSize": 192,
    "subItem": [
      {
        "name": "M",
        "type": "BOOL",
        "comment": "internal variable",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "StartTime",
        "type": "TIME",
        "comment": "internal variable",
        "bitSize": 32,
        "bitOffs": 32
      },
      {
        "name": "IN",
        "type": "BOOL",
        "comment": "starts timer with falling edge, resets timer with rising edge",
        "bitSize": 8,
        "bitOffs": 64
      },
      {
        "name": "PT",
        "type": "TIME",
        "comment": "time to pass, before Q is set",
        "bitSize": 32,
        "bitOffs": 96
      },
      {
        "name": "Q",
        "type": "BOOL",
        "comment": "is FALSE, PT seconds after IN had a falling edge",
        "bitSize": 8,
        "bitOffs": 128
      },
      {
        "name": "ET",
        "type": "TIME",
        "comment": "elapsed time",
        "bitSize": 32,
        "bitOffs": 160
      }
    ],
    "fbInfo": {
      "codeIndex": 32,
      "initIndex": 33
    }
  },
  {
    "name": "TON",
    "bitSize": 192,
    "subItem": [
      {
        "name": "M",
        "type": "BOOL",
        "comment": "internal variable",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "StartTime",
        "type": "TIME",
        "comment": "internal variable",
        "bitSize": 32,
        "bitOffs": 32
      },
      {
        "name": "IN",
        "type": "BOOL",
        "comment": "starts timer with rising edge, resets timer with falling edge",
        "bitSize": 8,
        "bitOffs": 64
      },
      {
        "name": "PT",
        "type": "TIME",
        "comment": "time to pass, before Q is set",
        "bitSize": 32,
        "bitOffs": 96
      },
      {
        "name": "Q",
        "type": "BOOL",
        "comment": "is TRUE, PT seconds after IN had a rising edge",
        "bitSize": 8,
        "bitOffs": 128
      },
      {
        "name": "ET",
        "type": "TIME",
        "comment": "elapsed time",
        "bitSize": 32,
        "bitOffs": 160
      }
    ],
    "fbInfo": {
      "codeIndex": 34,
      "initIndex": 35
    }
  },
  {
    "name": "TP",
    "bitSize": 160,
    "subItem": [
      {
        "name": "StartTime",
        "type": "TIME",
        "comment": "internal variable",
        "bitSize": 32,
        "bitOffs": 0
      },
      {
        "name": "IN",
        "type": "BOOL",
        "comment": "Trigger for Start of the Signal",
        "bitSize": 8,
        "bitOffs": 32
      },
      {
        "name": "PT",
        "type": "TIME",
        "comment": "The length of the High-Signal in 10ms",
        "bitSize": 32,
        "bitOffs": 64
      },
      {
        "name": "Q",
        "type": "BOOL",
        "comment": "The pulse",
        "bitSize": 8,
        "bitOffs": 96
      },
      {
        "name": "ET",
        "type": "TIME",
        "comment": "The current phase of the High-Signal",
        "bitSize": 32,
        "bitOffs": 128
      }
    ],
    "fbInfo": {
      "codeIndex": 36,
      "initIndex": 37
    }
  },
  {
    "name": "FW_AdsClearEvents",
    "bitSize": 544,
    "subItem": [
      {
        "name": "STAMP_I",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 0
      },
      {
        "name": "ACCESSCNT_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 32
      },
      {
        "name": "BUSY_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 64
      },
      {
        "name": "ERR_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 72
      },
      {
        "name": "ERRID_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 96
      },
      {
        "name": "READ_SAV_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 128
      },
      {
        "name": "TICKSTART_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 160
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "bitSize": 192,
        "bitOffs": 192
      },
      {
        "name": "bClear",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 384
      },
      {
        "name": "nMode",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 416
      },
      {
        "name": "tTimeout",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 448
      },
      {
        "name": "bBusy",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 480
      },
      {
        "name": "bError",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 488
      },
      {
        "name": "nErrId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 512
      }
    ],
    "fbInfo": {
      "codeIndex": 38,
      "initIndex": 39
    }
  },
  {
    "name": "FW_TcEvent",
    "bitSize": 672,
    "subItem": [
      {
        "name": "Class",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 0
      },
      {
        "name": "Prio",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 32
      },
      {
        "name": "Id",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 64
      },
      {
        "name": "bQuitRequired",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 96
      },
      {
        "name": "DataFormatStrAddress",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 128
      },
      {
        "name": "UserFlags",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 160
      },
      {
        "name": "Flags",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 192
      },
      {
        "name": "StreamType",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 224
      },
      {
        "name": "SourceString",
        "type": "STRING(15)",
        "comment": "TCEVENT_SRCNAMESIZE",
        "bitSize": 128,
        "bitOffs": 256
      },
      {
        "name": "SourceId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 384
      },
      {
        "name": "ProgId",
        "type": "STRING(31)",
        "comment": "TCEVENT_FMTPRGSIZE",
        "bitSize": 256,
        "bitOffs": 416
      }
    ]
  },
  {
    "name": "ARRAY [1..8] OF BYTE",
    "type": "BYTE",
    "bitSize": 64,
    "arrayInfo": {
      "lBound": 1,
      "elements": 8
    }
  },
  {
    "name": "FW_AdsLogEvent",
    "bitSize": 2336,
    "subItem": [
      {
        "name": "STAMPREQ_I",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 0
      },
      {
        "name": "STAMPRES_I",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 16
      },
      {
        "name": "STAMPSIG_I",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 32
      },
      {
        "name": "STAMPCON_I",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 48
      },
      {
        "name": "ACCESSCNT_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 64
      },
      {
        "name": "AMSADDR_I",
        "type": "ARRAY [1..8] OF BYTE",
        "bitSize": 64,
        "bitOffs": 96
      },
      {
        "name": "EVENT_I",
        "type": "FW_TcEvent",
        "bitSize": 672,
        "bitOffs": 160
      },
      {
        "name": "pTCEVENTSTREAM_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 832
      },
      {
        "name": "CBEVENTSTREAM_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 864
      },
      {
        "name": "nSTATE_I",
        "type": "DINT",
        "bitSize": 32,
        "bitOffs": 896
      },
      {
        "name": "nSTATEREQ_I",
        "type": "DINT",
        "bitSize": 32,
        "bitOffs": 928
      },
      {
        "name": "nSTATERES_I",
        "type": "DINT",
        "bitSize": 32,
        "bitOffs": 960
      },
      {
        "name": "nSTATESIG_I",
        "type": "DINT",
        "bitSize": 32,
        "bitOffs": 992
      },
      {
        "name": "nSTATECON_I",
        "type": "DINT",
        "bitSize": 32,
        "bitOffs": 1024
      },
      {
        "name": "ERR_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1056
      },
      {
        "name": "ERRID_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 1088
      },
      {
        "name": "bEVENT_SAV_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1120
      },
      {
        "name": "bEVENTQUIT_SAV_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1128
      },
      {
        "name": "TICKSTART_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 1152
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "bitSize": 192,
        "bitOffs": 1184
      },
      {
        "name": "nPort",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 1376
      },
      {
        "name": "bEvent",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1392
      },
      {
        "name": "bEventQuit",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1400
      },
      {
        "name": "stEventConfigData",
        "type": "FW_TcEvent",
        "bitSize": 672,
        "bitOffs": 1408
      },
      {
        "name": "pEventDataAddress",
        "type": "UDINT",
        "comment": "pointer",
        "bitSize": 32,
        "bitOffs": 2080
      },
      {
        "name": "cbEventDataLength",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 2112
      },
      {
        "name": "bFbCleanup",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 2144
      },
      {
        "name": "tTimeout",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 2176
      },
      {
        "name": "nEventState",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 2208
      },
      {
        "name": "bError",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 2240
      },
      {
        "name": "nErrId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 2272
      },
      {
        "name": "bQuit",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 2304
      }
    ],
    "fbInfo": {
      "codeIndex": 41,
      "initIndex": 42
    }
  },
  {
    "name": "FW_AdsRdWrt",
    "bitSize": 800,
    "subItem": [
      {
        "name": "STAMP_I",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 0
      },
      {
        "name": "ACCESSCNT_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 32
      },
      {
        "name": "BUSY_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 64
      },
      {
        "name": "ERR_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 72
      },
      {
        "name": "ERRID_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 96
      },
      {
        "name": "WRTRD_SAV_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 128
      },
      {
        "name": "PDESTADDR_I",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 160
      },
      {
        "name": "TICKSTART_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 192
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "bitSize": 192,
        "bitOffs": 224
      },
      {
        "name": "nPort",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 416
      },
      {
        "name": "nIdxGrp",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 448
      },
      {
        "name": "nIdxOffs",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 480
      },
      {
        "name": "cbWriteLen",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 512
      },
      {
        "name": "cbReadLen",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 544
      },
      {
        "name": "pWriteBuff",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 576
      },
      {
        "name": "pReadBuff",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 608
      },
      {
        "name": "bExecute",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 640
      },
      {
        "name": "tTimeout",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 672
      },
      {
        "name": "bBusy",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 704
      },
      {
        "name": "bError",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 712
      },
      {
        "name": "nErrId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 736
      },
      {
        "name": "cbRead",
        "type": "UDINT",
        "comment": "count of bytes actually read",
        "bitSize": 32,
        "bitOffs": 768
      }
    ],
    "fbInfo": {
      "codeIndex": 45,
      "initIndex": 46
    }
  },
  {
    "name": "FW_AdsRdWrtInd",
    "bitSize": 448,
    "subItem": [
      {
        "name": "CLEAR_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "bClear",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 8
      },
      {
        "name": "bValid",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 16
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "bitSize": 192,
        "bitOffs": 24
      },
      {
        "name": "nPort",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 224
      },
      {
        "name": "nInvokeId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 256
      },
      {
        "name": "nIdxGrp",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 288
      },
      {
        "name": "nIdxOffs",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 320
      },
      {
        "name": "cbReadLen",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 352
      },
      {
        "name": "cbWriteLen",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 384
      },
      {
        "name": "pWriteBuff",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 416
      }
    ],
    "fbInfo": {
      "codeIndex": 47,
      "initIndex": 48
    }
  },
  {
    "name": "FW_AdsRdWrtRes",
    "bitSize": 384,
    "subItem": [
      {
        "name": "RESPOND_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "bitSize": 192,
        "bitOffs": 8
      },
      {
        "name": "nPort",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 208
      },
      {
        "name": "nInvokeId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 224
      },
      {
        "name": "nErrId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 256
      },
      {
        "name": "cbReadLen",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 288
      },
      {
        "name": "pReadBuff",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 320
      },
      {
        "name": "bRespond",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 352
      }
    ],
    "fbInfo": {
      "codeIndex": 49,
      "initIndex": 50
    }
  },
  {
    "name": "FW_AdsRead",
    "bitSize": 704,
    "subItem": [
      {
        "name": "STAMP_I",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 0
      },
      {
        "name": "ACCESSCNT_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 32
      },
      {
        "name": "BUSY_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 64
      },
      {
        "name": "ERR_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 72
      },
      {
        "name": "ERRID_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 96
      },
      {
        "name": "READ_SAV_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 128
      },
      {
        "name": "TICKSTART_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 160
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "bitSize": 192,
        "bitOffs": 192
      },
      {
        "name": "nPort",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 384
      },
      {
        "name": "nIdxGrp",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 416
      },
      {
        "name": "nIdxOffs",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 448
      },
      {
        "name": "cbReadLen",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 480
      },
      {
        "name": "pReadBuff",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 512
      },
      {
        "name": "bExecute",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 544
      },
      {
        "name": "tTimeout",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 576
      },
      {
        "name": "bBusy",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 608
      },
      {
        "name": "bError",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 616
      },
      {
        "name": "nErrId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 640
      },
      {
        "name": "cbRead",
        "type": "UDINT",
        "comment": "count of bytes actually read",
        "bitSize": 32,
        "bitOffs": 672
      }
    ],
    "fbInfo": {
      "codeIndex": 51,
      "initIndex": 52
    }
  },
  {
    "name": "FW_AdsReadDeviceInfo",
    "bitSize": 704,
    "subItem": [
      {
        "name": "STAMP_I",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 0
      },
      {
        "name": "ACCESSCNT_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 32
      },
      {
        "name": "BUSY_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 64
      },
      {
        "name": "ERR_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 72
      },
      {
        "name": "ERRID_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 96
      },
      {
        "name": "RDINFO_SAV_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 128
      },
      {
        "name": "TICKSTART_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 160
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "bitSize": 192,
        "bitOffs": 192
      },
      {
        "name": "nPort",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 384
      },
      {
        "name": "bExecute",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 400
      },
      {
        "name": "tTimeout",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 416
      },
      {
        "name": "bBusy",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 448
      },
      {
        "name": "bError",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 456
      },
      {
        "name": "nErrId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 480
      },
      {
        "name": "sDevName",
        "type": "STRING(19)",
        "bitSize": 160,
        "bitOffs": 512
      },
      {
        "name": "nDevVersion",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 672
      }
    ],
    "fbInfo": {
      "codeIndex": 53,
      "initIndex": 54
    }
  },
  {
    "name": "FW_AdsReadInd",
    "bitSize": 384,
    "subItem": [
      {
        "name": "CLEAR_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "bClear",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 8
      },
      {
        "name": "bValid",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 16
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "bitSize": 192,
        "bitOffs": 24
      },
      {
        "name": "nPort",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 224
      },
      {
        "name": "nInvokeId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 256
      },
      {
        "name": "nIdxGrp",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 288
      },
      {
        "name": "nIdxOffs",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 320
      },
      {
        "name": "cbReadLen",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 352
      }
    ],
    "fbInfo": {
      "codeIndex": 55,
      "initIndex": 56
    }
  },
  {
    "name": "FW_AdsReadRes",
    "bitSize": 384,
    "subItem": [
      {
        "name": "RESPOND_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "bitSize": 192,
        "bitOffs": 8
      },
      {
        "name": "nPort",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 208
      },
      {
        "name": "nInvokeId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 224
      },
      {
        "name": "nErrId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 256
      },
      {
        "name": "cbReadLen",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 288
      },
      {
        "name": "pReadBuff",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 320
      },
      {
        "name": "bRespond",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 352
      }
    ],
    "fbInfo": {
      "codeIndex": 57,
      "initIndex": 58
    }
  },
  {
    "name": "FW_AdsReadState",
    "bitSize": 544,
    "subItem": [
      {
        "name": "STAMP_I",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 0
      },
      {
        "name": "ACCESSCNT_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 32
      },
      {
        "name": "BUSY_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 64
      },
      {
        "name": "ERR_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 72
      },
      {
        "name": "ERRID_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 96
      },
      {
        "name": "RDSTATE_SAV_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 128
      },
      {
        "name": "TICKSTART_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 160
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "bitSize": 192,
        "bitOffs": 192
      },
      {
        "name": "nPort",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 384
      },
      {
        "name": "bExecute",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 400
      },
      {
        "name": "tTimeout",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 416
      },
      {
        "name": "bBusy",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 448
      },
      {
        "name": "bError",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 456
      },
      {
        "name": "nErrId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 480
      },
      {
        "name": "nAdsState",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 512
      },
      {
        "name": "nDevState",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 528
      }
    ],
    "fbInfo": {
      "codeIndex": 59,
      "initIndex": 60
    }
  },
  {
    "name": "FW_AdsWrite",
    "bitSize": 672,
    "subItem": [
      {
        "name": "STAMP_I",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 0
      },
      {
        "name": "ACCESSCNT_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 32
      },
      {
        "name": "BUSY_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 64
      },
      {
        "name": "ERR_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 72
      },
      {
        "name": "ERRID_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 96
      },
      {
        "name": "WRITE_SAV_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 128
      },
      {
        "name": "TICKSTART_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 160
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "bitSize": 192,
        "bitOffs": 192
      },
      {
        "name": "nPort",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 384
      },
      {
        "name": "nIdxGrp",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 416
      },
      {
        "name": "nIdxOffs",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 448
      },
      {
        "name": "cbWriteLen",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 480
      },
      {
        "name": "pWriteBuff",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 512
      },
      {
        "name": "bExecute",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 544
      },
      {
        "name": "tTimeout",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 576
      },
      {
        "name": "bBusy",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 608
      },
      {
        "name": "bError",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 616
      },
      {
        "name": "nErrId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 640
      }
    ],
    "fbInfo": {
      "codeIndex": 61,
      "initIndex": 62
    }
  },
  {
    "name": "FW_AdsWriteControl",
    "bitSize": 640,
    "subItem": [
      {
        "name": "STAMP_I",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 0
      },
      {
        "name": "ACCESSCNT_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 32
      },
      {
        "name": "BUSY_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 64
      },
      {
        "name": "ERR_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 72
      },
      {
        "name": "ERRID_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 96
      },
      {
        "name": "WRITE_SAV_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 128
      },
      {
        "name": "TICKSTART_I",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 160
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "bitSize": 192,
        "bitOffs": 192
      },
      {
        "name": "nPort",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 384
      },
      {
        "name": "nAdsState",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 400
      },
      {
        "name": "nDevState",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 416
      },
      {
        "name": "cbWriteLen",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 448
      },
      {
        "name": "pWriteBuff",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 480
      },
      {
        "name": "bExecute",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 512
      },
      {
        "name": "tTimeout",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 544
      },
      {
        "name": "bBusy",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 576
      },
      {
        "name": "bError",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 584
      },
      {
        "name": "nErrId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 608
      }
    ],
    "fbInfo": {
      "codeIndex": 63,
      "initIndex": 64
    }
  },
  {
    "name": "FW_AdsWriteInd",
    "bitSize": 416,
    "subItem": [
      {
        "name": "CLEAR_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "bClear",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 8
      },
      {
        "name": "bValid",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 16
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "bitSize": 192,
        "bitOffs": 24
      },
      {
        "name": "nPort",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 224
      },
      {
        "name": "nInvokeId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 256
      },
      {
        "name": "nIdxGrp",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 288
      },
      {
        "name": "nIdxOffs",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 320
      },
      {
        "name": "cbWriteLen",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 352
      },
      {
        "name": "pWriteBuff",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 384
      }
    ],
    "fbInfo": {
      "codeIndex": 65,
      "initIndex": 66
    }
  },
  {
    "name": "FW_AdsWriteRes",
    "bitSize": 320,
    "subItem": [
      {
        "name": "RESPOND_I",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "bitSize": 192,
        "bitOffs": 8
      },
      {
        "name": "nPort",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 208
      },
      {
        "name": "nInvokeId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 224
      },
      {
        "name": "nErrId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 256
      },
      {
        "name": "bRespond",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 288
      }
    ],
    "fbInfo": {
      "codeIndex": 67,
      "initIndex": 68
    }
  },
  {
    "name": "ARRAY [0..249] OF UINT",
    "type": "UINT",
    "bitSize": 4000,
    "arrayInfo": {
      "lBound": 0,
      "elements": 250
    }
  },
  {
    "name": "FW_DRand",
    "bitSize": 4160,
    "subItem": [
      {
        "name": "FirstCall_i",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "HoldRand_i",
        "type": "DINT",
        "bitSize": 32,
        "bitOffs": 32
      },
      {
        "name": "R250_Buffer_i",
        "type": "ARRAY [0..249] OF UINT",
        "bitSize": 4000,
        "bitOffs": 64
      },
      {
        "name": "R250_Index",
        "type": "INT",
        "bitSize": 16,
        "bitOffs": 4064
      },
      {
        "name": "nSeed",
        "type": "INT",
        "bitSize": 16,
        "bitOffs": 4080
      },
      {
        "name": "fRndNum",
        "type": "LREAL",
        "bitSize": 64,
        "bitOffs": 4096
      }
    ],
    "fbInfo": {
      "codeIndex": 69,
      "initIndex": 70
    }
  },
  {
    "name": "FW_GetCpuAccount",
    "bitSize": 32,
    "subItem": {
      "name": "dwCpuAccount",
      "type": "UDINT",
      "bitSize": 32,
      "bitOffs": 0
    },
    "fbInfo": {
      "codeIndex": 71,
      "initIndex": 72
    }
  },
  {
    "name": "FW_GetCpuCounter",
    "bitSize": 64,
    "subItem": [
      {
        "name": "dwCpuCntLo",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 0
      },
      {
        "name": "dwCpuCntHi",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 32
      }
    ],
    "fbInfo": {
      "codeIndex": 73,
      "initIndex": 74
    }
  },
  {
    "name": "FW_GetCurTaskIndex",
    "bitSize": 8,
    "subItem": {
      "name": "nIndex",
      "type": "BYTE",
      "bitSize": 8,
      "bitOffs": 0
    },
    "fbInfo": {
      "codeIndex": 75,
      "initIndex": 76
    }
  },
  {
    "name": "FW_GetSystemTime",
    "bitSize": 64,
    "subItem": [
      {
        "name": "dwTimeLo",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 0
      },
      {
        "name": "dwTimeHi",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 32
      }
    ],
    "fbInfo": {
      "codeIndex": 77,
      "initIndex": 78
    }
  },
  {
    "name": "FW_NoOfByte",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "NoOfByte_Byte",
        "enum": 1
      },
      {
        "text": "NoOfByte_Word",
        "enum": 2
      },
      {
        "text": "NoOfByte_DWord",
        "enum": 4
      }
    ]
  },
  {
    "name": "FW_SystemInfoType",
    "bitSize": 336,
    "subItem": [
      {
        "name": "runTimeNo",
        "type": "BYTE",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "projectName",
        "type": "STRING(32)",
        "bitSize": 264,
        "bitOffs": 8
      },
      {
        "name": "numberOfTasks",
        "type": "BYTE",
        "bitSize": 8,
        "bitOffs": 272
      },
      {
        "name": "onlineChangeCount",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 288
      },
      {
        "name": "bootDataFlags",
        "type": "BYTE",
        "bitSize": 8,
        "bitOffs": 304
      },
      {
        "name": "systemStateFlags",
        "type": "WORD",
        "bitSize": 16,
        "bitOffs": 320
      }
    ]
  },
  {
    "name": "FW_SystemTaskInfoType",
    "bitSize": 288,
    "subItem": [
      {
        "name": "active",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "taskName",
        "type": "STRING(16)",
        "bitSize": 136,
        "bitOffs": 8
      },
      {
        "name": "firstCycle",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 144
      },
      {
        "name": "cycleTimeExceeded",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 152
      },
      {
        "name": "cycleTime",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 160
      },
      {
        "name": "lastExecTime",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 192
      },
      {
        "name": "priority",
        "type": "BYTE",
        "bitSize": 8,
        "bitOffs": 224
      },
      {
        "name": "cycleCount",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 256
      }
    ]
  },
  {
    "name": "T_AmsNetId",
    "type": "STRING(23)",
    "bitSize": 192
  },
  {
    "name": "T_MaxString",
    "type": "STRING(255)",
    "bitSize": 2048
  },
  {
    "name": "TcEvent",
    "type": "FW_TcEvent",
    "bitSize": 672
  },
  {
    "name": "T_AmsPort",
    "type": "UINT",
    "bitSize": 16
  },
  {
    "name": "ADSREAD",
    "bitSize": 1184,
    "subItem": [
      {
        "name": "fbAdsRead",
        "type": "FW_AdsRead",
        "bitSize": 704,
        "bitOffs": 0
      },
      {
        "name": "NETID",
        "type": "STRING(23)",
        "bitSize": 192,
        "bitOffs": 704
      },
      {
        "name": "PORT",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 896
      },
      {
        "name": "IDXGRP",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 928
      },
      {
        "name": "IDXOFFS",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 960
      },
      {
        "name": "LEN",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 992
      },
      {
        "name": "DESTADDR",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 1024
      },
      {
        "name": "READ",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1056
      },
      {
        "name": "TMOUT",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 1088
      },
      {
        "name": "BUSY",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1120
      },
      {
        "name": "ERR",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1128
      },
      {
        "name": "ERRID",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 1152
      }
    ],
    "fbInfo": {
      "codeIndex": 109,
      "initIndex": 110
    }
  },
  {
    "name": "ADSWRTCTL",
    "bitSize": 1088,
    "subItem": [
      {
        "name": "fbAdsWriteControl",
        "type": "FW_AdsWriteControl",
        "bitSize": 640,
        "bitOffs": 0
      },
      {
        "name": "NETID",
        "type": "STRING(23)",
        "bitSize": 192,
        "bitOffs": 640
      },
      {
        "name": "PORT",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 832
      },
      {
        "name": "ADSSTATE",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 848
      },
      {
        "name": "DEVSTATE",
        "type": "UINT",
        "bitSize": 16,
        "bitOffs": 864
      },
      {
        "name": "LEN",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 896
      },
      {
        "name": "SRCADDR",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 928
      },
      {
        "name": "WRITE",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 960
      },
      {
        "name": "TMOUT",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 992
      },
      {
        "name": "BUSY",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1024
      },
      {
        "name": "ERR",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1032
      },
      {
        "name": "ERRID",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 1056
      }
    ],
    "fbInfo": {
      "codeIndex": 123,
      "initIndex": 124
    }
  },
  {
    "name": "ARRAY [0..5] OF BYTE",
    "type": "BYTE",
    "bitSize": 48,
    "arrayInfo": {
      "lBound": 0,
      "elements": 6
    }
  },
  {
    "name": "T_AmsNetIdArr",
    "type": "ARRAY [0..5] OF BYTE",
    "bitSize": 48
  },
  {
    "name": "ARRAY [0..3] OF BYTE",
    "type": "BYTE",
    "bitSize": 32,
    "arrayInfo": {
      "lBound": 0,
      "elements": 4
    }
  },
  {
    "name": "T_IPv4AddrArr",
    "type": "ARRAY [0..3] OF BYTE",
    "bitSize": 32
  },
  {
    "name": "T_IPv4Addr",
    "type": "STRING(15)",
    "bitSize": 128
  },
  {
    "name": "E_IOAccessSize",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "NoOfByte_Byte",
        "enum": 1
      },
      {
        "text": "NoOfByte_Word",
        "enum": 2
      },
      {
        "text": "NoOfByte_DWord",
        "enum": 4
      }
    ]
  },
  {
    "name": "E_OpenPath",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "PATH_GENERIC",
        "enum": 1
      },
      {
        "text": "PATH_BOOTPRJ",
        "enum": 2
      },
      {
        "text": "PATH_BOOTDATA",
        "enum": 3
      },
      {
        "text": "PATH_BOOTPATH",
        "enum": 4
      },
      {
        "text": "PATH_USERPATH1",
        "enum": 11
      },
      {
        "text": "PATH_USERPATH2",
        "enum": 12
      },
      {
        "text": "PATH_USERPATH3",
        "enum": 13
      },
      {
        "text": "PATH_USERPATH4",
        "enum": 14
      },
      {
        "text": "PATH_USERPATH5",
        "enum": 15
      },
      {
        "text": "PATH_USERPATH6",
        "enum": 16
      },
      {
        "text": "PATH_USERPATH7",
        "enum": 17
      },
      {
        "text": "PATH_USERPATH8",
        "enum": 18
      },
      {
        "text": "PATH_USERPATH9",
        "enum": 19
      }
    ]
  },
  {
    "name": "FB_FileClose",
    "bitSize": 1120,
    "subItem": [
      {
        "name": "fbAdsRdWrt",
        "type": "FW_AdsRdWrt",
        "bitSize": 800,
        "bitOffs": 0
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "comment": "ams net id",
        "bitSize": 192,
        "bitOffs": 800
      },
      {
        "name": "hFile",
        "type": "UINT",
        "comment": "file handle obtained through 'open'",
        "bitSize": 16,
        "bitOffs": 992
      },
      {
        "name": "bExecute",
        "type": "BOOL",
        "comment": "close control input",
        "bitSize": 8,
        "bitOffs": 1008
      },
      {
        "name": "tTimeout",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 1024
      },
      {
        "name": "bBusy",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1056
      },
      {
        "name": "bError",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1064
      },
      {
        "name": "nErrId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 1088
      }
    ],
    "fbInfo": {
      "codeIndex": 157,
      "initIndex": 158
    }
  },
  {
    "name": "FB_FileDelete",
    "bitSize": 3200,
    "subItem": [
      {
        "name": "fbAdsRdWrt",
        "type": "FW_AdsRdWrt",
        "bitSize": 800,
        "bitOffs": 0
      },
      {
        "name": "tmpOpenMode",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 800
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "comment": "ams net id",
        "bitSize": 192,
        "bitOffs": 832
      },
      {
        "name": "sPathName",
        "type": "STRING(255)",
        "comment": "file path and name",
        "bitSize": 2048,
        "bitOffs": 1024
      },
      {
        "name": "ePath",
        "type": "E_OpenPath",
        "comment": "Default: Open generic file",
        "bitSize": 16,
        "bitOffs": 3072
      },
      {
        "name": "bExecute",
        "type": "BOOL",
        "comment": "open control input",
        "bitSize": 8,
        "bitOffs": 3088
      },
      {
        "name": "tTimeout",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 3104
      },
      {
        "name": "bBusy",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 3136
      },
      {
        "name": "bError",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 3144
      },
      {
        "name": "nErrId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 3168
      }
    ],
    "fbInfo": {
      "codeIndex": 159,
      "initIndex": 160
    }
  },
  {
    "name": "FB_FileOpen",
    "bitSize": 3360,
    "subItem": [
      {
        "name": "fbAdsRdWrt",
        "type": "FW_AdsRdWrt",
        "bitSize": 800,
        "bitOffs": 0
      },
      {
        "name": "tmpOpenMode",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 800
      },
      {
        "name": "tmpHndl",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 832
      },
      {
        "name": "fbTrigger",
        "type": "R_TRIG",
        "bitSize": 24,
        "bitOffs": 864
      },
      {
        "name": "state",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 896
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "comment": "ams net id",
        "bitSize": 192,
        "bitOffs": 928
      },
      {
        "name": "sPathName",
        "type": "STRING(255)",
        "comment": "max filename length = 255",
        "bitSize": 2048,
        "bitOffs": 1120
      },
      {
        "name": "nMode",
        "type": "DWORD",
        "comment": "open mode flags",
        "bitSize": 32,
        "bitOffs": 3168
      },
      {
        "name": "ePath",
        "type": "E_OpenPath",
        "comment": "Default: Open generic file",
        "bitSize": 16,
        "bitOffs": 3200
      },
      {
        "name": "bExecute",
        "type": "BOOL",
        "comment": "open control input",
        "bitSize": 8,
        "bitOffs": 3216
      },
      {
        "name": "tTimeout",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 3232
      },
      {
        "name": "bBusy",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 3264
      },
      {
        "name": "bError",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 3272
      },
      {
        "name": "nErrId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 3296
      },
      {
        "name": "hFile",
        "type": "UINT",
        "comment": "file handle",
        "bitSize": 16,
        "bitOffs": 3328
      }
    ],
    "fbInfo": {
      "codeIndex": 163,
      "initIndex": 164
    }
  },
  {
    "name": "FB_FilePuts",
    "bitSize": 3168,
    "subItem": [
      {
        "name": "fbAdsRdWrt",
        "type": "FW_AdsRdWrt",
        "bitSize": 800,
        "bitOffs": 0
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "comment": "ams net id",
        "bitSize": 192,
        "bitOffs": 800
      },
      {
        "name": "hFile",
        "type": "UINT",
        "comment": "file handle",
        "bitSize": 16,
        "bitOffs": 992
      },
      {
        "name": "sLine",
        "type": "STRING(255)",
        "comment": "string to write",
        "bitSize": 2048,
        "bitOffs": 1008
      },
      {
        "name": "bExecute",
        "type": "BOOL",
        "comment": "control input",
        "bitSize": 8,
        "bitOffs": 3056
      },
      {
        "name": "tTimeout",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 3072
      },
      {
        "name": "bBusy",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 3104
      },
      {
        "name": "bError",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 3112
      },
      {
        "name": "nErrId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 3136
      }
    ],
    "fbInfo": {
      "codeIndex": 165,
      "initIndex": 166
    }
  },
  {
    "name": "E_SeekOrigin",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "SEEK_SET",
        "enum": 0
      },
      {
        "text": "SEEK_CUR",
        "enum": 1
      },
      {
        "text": "SEEK_END",
        "enum": 2
      }
    ]
  },
  {
    "name": "FB_FileTell",
    "bitSize": 1152,
    "subItem": [
      {
        "name": "fbAdsRdWrt",
        "type": "FW_AdsRdWrt",
        "bitSize": 800,
        "bitOffs": 0
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "comment": "ams net id",
        "bitSize": 192,
        "bitOffs": 800
      },
      {
        "name": "hFile",
        "type": "UINT",
        "comment": "file handle",
        "bitSize": 16,
        "bitOffs": 992
      },
      {
        "name": "bExecute",
        "type": "BOOL",
        "comment": "control input",
        "bitSize": 8,
        "bitOffs": 1008
      },
      {
        "name": "tTimeout",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 1024
      },
      {
        "name": "bBusy",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1056
      },
      {
        "name": "bError",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1064
      },
      {
        "name": "nErrId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 1088
      },
      {
        "name": "nSeekPos",
        "type": "DINT",
        "comment": "On error, nSEEKPOS returns -1",
        "bitSize": 32,
        "bitOffs": 1120
      }
    ],
    "fbInfo": {
      "codeIndex": 173,
      "initIndex": 174
    }
  },
  {
    "name": "FB_FileWrite",
    "bitSize": 1312,
    "subItem": [
      {
        "name": "fbAdsRdWrt",
        "type": "FW_AdsRdWrt",
        "bitSize": 800,
        "bitOffs": 0
      },
      {
        "name": "fbTrigger",
        "type": "R_TRIG",
        "bitSize": 24,
        "bitOffs": 800
      },
      {
        "name": "state",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 832
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "comment": "ams net id",
        "bitSize": 192,
        "bitOffs": 864
      },
      {
        "name": "hFile",
        "type": "UINT",
        "comment": "file handle",
        "bitSize": 16,
        "bitOffs": 1056
      },
      {
        "name": "pWriteBuff",
        "type": "DWORD",
        "comment": "buffer address for write",
        "bitSize": 32,
        "bitOffs": 1088
      },
      {
        "name": "cbWriteLen",
        "type": "UDINT",
        "comment": "count of bytes for write",
        "bitSize": 32,
        "bitOffs": 1120
      },
      {
        "name": "bExecute",
        "type": "BOOL",
        "comment": "write control input",
        "bitSize": 8,
        "bitOffs": 1152
      },
      {
        "name": "tTimeout",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 1184
      },
      {
        "name": "bBusy",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1216
      },
      {
        "name": "bError",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1224
      },
      {
        "name": "nErrId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 1248
      },
      {
        "name": "cbWrite",
        "type": "UDINT",
        "comment": "count of bytes actually written",
        "bitSize": 32,
        "bitOffs": 1280
      }
    ],
    "fbInfo": {
      "codeIndex": 175,
      "initIndex": 176
    }
  },
  {
    "name": "E_TcEventClass",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "TCEVENTCLASS_NONE",
        "enum": 0
      },
      {
        "text": "TCEVENTCLASS_MAINTENANCE",
        "enum": 1
      },
      {
        "text": "TCEVENTCLASS_MESSAGE",
        "enum": 2
      },
      {
        "text": "TCEVENTCLASS_HINT",
        "enum": 3
      },
      {
        "text": "TCEVENTCLASS_STATEINFO",
        "enum": 4
      },
      {
        "text": "TCEVENTCLASS_INSTRUCTION",
        "enum": 5
      },
      {
        "text": "TCEVENTCLASS_WARNING",
        "enum": 6
      },
      {
        "text": "TCEVENTCLASS_ALARM",
        "enum": 7
      },
      {
        "text": "TCEVENTCLASS_PARAMERROR",
        "enum": 8
      }
    ]
  },
  {
    "name": "E_TcEventClearModes",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "TCEVENTLOGIOFFS_CLEARACTIVE",
        "enum": 1
      },
      {
        "text": "TCEVENTLOGIOFFS_CLEARLOGGED",
        "enum": 2
      },
      {
        "text": "TCEVENTLOGIOFFS_CLEARALL",
        "enum": 3
      }
    ]
  },
  {
    "name": "E_TcEventPriority",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": {
      "text": "TCEVENTPRIO_IMPLICIT",
      "enum": 0
    }
  },
  {
    "name": "E_TcEventStreamType",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "TCEVENTSTREAM_INVALID",
        "enum": 0
      },
      {
        "text": "TCEVENTSTREAM_SIMPLE",
        "enum": 1
      },
      {
        "text": "TCEVENTSTREAM_NORMAL",
        "enum": 2
      },
      {
        "text": "TCEVENTSTREAM_NOSOURCE",
        "enum": 3
      },
      {
        "text": "TCEVENTSTREAM_CLASSID",
        "enum": 4
      },
      {
        "text": "TCEVENTSTREAM_CLSNOSRC",
        "enum": 5
      },
      {
        "text": "TCEVENTSTREAM_READCLASSCOUNT",
        "enum": 6
      },
      {
        "text": "TCEVENTSTREAM_MAXTYPE",
        "enum": 7
      }
    ]
  },
  {
    "name": "SYSTEMINFOTYPE",
    "type": "FW_SystemInfoType",
    "bitSize": 336,
    "properties": {
      "property": {
        "name": "Description",
        "value": "System info type"
      }
    }
  },
  {
    "name": "SYSTEMTASKINFOTYPE",
    "type": "FW_SystemTaskInfoType",
    "bitSize": 288,
    "properties": {
      "property": {
        "name": "Description",
        "value": "System task info"
      }
    }
  },
  {
    "name": "E_ArgType",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "ARGTYPE_UNKNOWN",
        "enum": 0
      },
      {
        "text": "ARGTYPE_BYTE",
        "enum": 1
      },
      {
        "text": "ARGTYPE_WORD",
        "enum": 2
      },
      {
        "text": "ARGTYPE_DWORD",
        "enum": 3
      },
      {
        "text": "ARGTYPE_REAL",
        "enum": 4
      },
      {
        "text": "ARGTYPE_LREAL",
        "enum": 5
      },
      {
        "text": "ARGTYPE_SINT",
        "enum": 6
      },
      {
        "text": "ARGTYPE_INT",
        "enum": 7
      },
      {
        "text": "ARGTYPE_DINT",
        "enum": 8
      },
      {
        "text": "ARGTYPE_USINT",
        "enum": 9
      },
      {
        "text": "ARGTYPE_UINT",
        "enum": 10
      },
      {
        "text": "ARGTYPE_UDINT",
        "enum": 11
      },
      {
        "text": "ARGTYPE_STRING",
        "enum": 12
      },
      {
        "text": "ARGTYPE_BOOL",
        "enum": 13
      },
      {
        "text": "ARGTYPE_BIGTYPE",
        "enum": 14
      },
      {
        "text": "ARGTYPE_ULARGE",
        "enum": 15
      },
      {
        "text": "ARGTYPE_UHUGE",
        "enum": 16
      },
      {
        "text": "ARGTYPE_LARGE",
        "enum": 17
      },
      {
        "text": "ARGTYPE_HUGE",
        "enum": 18
      }
    ]
  },
  {
    "name": "T_Arg",
    "bitSize": 96,
    "subItem": [
      {
        "name": "eType",
        "type": "E_ArgType",
        "comment": "Argument data type",
        "bitSize": 16,
        "bitOffs": 0
      },
      {
        "name": "cbLen",
        "type": "UDINT",
        "comment": "Argument data byte length (if eType = ARGTYPE_STRING => cbLen = length of string + 1 (null delimiter).",
        "bitSize": 32,
        "bitOffs": 32
      },
      {
        "name": "pData",
        "type": "UDINT",
        "comment": "Pointer to argument data",
        "bitSize": 32,
        "bitOffs": 64
      }
    ]
  },
  {
    "name": "T_ULARGE_INTEGER",
    "bitSize": 64,
    "subItem": [
      {
        "name": "dwLowPart",
        "type": "DWORD",
        "comment": "Lower double word",
        "bitSize": 32,
        "bitOffs": 0
      },
      {
        "name": "dwHighPart",
        "type": "DWORD",
        "comment": "Higher double word",
        "bitSize": 32,
        "bitOffs": 32
      }
    ]
  },
  {
    "name": "E_TimeZoneID",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "eTimeZoneID_Invalid",
        "enum": -1
      },
      {
        "text": "eTimeZoneID_Unknown",
        "enum": 0
      },
      {
        "text": "eTimeZoneID_Standard",
        "enum": 1
      },
      {
        "text": "eTimeZoneID_Daylight",
        "enum": 2
      }
    ]
  },
  {
    "name": "TIMESTRUCT",
    "bitSize": 128,
    "subItem": [
      {
        "name": "wYear",
        "type": "WORD",
        "comment": "Year: 1970..2106",
        "bitSize": 16,
        "bitOffs": 0
      },
      {
        "name": "wMonth",
        "type": "WORD",
        "comment": "Month: 1..12 (January = 1, February = 2 and so on )",
        "bitSize": 16,
        "bitOffs": 16
      },
      {
        "name": "wDayOfWeek",
        "type": "WORD",
        "comment": "Day of the week: 0..6 (Sunday = 0, Monday = 1 and so on)",
        "bitSize": 16,
        "bitOffs": 32
      },
      {
        "name": "wDay",
        "type": "WORD",
        "comment": "Day of the month: 1..31",
        "bitSize": 16,
        "bitOffs": 48
      },
      {
        "name": "wHour",
        "type": "WORD",
        "comment": "Hour: 0..23",
        "bitSize": 16,
        "bitOffs": 64
      },
      {
        "name": "wMinute",
        "type": "WORD",
        "comment": "Munute: 0..59",
        "bitSize": 16,
        "bitOffs": 80
      },
      {
        "name": "wSecond",
        "type": "WORD",
        "comment": "Second: 0..59",
        "bitSize": 16,
        "bitOffs": 96
      },
      {
        "name": "wMilliseconds",
        "type": "WORD",
        "comment": "Milliseconds: 0..999",
        "bitSize": 16,
        "bitOffs": 112
      }
    ]
  },
  {
    "name": "E_TypeFieldParam",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "TYPEFIELD_UNKNOWN",
        "enum": 0
      },
      {
        "text": "TYPEFIELD_B",
        "enum": 1
      },
      {
        "text": "TYPEFIELD_O",
        "enum": 2
      },
      {
        "text": "TYPEFIELD_U",
        "enum": 3
      },
      {
        "text": "TYPEFIELD_C",
        "enum": 4
      },
      {
        "text": "TYPEFIELD_F",
        "enum": 5
      },
      {
        "text": "TYPEFIELD_D",
        "enum": 6
      },
      {
        "text": "TYPEFIELD_S",
        "enum": 7
      },
      {
        "text": "TYPEFIELD_XU",
        "enum": 8
      },
      {
        "text": "TYPEFIELD_XL",
        "enum": 9
      },
      {
        "text": "TYPEFIELD_EU",
        "enum": 10
      },
      {
        "text": "TYPEFIELD_EL",
        "enum": 11
      }
    ]
  },
  {
    "name": "E_RouteTransportType",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "eRouteTransport_None",
        "enum": 0
      },
      {
        "text": "eRouteTransport_TCP_IP",
        "enum": 1
      },
      {
        "text": "eRouteTransport_IIO_LIGHTBUS",
        "enum": 2
      },
      {
        "text": "eRouteTransport_PROFIBUS_DP",
        "enum": 3
      },
      {
        "text": "eRouteTransport_PCI_ISA_BUS",
        "enum": 4
      },
      {
        "text": "eRouteTransport_ADS_UDP",
        "enum": 5
      },
      {
        "text": "eRouteTransport_FATP_UDP",
        "enum": 6
      },
      {
        "text": "eRouteTransport_COM_PORT",
        "enum": 7
      },
      {
        "text": "eRouteTransport_USB",
        "enum": 8
      },
      {
        "text": "eRouteTransport_CAN_OPEN",
        "enum": 9
      },
      {
        "text": "eRouteTransport_DEVICE_NET",
        "enum": 10
      },
      {
        "text": "eRouteTransport_SSB",
        "enum": 11
      },
      {
        "text": "eRouteTransport_SOAP",
        "enum": 12
      }
    ]
  },
  {
    "name": "ST_AmsRouteEntry",
    "bitSize": 1184,
    "subItem": [
      {
        "name": "sName",
        "type": "STRING(31)",
        "comment": "String containing route name",
        "bitSize": 256,
        "bitOffs": 0
      },
      {
        "name": "sNetID",
        "type": "STRING(23)",
        "comment": "TwinCAT network address (ams net id)",
        "bitSize": 192,
        "bitOffs": 256
      },
      {
        "name": "sAddress",
        "type": "STRING(79)",
        "comment": "String containing route network Ipv4 address or host name.",
        "bitSize": 640,
        "bitOffs": 448
      },
      {
        "name": "eTransport",
        "type": "E_RouteTransportType",
        "comment": "Route transport type",
        "bitSize": 16,
        "bitOffs": 1088
      },
      {
        "name": "tTimeout",
        "type": "TIME",
        "comment": "Route timeout",
        "bitSize": 32,
        "bitOffs": 1120
      },
      {
        "name": "dwFlags",
        "type": "DWORD",
        "comment": "Additional flags",
        "bitSize": 32,
        "bitOffs": 1152
      }
    ]
  },
  {
    "name": "E_AmsLoggerMode",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "AMSLOGGER_RUN",
        "enum": 1
      },
      {
        "text": "AMSLOGGER_STOP",
        "enum": 2
      }
    ]
  },
  {
    "name": "E_FileRBufferCmd",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "eFileRBuffer_None",
        "enum": 0
      },
      {
        "text": "eFileRBuffer_Open",
        "enum": 1
      },
      {
        "text": "eFileRBuffer_Add",
        "enum": 2
      },
      {
        "text": "eFileRBuffer_Remove",
        "enum": 3
      },
      {
        "text": "eFileRBuffer_Close",
        "enum": 4
      },
      {
        "text": "eFileRBuffer_Reset",
        "enum": 5
      }
    ]
  },
  {
    "name": "FB_TextFileRingBuffer",
    "bitSize": 14208,
    "subItem": [
      {
        "name": "fbOpen",
        "type": "FB_FileOpen",
        "bitSize": 3360,
        "bitOffs": 0
      },
      {
        "name": "fbClose",
        "type": "FB_FileClose",
        "bitSize": 1120,
        "bitOffs": 3360
      },
      {
        "name": "fbPuts",
        "type": "FB_FilePuts",
        "bitSize": 3168,
        "bitOffs": 4480
      },
      {
        "name": "nStep",
        "type": "INT",
        "comment": "0=idle, 1=init, 10,11=open, 40,41=write, 50,51=close, 100=exit",
        "bitSize": 16,
        "bitOffs": 7648
      },
      {
        "name": "eCmd",
        "type": "E_FileRBufferCmd",
        "bitSize": 16,
        "bitOffs": 7664
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "comment": "ams net id",
        "bitSize": 192,
        "bitOffs": 7680
      },
      {
        "name": "sPathName",
        "type": "STRING(255)",
        "comment": "file buffer path name (max. length = 255 characters)",
        "bitSize": 2048,
        "bitOffs": 7872
      },
      {
        "name": "ePath",
        "type": "E_OpenPath",
        "comment": "default: Open generic file",
        "bitSize": 16,
        "bitOffs": 9920
      },
      {
        "name": "bAppend",
        "type": "BOOL",
        "comment": "TRUE = append, FALSE = not append",
        "bitSize": 8,
        "bitOffs": 9936
      },
      {
        "name": "putLine",
        "type": "STRING(255)",
        "bitSize": 2048,
        "bitOffs": 9944
      },
      {
        "name": "cbBuffer",
        "type": "UDINT",
        "comment": "max. file buffer byte size(RESERVED for future use)",
        "bitSize": 32,
        "bitOffs": 12000
      },
      {
        "name": "tTimeout",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 12032
      },
      {
        "name": "bBusy",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 12064
      },
      {
        "name": "bError",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 12072
      },
      {
        "name": "nErrID",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 12096
      },
      {
        "name": "bOpened",
        "type": "BOOL",
        "comment": "TRUE = file opened, FALSE = file closed",
        "bitSize": 8,
        "bitOffs": 12128
      },
      {
        "name": "getLine",
        "type": "STRING(255)",
        "bitSize": 2048,
        "bitOffs": 12136
      }
    ],
    "fbInfo": {
      "codeIndex": 437,
      "initIndex": 438,
      "actionInfo": [
        {
          "name": "A_AddTail",
          "codeIndex": 439
        },
        {
          "name": "A_Close",
          "codeIndex": 440
        },
        {
          "name": "A_Open",
          "codeIndex": 441
        },
        {
          "name": "A_Reset",
          "codeIndex": 442
        }
      ]
    }
  },
  {
    "name": "FB_MemRingBuffer",
    "bitSize": 512,
    "subItem": [
      {
        "name": "idxLast",
        "type": "DWORD",
        "comment": "byte index of last buffer byte",
        "bitSize": 32,
        "bitOffs": 0
      },
      {
        "name": "idxFirst",
        "type": "DWORD",
        "comment": "byte buffer of first buffer byte",
        "bitSize": 32,
        "bitOffs": 32
      },
      {
        "name": "idxGet",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 64
      },
      {
        "name": "pTmp",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 96
      },
      {
        "name": "cbTmp",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 128
      },
      {
        "name": "cbCopied",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 160
      },
      {
        "name": "pWrite",
        "type": "DWORD",
        "comment": "pointer to write data",
        "bitSize": 32,
        "bitOffs": 192
      },
      {
        "name": "cbWrite",
        "type": "UDINT",
        "comment": "byte size of write data",
        "bitSize": 32,
        "bitOffs": 224
      },
      {
        "name": "pRead",
        "type": "DWORD",
        "comment": "pointer to read data buffer",
        "bitSize": 32,
        "bitOffs": 256
      },
      {
        "name": "cbRead",
        "type": "UDINT",
        "comment": "byte size of read data buffer",
        "bitSize": 32,
        "bitOffs": 288
      },
      {
        "name": "pBuffer",
        "type": "DWORD",
        "comment": "pointer to ring buffer data bytes",
        "bitSize": 32,
        "bitOffs": 320
      },
      {
        "name": "cbBuffer",
        "type": "UDINT",
        "comment": "max. ring buffer byte size",
        "bitSize": 32,
        "bitOffs": 352
      },
      {
        "name": "bOk",
        "type": "BOOL",
        "comment": "TRUE = new entry added or removed succesfully, FALSE = fifo overflow or fifo empty",
        "bitSize": 8,
        "bitOffs": 384
      },
      {
        "name": "nCount",
        "type": "UDINT",
        "comment": "number of fifo entries",
        "bitSize": 32,
        "bitOffs": 416
      },
      {
        "name": "cbSize",
        "type": "UDINT",
        "comment": "current byte length of fifo data",
        "bitSize": 32,
        "bitOffs": 448
      },
      {
        "name": "cbReturn",
        "type": "UDINT",
        "comment": "If bOk == TRUE => Number of recend realy returned (removed or get) data bytes If bOk == FALSE and cbReturn <> 0 => Number of required read buffer data bytes (cbRead underflow)",
        "bitSize": 32,
        "bitOffs": 480
      }
    ],
    "fbInfo": {
      "codeIndex": 391,
      "initIndex": 392,
      "actionInfo": [
        {
          "name": "A_AddTail",
          "codeIndex": 393
        },
        {
          "name": "A_GetHead",
          "codeIndex": 394
        },
        {
          "name": "A_RemoveHead",
          "codeIndex": 395
        },
        {
          "name": "A_Reset",
          "codeIndex": 396
        }
      ]
    }
  },
  {
    "name": "FB_StringRingBuffer",
    "bitSize": 4800,
    "subItem": [
      {
        "name": "fbBuffer",
        "type": "FB_MemRingBuffer",
        "comment": "Internal (low level) buffer control function block",
        "bitSize": 512,
        "bitOffs": 0
      },
      {
        "name": "bOverwrite",
        "type": "BOOL",
        "comment": "TRUE = overwrite oldest entry, FALSE = don't overwrite",
        "bitSize": 8,
        "bitOffs": 512
      },
      {
        "name": "putValue",
        "type": "STRING(255)",
        "comment": "String to add (write) to the buffer",
        "bitSize": 2048,
        "bitOffs": 520
      },
      {
        "name": "pBuffer",
        "type": "DWORD",
        "comment": "Pointer to ring buffer data bytes",
        "bitSize": 32,
        "bitOffs": 2592
      },
      {
        "name": "cbBuffer",
        "type": "UDINT",
        "comment": "Max. ring buffer byte size",
        "bitSize": 32,
        "bitOffs": 2624
      },
      {
        "name": "bOk",
        "type": "BOOL",
        "comment": "TRUE = new entry added or removed succesfully, FALSE = fifo overflow or fifo empty",
        "bitSize": 8,
        "bitOffs": 2656
      },
      {
        "name": "getValue",
        "type": "STRING(255)",
        "comment": "String removed (read) from buffer",
        "bitSize": 2048,
        "bitOffs": 2664
      },
      {
        "name": "nCount",
        "type": "UDINT",
        "comment": "Number of fifo entries",
        "bitSize": 32,
        "bitOffs": 4736
      },
      {
        "name": "cbSize",
        "type": "UDINT",
        "comment": "Current byte length of fifo data",
        "bitSize": 32,
        "bitOffs": 4768
      }
    ],
    "fbInfo": {
      "codeIndex": 428,
      "initIndex": 429,
      "actionInfo": [
        {
          "name": "A_AddTail",
          "codeIndex": 430
        },
        {
          "name": "A_GetHead",
          "codeIndex": 431
        },
        {
          "name": "A_RemoveHead",
          "codeIndex": 432
        },
        {
          "name": "A_Reset",
          "codeIndex": 433
        }
      ]
    }
  },
  {
    "name": "FB_BufferedTextFileWriter",
    "bitSize": 16864,
    "subItem": [
      {
        "name": "fbFile",
        "type": "FB_TextFileRingBuffer",
        "bitSize": 14208,
        "bitOffs": 0
      },
      {
        "name": "closeTimer",
        "type": "TON",
        "comment": "auto close timer",
        "bitSize": 192,
        "bitOffs": 14208
      },
      {
        "name": "bRemove",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 14400
      },
      {
        "name": "nStep",
        "type": "BYTE",
        "bitSize": 8,
        "bitOffs": 14408
      },
      {
        "name": "sNetId",
        "type": "STRING(23)",
        "comment": "ams net id",
        "bitSize": 192,
        "bitOffs": 14416
      },
      {
        "name": "sPathName",
        "type": "STRING(255)",
        "comment": "file buffer path name (max. length = 255 characters)",
        "bitSize": 2048,
        "bitOffs": 14608
      },
      {
        "name": "ePath",
        "type": "E_OpenPath",
        "comment": "default: Open generic file",
        "bitSize": 16,
        "bitOffs": 16656
      },
      {
        "name": "bAppend",
        "type": "BOOL",
        "comment": "TRUE = append lines, FALSE = not append",
        "bitSize": 8,
        "bitOffs": 16672
      },
      {
        "name": "tAutoClose",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 16704
      },
      {
        "name": "tTimeout",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 16736
      },
      {
        "name": "bBusy",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 16768
      },
      {
        "name": "bError",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 16776
      },
      {
        "name": "nErrID",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 16800
      },
      {
        "name": "fbBuffer",
        "type": "FB_StringRingBuffer",
        "comment": "string ring buffer",
        "bitSize": 32,
        "bitOffs": 16832
      }
    ],
    "fbInfo": {
      "codeIndex": 304,
      "initIndex": 305,
      "actionInfo": {
        "name": "A_Reset",
        "codeIndex": 306
      }
    }
  },
  {
    "name": "E_EnumCmdType",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "eEnumCmd_First",
        "enum": 0
      },
      {
        "text": "eEnumCmd_Next",
        "enum": 1
      },
      {
        "text": "eEnumCmd_Abort",
        "enum": 2
      }
    ]
  },
  {
    "name": "ST_FormatParameters",
    "bitSize": 160,
    "subItem": [
      {
        "name": "bPercent",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 0
      },
      {
        "name": "bFlags",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 8
      },
      {
        "name": "bWidth",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 16
      },
      {
        "name": "bDot",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 24
      },
      {
        "name": "bPrecision",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 32
      },
      {
        "name": "bType",
        "type": "BOOL",
        "comment": "Flags field",
        "bitSize": 8,
        "bitOffs": 40
      },
      {
        "name": "bAlign",
        "type": "BOOL",
        "comment": "Default :Right align",
        "bitSize": 8,
        "bitOffs": 48
      },
      {
        "name": "bSign",
        "type": "BOOL",
        "comment": "Default: Sign only for negative values",
        "bitSize": 8,
        "bitOffs": 56
      },
      {
        "name": "bNull",
        "type": "BOOL",
        "comment": "Default: No padding",
        "bitSize": 8,
        "bitOffs": 64
      },
      {
        "name": "bBlank",
        "type": "BOOL",
        "comment": "Default: No blanks",
        "bitSize": 8,
        "bitOffs": 72
      },
      {
        "name": "bHash",
        "type": "BOOL",
        "comment": "Default: No blanks",
        "bitSize": 8,
        "bitOffs": 80
      },
      {
        "name": "iWidth",
        "type": "INT",
        "bitSize": 16,
        "bitOffs": 96
      },
      {
        "name": "iPrecision",
        "type": "INT",
        "bitSize": 16,
        "bitOffs": 112
      },
      {
        "name": "bWidthAsterisk",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 128
      },
      {
        "name": "bPrecisionAsterisk",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 136
      },
      {
        "name": "eType",
        "type": "E_TypeFieldParam",
        "comment": "format type parameter",
        "bitSize": 16,
        "bitOffs": 144
      }
    ]
  },
  {
    "name": "ARRAY [1..10] OF POINTER TO T_Arg",
    "type": "T_Arg",
    "bitSize": 320,
    "arrayInfo": {
      "lBound": 1,
      "elements": 10
    }
  },
  {
    "name": "FB_FormatString",
    "bitSize": 7808,
    "subItem": [
      {
        "name": "pFormat",
        "type": "BYTE",
        "comment": "pointer to the format string",
        "bitSize": 32,
        "bitOffs": 0
      },
      {
        "name": "pOut",
        "type": "BYTE",
        "comment": "pointer to the result string",
        "bitSize": 32,
        "bitOffs": 32
      },
      {
        "name": "iRemOutLen",
        "type": "INT",
        "comment": "Max remaining length of sOut buffer",
        "bitSize": 16,
        "bitOffs": 64
      },
      {
        "name": "bValid",
        "type": "BOOL",
        "comment": "if set, the string character is valid format parameter",
        "bitSize": 8,
        "bitOffs": 80
      },
      {
        "name": "stFmt",
        "type": "ST_FormatParameters",
        "bitSize": 160,
        "bitOffs": 96
      },
      {
        "name": "nArrayElem",
        "type": "INT",
        "bitSize": 16,
        "bitOffs": 256
      },
      {
        "name": "nArgument",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 288
      },
      {
        "name": "parArgs",
        "type": "ARRAY [1..10] OF POINTER TO T_Arg",
        "bitSize": 320,
        "bitOffs": 320
      },
      {
        "name": "sArgStr",
        "type": "STRING(255)",
        "bitSize": 2048,
        "bitOffs": 640
      },
      {
        "name": "sFormat",
        "type": "STRING(255)",
        "bitSize": 2048,
        "bitOffs": 2688
      },
      {
        "name": "arg1",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 4736
      },
      {
        "name": "arg2",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 4832
      },
      {
        "name": "arg3",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 4928
      },
      {
        "name": "arg4",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 5024
      },
      {
        "name": "arg5",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 5120
      },
      {
        "name": "arg6",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 5216
      },
      {
        "name": "arg7",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 5312
      },
      {
        "name": "arg8",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 5408
      },
      {
        "name": "arg9",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 5504
      },
      {
        "name": "arg10",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 5600
      },
      {
        "name": "bError",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 5696
      },
      {
        "name": "nErrId",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 5728
      },
      {
        "name": "sOut",
        "type": "STRING(255)",
        "bitSize": 2048,
        "bitOffs": 5760
      }
    ],
    "fbInfo": {
      "codeIndex": 340,
      "initIndex": 341
    }
  },
  {
    "name": "ARRAY [1..10000] OF BYTE",
    "type": "BYTE",
    "bitSize": 80000,
    "arrayInfo": {
      "lBound": 1,
      "elements": 10000
    }
  },
  {
    "name": "ARRAY [0..32, 0..2] OF BYTE",
    "type": "BYTE",
    "bitSize": 792,
    "arrayInfo": [
      {
        "lBound": 0,
        "elements": 33
      },
      {
        "lBound": 0,
        "elements": 3
      }
    ]
  },
  {
    "name": "FB_DbgOutputCtrl",
    "bitSize": 115744,
    "subItem": [
      {
        "name": "fbFormat",
        "type": "FB_FormatString",
        "bitSize": 7808,
        "bitOffs": 0
      },
      {
        "name": "fbBuffer",
        "type": "FB_StringRingBuffer",
        "bitSize": 4800,
        "bitOffs": 7808
      },
      {
        "name": "fbFile",
        "type": "FB_BufferedTextFileWriter",
        "bitSize": 16864,
        "bitOffs": 12608
      },
      {
        "name": "buffer",
        "type": "ARRAY [1..10000] OF BYTE",
        "bitSize": 80000,
        "bitOffs": 29472
      },
      {
        "name": "state",
        "type": "INT",
        "bitSize": 16,
        "bitOffs": 109472
      },
      {
        "name": "nItems",
        "type": "INT",
        "bitSize": 16,
        "bitOffs": 109488
      },
      {
        "name": "k",
        "type": "INT",
        "bitSize": 16,
        "bitOffs": 109504
      },
      {
        "name": "bInit",
        "type": "BOOL",
        "comment": "Hex logging",
        "bitSize": 8,
        "bitOffs": 109520
      },
      {
        "name": "i",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 109536
      },
      {
        "name": "cells",
        "type": "ARRAY [0..32, 0..2] OF BYTE",
        "bitSize": 792,
        "bitOffs": 109568
      },
      {
        "name": "pCells",
        "type": "STRING(255)",
        "bitSize": 32,
        "bitOffs": 110368
      },
      {
        "name": "cbL1",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 110400
      },
      {
        "name": "cbL2",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 110432
      },
      {
        "name": "idx",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 110464
      },
      {
        "name": "pSrc1",
        "type": "BYTE",
        "bitSize": 32,
        "bitOffs": 110496
      },
      {
        "name": "pSrc2",
        "type": "BYTE",
        "bitSize": 32,
        "bitOffs": 110528
      },
      {
        "name": "dwCtrl",
        "type": "DWORD",
        "comment": "Debug message target: DBG_OUTPUT_LOG",
        "bitSize": 32,
        "bitOffs": 110560
      },
      {
        "name": "sFormat",
        "type": "STRING(255)",
        "comment": "Debug message format string",
        "bitSize": 2048,
        "bitOffs": 110592
      },
      {
        "name": "arg1",
        "type": "T_Arg",
        "comment": "Format string argument",
        "bitSize": 96,
        "bitOffs": 112640
      },
      {
        "name": "arg2",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 112736
      },
      {
        "name": "arg3",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 112832
      },
      {
        "name": "arg4",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 112928
      },
      {
        "name": "arg5",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 113024
      },
      {
        "name": "arg6",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 113120
      },
      {
        "name": "arg7",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 113216
      },
      {
        "name": "arg8",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 113312
      },
      {
        "name": "arg9",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 113408
      },
      {
        "name": "arg10",
        "type": "T_Arg",
        "bitSize": 96,
        "bitOffs": 113504
      },
      {
        "name": "sFilter",
        "type": "STRING(255)",
        "bitSize": 2048,
        "bitOffs": 113600
      },
      {
        "name": "bError",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 115648
      },
      {
        "name": "nError",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 115680
      },
      {
        "name": "nOverflow",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 115712
      }
    ],
    "fbInfo": {
      "codeIndex": 313,
      "initIndex": 314,
      "actionInfo": [
        {
          "name": "A_Log",
          "codeIndex": 315
        },
        {
          "name": "A_LogHex",
          "codeIndex": 316
        },
        {
          "name": "A_Reset",
          "codeIndex": 317
        }
      ]
    }
  },
  {
    "name": "E_NumGroupTypes",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "eNumGroup_Float",
        "enum": 0
      },
      {
        "text": "eNumGroup_Unsigned",
        "enum": 1
      },
      {
        "text": "eNumGroup_Signed",
        "enum": 2
      }
    ]
  },
  {
    "name": "ST_TimeZoneInformation",
    "bitSize": 864,
    "subItem": [
      {
        "name": "bias",
        "type": "DINT",
        "comment": "Specifies the current bias, in minutes, for local time translation on this computer. The bias is the difference, in minutes, between Coordinated Universal Time (UTC) and local time. UTC = local time + bias",
        "bitSize": 32,
        "bitOffs": 0
      },
      {
        "name": "standardName",
        "type": "STRING(31)",
        "comment": "Specifies a null-terminated string associated with standard time on this operating system.",
        "bitSize": 256,
        "bitOffs": 32
      },
      {
        "name": "standardDate",
        "type": "TIMESTRUCT",
        "comment": "Specifies a SYSTEMTIME structure that contains a date and local time when the transition from daylight saving time to standard time occurs on this operating system.",
        "bitSize": 128,
        "bitOffs": 288
      },
      {
        "name": "standardBias",
        "type": "DINT",
        "comment": "Specifies a bias value to be used during local time translations that occur during standard time.",
        "bitSize": 32,
        "bitOffs": 416
      },
      {
        "name": "daylightName",
        "type": "STRING(31)",
        "comment": "Specifies a null-terminated string associated with daylight saving time on this operating system. For example, this member could contain \"PDT\" to indicate Pacific Daylight Time.",
        "bitSize": 256,
        "bitOffs": 448
      },
      {
        "name": "daylightDate",
        "type": "TIMESTRUCT",
        "comment": "Specifies a SYSTEMTIME structure that contains a date and local time when the transition from standard time to daylight saving time occurs on this operating system.",
        "bitSize": 128,
        "bitOffs": 704
      },
      {
        "name": "daylightBias",
        "type": "DINT",
        "comment": "Specifies a bias value to be used during local time translations that occur during daylight saving time.",
        "bitSize": 32,
        "bitOffs": 832
      }
    ]
  },
  {
    "name": "E_MIB_IF_Type",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "MIB_IF_TYPE_UNKNOWN",
        "enum": 0
      },
      {
        "text": "MIB_IF_TYPE_OTHER",
        "enum": 1
      },
      {
        "text": "MIB_IF_TYPE_ETHERNET",
        "enum": 6
      },
      {
        "text": "MIB_IF_TYPE_TOKENRING",
        "enum": 9
      },
      {
        "text": "MIB_IF_TYPE_FDDI",
        "enum": 15
      },
      {
        "text": "MIB_IF_TYPE_PPP",
        "enum": 23
      },
      {
        "text": "MIB_IF_TYPE_LOOPBACK",
        "enum": 24
      },
      {
        "text": "MIB_IF_TYPE_SLIP",
        "enum": 28
      }
    ]
  },
  {
    "name": "NT_GetTime",
    "bitSize": 1632,
    "subItem": [
      {
        "name": "fbAdsRead",
        "type": "ADSREAD",
        "bitSize": 1184,
        "bitOffs": 0
      },
      {
        "name": "NETID",
        "type": "STRING(23)",
        "comment": "TwinCAT network address (ams net id)",
        "bitSize": 192,
        "bitOffs": 1184
      },
      {
        "name": "START",
        "type": "BOOL",
        "comment": "Rising edge on this input activates the fb execution",
        "bitSize": 8,
        "bitOffs": 1376
      },
      {
        "name": "TMOUT",
        "type": "TIME",
        "comment": "Max fb execution time",
        "bitSize": 32,
        "bitOffs": 1408
      },
      {
        "name": "BUSY",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1440
      },
      {
        "name": "ERR",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1448
      },
      {
        "name": "ERRID",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 1472
      },
      {
        "name": "TIMESTR",
        "type": "TIMESTRUCT",
        "comment": "Local windows system time",
        "bitSize": 128,
        "bitOffs": 1504
      }
    ],
    "fbInfo": {
      "codeIndex": 492,
      "initIndex": 493
    }
  },
  {
    "name": "FB_MemBufferMerge",
    "bitSize": 288,
    "subItem": [
      {
        "name": "pDest",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 0
      },
      {
        "name": "cbDest",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 32
      },
      {
        "name": "eCmd",
        "type": "E_EnumCmdType",
        "bitSize": 16,
        "bitOffs": 64
      },
      {
        "name": "pBuffer",
        "type": "DWORD",
        "comment": "Pointer to destination buffer",
        "bitSize": 32,
        "bitOffs": 96
      },
      {
        "name": "cbBuffer",
        "type": "UDINT",
        "comment": "Max. byte size of destination buffer",
        "bitSize": 32,
        "bitOffs": 128
      },
      {
        "name": "pSegment",
        "type": "DWORD",
        "comment": "Pointer to data segment (optional, may be 0)",
        "bitSize": 32,
        "bitOffs": 160
      },
      {
        "name": "cbSegment",
        "type": "UDINT",
        "comment": "Number of data segments (optional, may be 0)",
        "bitSize": 32,
        "bitOffs": 192
      },
      {
        "name": "bOk",
        "type": "BOOL",
        "comment": "TRUE => Successfull, FALSE => End of enumeration or invalid input parameter",
        "bitSize": 8,
        "bitOffs": 224
      },
      {
        "name": "cbSize",
        "type": "UDINT",
        "comment": "Data buffer fill state",
        "bitSize": 32,
        "bitOffs": 256
      }
    ],
    "fbInfo": {
      "codeIndex": 387,
      "initIndex": 388
    }
  },
  {
    "name": "E_RegValueType",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "REG_NONE",
        "enum": 0
      },
      {
        "text": "REG_SZ",
        "enum": 1
      },
      {
        "text": "REG_EXPAND_SZ",
        "enum": 2
      },
      {
        "text": "REG_BINARY",
        "enum": 3
      },
      {
        "text": "REG_DWORD",
        "enum": 4
      },
      {
        "text": "REG_DWORD_BIG_ENDIAN",
        "enum": 5
      },
      {
        "text": "REG_LINK",
        "enum": 6
      },
      {
        "text": "REG_MULTI_SZ",
        "enum": 7
      },
      {
        "text": "REG_RESOURCE_LIST",
        "enum": 8
      },
      {
        "text": "REG_FULL_RESOURCE_DESCRIPTOR",
        "enum": 9
      },
      {
        "text": "REG_RESOURCE_REQUIREMENTS_LIST",
        "enum": 10
      },
      {
        "text": "REG_QWORD",
        "enum": 11
      }
    ]
  },
  {
    "name": "E_ScopeServerState",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "SCOPE_SERVER_IDLE",
        "enum": 0
      },
      {
        "text": "SCOPE_SERVER_CONNECT",
        "enum": 1
      },
      {
        "text": "SCOPE_SERVER_START",
        "enum": 2
      },
      {
        "text": "SCOPE_SERVER_STOP",
        "enum": 3
      },
      {
        "text": "SCOPE_SERVER_SAVE",
        "enum": 4
      },
      {
        "text": "SCOPE_SERVER_DISCONNECT",
        "enum": 5
      },
      {
        "text": "SCOPE_SERVER_RESET",
        "enum": 6
      }
    ]
  },
  {
    "name": "E_PersistentMode",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "SPDM_2PASS",
        "enum": 0
      },
      {
        "text": "SPDM_VAR_BOOST",
        "enum": 1
      }
    ]
  },
  {
    "name": "FB_WritePersistentData",
    "bitSize": 1408,
    "subItem": [
      {
        "name": "fbAdsWrtCtl",
        "type": "ADSWRTCTL",
        "bitSize": 1088,
        "bitOffs": 0
      },
      {
        "name": "NETID",
        "type": "STRING(23)",
        "comment": "TwinCAT network address (ams net id)",
        "bitSize": 192,
        "bitOffs": 1088
      },
      {
        "name": "PORT",
        "type": "UINT",
        "comment": "Contains the ADS port number of the PLC run-time system whose persistent data is to be stored (801, 811...)",
        "bitSize": 16,
        "bitOffs": 1280
      },
      {
        "name": "START",
        "type": "BOOL",
        "comment": "Rising edge on this input activates the fb execution",
        "bitSize": 8,
        "bitOffs": 1296
      },
      {
        "name": "TMOUT",
        "type": "TIME",
        "comment": "Max fb execution time",
        "bitSize": 32,
        "bitOffs": 1312
      },
      {
        "name": "MODE",
        "type": "E_PersistentMode",
        "comment": "=SPDM_2PASS: optimized boost; =SPDM_VAR_BOOST: boost per variable;",
        "bitSize": 16,
        "bitOffs": 1344
      },
      {
        "name": "BUSY",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1360
      },
      {
        "name": "ERR",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1368
      },
      {
        "name": "ERRID",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 1376
      }
    ],
    "fbInfo": {
      "codeIndex": 455,
      "initIndex": 456
    }
  },
  {
    "name": "ARRAY [0..99] OF REMOTEPC",
    "type": "REMOTEPC",
    "bitSize": 44800,
    "arrayInfo": {
      "lBound": 0,
      "elements": 100
    }
  },
  {
    "name": "REMOTEPCINFOSTRUCT",
    "type": "ARRAY [0..99] OF REMOTEPC",
    "bitSize": 44800
  },
  {
    "name": "ADSDATATYPEID",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "ADST_VOID",
        "enum": 0
      },
      {
        "text": "ADST_INT8",
        "enum": 16
      },
      {
        "text": "ADST_UINT8",
        "enum": 17
      },
      {
        "text": "ADST_INT16",
        "enum": 2
      },
      {
        "text": "ADST_UINT16",
        "enum": 18
      },
      {
        "text": "ADST_INT32",
        "enum": 3
      },
      {
        "text": "ADST_UINT32",
        "enum": 19
      },
      {
        "text": "ADST_INT64",
        "enum": 20
      },
      {
        "text": "ADST_UINT64",
        "enum": 21
      },
      {
        "text": "ADST_REAL32",
        "enum": 4
      },
      {
        "text": "ADST_REAL64",
        "enum": 5
      },
      {
        "text": "ADST_BIGTYPE",
        "enum": 65
      },
      {
        "text": "ADST_STRING",
        "enum": 30
      },
      {
        "text": "ADST_WSTRING",
        "enum": 31
      },
      {
        "text": "ADST_REAL80",
        "enum": 32
      },
      {
        "text": "ADST_BIT",
        "enum": 33
      },
      {
        "text": "ADST_MAXTYPES",
        "enum": 34
      }
    ]
  },
  {
    "name": "E_DbgContext",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "eDbgContext_NONE",
        "enum": 0
      },
      {
        "text": "eDbgContext_USER",
        "enum": 1
      },
      {
        "text": "eDbgContext_PROV",
        "enum": 2
      }
    ]
  },
  {
    "name": "E_DbgDirection",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "eDbgDirection_OFF",
        "enum": 0
      },
      {
        "text": "eDbgDirection_IN",
        "enum": 1
      },
      {
        "text": "eDbgDirection_OUT",
        "enum": 2
      },
      {
        "text": "eDbgDirection_ALL",
        "enum": 3
      }
    ]
  },
  {
    "name": "E_HashPrefixTypes",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "HASHPREFIX_IEC",
        "enum": 0
      },
      {
        "text": "HASHPREFIX_STDC",
        "enum": 1
      }
    ]
  },
  {
    "name": "E_PrefixFlagParam",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "PREFIXFLAG_SIGN",
        "enum": 0
      },
      {
        "text": "PREFIXFLAG_BLANK",
        "enum": 1
      },
      {
        "text": "PREFIXFLAG_NULL",
        "enum": 2
      },
      {
        "text": "PREFIXFLAG_HASH",
        "enum": 3
      }
    ]
  },
  {
    "name": "E_SBCSType",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "eSBCS_WesternEuropean",
        "enum": 1
      },
      {
        "text": "eSBCS_CentralEuropean",
        "enum": 2
      }
    ]
  },
  {
    "name": "E_UTILITIES_ERRORCODES",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "eUtilError_NoError",
        "enum": 0
      },
      {
        "text": "eUtilError_ScopeServerNotAvailable",
        "enum": -32767
      },
      {
        "text": "eUtilError_ScopeServerStateChange",
        "enum": -32766
      }
    ]
  },
  {
    "name": "ARRAY [0..127] OF BYTE",
    "type": "BYTE",
    "comment": "lower => upper case converting info (char: 128..256)",
    "bitSize": 1024,
    "arrayInfo": {
      "lBound": 0,
      "elements": 128
    }
  },
  {
    "name": "ST_SBCSTable",
    "bitSize": 2048,
    "subItem": [
      {
        "name": "UC",
        "type": "ARRAY [0..127] OF BYTE",
        "comment": "lower => upper case converting info (char: 128..256)",
        "bitSize": 1024,
        "bitOffs": 0
      },
      {
        "name": "LC",
        "type": "ARRAY [0..127] OF BYTE",
        "comment": "upper => lower case converting info (char: 128..256)",
        "bitSize": 1024,
        "bitOffs": 1024
      }
    ]
  },
  {
    "name": "E_CX8090_LED",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "eLED_GREEN_OFF",
        "enum": 0
      },
      {
        "text": "eLED_GREEN_ON",
        "enum": 1
      },
      {
        "text": "eLED_GREEN_FLASHING_Quick",
        "enum": 2
      },
      {
        "text": "eLED_GREEN_FLASHING_200ms",
        "enum": 3
      },
      {
        "text": "eLED_GREEN_FLASHING_500ms",
        "enum": 4
      },
      {
        "text": "eLED_GREEN_FLASHING_Pulse",
        "enum": 5
      },
      {
        "text": "eLED_RED_OFF",
        "enum": 20
      },
      {
        "text": "eLED_RED_ON",
        "enum": 21
      },
      {
        "text": "eLED_RED_FLASHING_Quick",
        "enum": 22
      },
      {
        "text": "eLED_RED_FLASHING_200ms",
        "enum": 23
      },
      {
        "text": "eLED_RED_FLASHING_500ms",
        "enum": 24
      },
      {
        "text": "eLED_RED_FLASHING_Pulse",
        "enum": 25
      },
      {
        "text": "eLED_GREEN_RED_OFF",
        "enum": 100
      },
      {
        "text": "eLED_GREEN_RED_FLASHING_200ms",
        "enum": 101
      },
      {
        "text": "eLED_GREEN_RED_FLASHING_500ms",
        "enum": 102
      }
    ]
  },
  {
    "name": "FB_NT_QuickShutdown",
    "bitSize": 1472,
    "subItem": [
      {
        "name": "ADSWRTCTL1",
        "type": "ADSWRTCTL",
        "bitSize": 1088,
        "bitOffs": 0
      },
      {
        "name": "RisingEdge",
        "type": "R_TRIG",
        "bitSize": 24,
        "bitOffs": 1088
      },
      {
        "name": "DELAY",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 1120
      },
      {
        "name": "NETID",
        "type": "STRING(23)",
        "bitSize": 192,
        "bitOffs": 1152
      },
      {
        "name": "START",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1344
      },
      {
        "name": "TMOUT",
        "type": "TIME",
        "bitSize": 32,
        "bitOffs": 1376
      },
      {
        "name": "BUSY",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1408
      },
      {
        "name": "ERR",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 1416
      },
      {
        "name": "ERRID",
        "type": "UDINT",
        "bitSize": 32,
        "bitOffs": 1440
      }
    ],
    "fbInfo": {
      "codeIndex": 666,
      "initIndex": 667
    }
  },
  {
    "name": "E_S_UPS_Mode",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "eSUPS_WrPersistData_Shutdown",
        "enum": 0
      },
      {
        "text": "eSUPS_WrPersistData_NoShutdown",
        "enum": 1
      },
      {
        "text": "eSUPS_ImmediateShutdown",
        "enum": 2
      },
      {
        "text": "eSUPS_CheckPowerStatus",
        "enum": 3
      }
    ]
  },
  {
    "name": "E_S_UPS_State",
    "type": "INT",
    "bitSize": 16,
    "enumInfo": [
      {
        "text": "eSUPS_StateInit",
        "enum": -1
      },
      {
        "text": "eSUPS_PowerOK",
        "enum": 0
      },
      {
        "text": "eSUPS_PowerFailure",
        "enum": 1
      },
      {
        "text": "eSUPS_WritePersistentData",
        "enum": 2
      },
      {
        "text": "eSUPS_QuickShutdown",
        "enum": 3
      },
      {
        "text": "eSUPS_WaitForRecover",
        "enum": 4
      },
      {
        "text": "eSUPS_WaitForPowerOFF",
        "enum": 5
      }
    ]
  },
  {
    "name": "FB_S_UPS_CX80xx",
    "bitSize": 3520,
    "subItem": [
      {
        "name": "fbWritePersistentData",
        "type": "FB_WritePersistentData",
        "bitSize": 1408,
        "bitOffs": 0
      },
      {
        "name": "fbNT_QuickShutdown",
        "type": "FB_NT_QuickShutdown",
        "bitSize": 1472,
        "bitOffs": 1408
      },
      {
        "name": "dwTemp",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 2880
      },
      {
        "name": "WaitForOffTimer",
        "type": "TON",
        "bitSize": 192,
        "bitOffs": 2912
      },
      {
        "name": "bFirstCycle",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 3104
      },
      {
        "name": "bPowerOKInFirstCycle",
        "type": "BOOL",
        "bitSize": 8,
        "bitOffs": 3112
      },
      {
        "name": "iAdr",
        "type": "DWORD",
        "bitSize": 32,
        "bitOffs": 3136
      },
      {
        "name": "sNetID",
        "type": "STRING(23)",
        "comment": "'' = local netid",
        "bitSize": 192,
        "bitOffs": 3168
      },
      {
        "name": "iPLCPort",
        "type": "UINT",
        "comment": "PLC Runtime System for writing persistent data",
        "bitSize": 16,
        "bitOffs": 3360
      },
      {
        "name": "tTimeout",
        "type": "TIME",
        "comment": "ADS Timeout",
        "bitSize": 32,
        "bitOffs": 3392
      },
      {
        "name": "eUpsMode",
        "type": "E_S_UPS_Mode",
        "comment": "UPS mode (w/wo writing persistent data, w/wo shutdown)",
        "bitSize": 16,
        "bitOffs": 3424
      },
      {
        "name": "ePersistentMode",
        "type": "E_PersistentMode",
        "comment": "mode for writing persistent data",
        "bitSize": 16,
        "bitOffs": 3440
      },
      {
        "name": "tRecoverTime",
        "type": "TIME",
        "comment": "ON time to recover from short power failure in mode eSUPS_WrPersistData_NoShutdown/eSUPS_CheckPowerStatus",
        "bitSize": 32,
        "bitOffs": 3456
      },
      {
        "name": "bPowerFailDetect",
        "type": "BOOL",
        "comment": "TRUE while powerfailure is detected",
        "bitSize": 8,
        "bitOffs": 3488
      },
      {
        "name": "eState",
        "type": "E_S_UPS_State",
        "comment": "current ups state",
        "bitSize": 16,
        "bitOffs": 3504
      }
    ],
    "fbInfo": {
      "codeIndex": 668,
      "initIndex": 669
    }
  }
]