export const T3_Types = {
  INPUT: 0,
  OUTPUT: 1,
  VARIABLE: 2,
  PROGRAM: 3,
  SCHEDULE: 4,
  HOLIDAY: 5,
};

export const tools = [
  {
    name: "Pointer",
    label: "Select",
    icon: "img:/cursor.svg",
  },
  {
    name: "Text",
    label: "Text",
    icon: "title",
    props: { content: "Text", color: "black", fontSize: 16 },
  },
  {
    name: "Duct",
    label: "Duct",
    icon: "img:/duct.svg",
  },
  {
    name: "Fan",
    label: "Fan",
    icon: "img:/fan.svg",
    props: { active: false, inAlarm: false },
  },
  {
    name: "CoolingCoil",
    label: "Cooling Coil",
    icon: "img:/cooling-coil.svg",
    props: { active: false, inAlarm: false },
  },
  {
    name: "HeatingCoil",
    label: "Heating Coil",
    icon: "img:/heating-coil.svg",
    props: { active: false, inAlarm: false },
  },
  {
    name: "Filter",
    label: "Filter",
    icon: "img:/filter.svg",
  },
  {
    name: "Humidifier",
    label: "Humidifier",
    icon: "img:/humidifier.svg",
    props: { active: false, inAlarm: false },
  },
  {
    name: "Damper",
    label: "Damper",
    icon: "img:/damper.svg",
    props: { inAlarm: false },
  },
  {
    name: "Temperature",
    label: "Temperature",
    icon: "img:/temperature.svg",
  },
];

export const ranges = [
  {
    id: 1,
    label: "Off/On",
    off: "Off",
    on: "On",
    directInvers: null,
  },
  {
    id: 2,
    label: "Close/Open",
    off: "Close",
    on: "Open",
    directInvers: null,
  },
  {
    id: 3,
    label: "Stop/Start",
    off: "Stop",
    on: "Start",
    directInvers: null,
  },
  {
    id: 4,
    label: "Disable/Enable",
    off: "Disable",
    on: "Enable",
    directInvers: null,
  },
  {
    id: 5,
    label: "Normal/Alarm",
    off: "Normal",
    on: "Alarm",
    directInvers: null,
  },
  {
    id: 6,
    label: "Normal/High",
    off: "Normal",
    on: "High",
    directInvers: null,
  },
  {
    id: 7,
    label: "Normal/Low",
    off: "Normal",
    on: "Low",
    directInvers: null,
  },
  {
    id: 8,
    label: "No/Yes",
    off: "No",
    on: "Yes",
    directInvers: null,
  },
  {
    id: 9,
    label: "Cool/Heat",
    off: "Cool",
    on: "Heat",
    directInvers: null,
  },
  {
    id: 10,
    label: "Unoccupy/Occupy",
    off: "Unoccupy",
    on: "Occupy",
    directInvers: null,
  },
  {
    id: 11,
    label: "Low/High",
    on: "Low",
    off: "High",
    directInvers: null,
  },
  {
    id: 12,
    label: "On/Off",
    on: "Off",
    off: "On",
    directInvers: true,
  },
  {
    id: 13,
    label: "Open/Close",
    on: "Close",
    off: "Open",
    directInvers: true,
  },
  {
    id: 14,
    label: "Start/Stop",
    on: "Stop",
    off: "Start",
    directInvers: true,
  },
  {
    id: 15,
    label: "Enable/Disable",
    on: "Disable",
    off: "Enable",
    directInvers: true,
  },
  {
    id: 16,
    label: "Alarm/Normal",
    on: "Normal",
    off: "Alarm",
    directInvers: true,
  },
  {
    id: 17,
    label: "High/Normal",
    on: "Normal",
    off: "High",
    directInvers: true,
  },
  {
    id: 18,
    label: "Low/Normal",
    on: "Normal",
    off: "Low",
    directInvers: true,
  },
  {
    id: 19,
    label: "Yes/No",
    on: "No",
    off: "Yes",
    directInvers: true,
  },
  {
    id: 20,
    label: "Heat/Cool",
    on: "Cool",
    off: "Heat",
    directInvers: true,
  },
  {
    id: 21,
    label: "Occupy/Unoccupy",
    on: "Unoccupy",
    off: "Occupy",
    directInvers: true,
  },
  {
    id: 22,
    label: "High/Low",
    on: "Low",
    off: "High",
    directInvers: true,
  },
  {
    id: 31,
    label: "3K YSI 44005",
    unit: "Deg.C",
  },
  {
    id: 32,
    label: "3K YSI 44005",
    unit: "Deg.F",
  },
  {
    id: 33,
    label: "10K Type2",
    unit: "Deg.C",
  },
  {
    id: 34,
    label: "10K Type2",
    unit: "Deg.F",
  },
  {
    id: 35,
    label: "Allerto/Walker/ASI",
    unit: "Deg.C",
  },
  {
    id: 36,
    label: "Allerto/Walker/ASI",
    unit: "Deg.F",
  },
  {
    id: 37,
    label: "10K-40 to 120 (type3)",
    unit: "Deg.C",
  },
  {
    id: 38,
    label: "10K-40 to 120 (type3)",
    unit: "Deg.F",
  },
  {
    id: 41,
    label: "0.0 to 5.0 Volts",
    unit: "Volts",
  },
  {
    id: 42,
    label: "0.0 to 100 Amps",
    unit: "Amps",
  },
  {
    id: 43,
    label: "4.0 to 20 ma",
    unit: "ma",
  },
  {
    id: 44,
    label: "0.0 to 20 psi",
    unit: "psi",
  },
  {
    id: 45,
    label: "Pulse Count (Slow 1Hz)",
    unit: "counts",
  },
  {
    id: 46,
    label: "0 to 100 %(0-10V)",
    unit: "%",
  },
  {
    id: 47,
    label: "0 to 100 %(0-5V)",
    unit: "%",
  },
  {
    id: 48,
    label: "0 to 100 %(4-20ma)",
    unit: "%",
  },
  {
    id: 49,
    label: "0.0 to 10.0 Volts",
    unit: "Volts",
  },
  {
    id: 56,
    label: "Hz",
    unit: "Hz",
  },
  {
    id: 57,
    label: "Humidty %",
    unit: "%",
  },
  {
    id: 58,
    label: "CO2 PPM",
    unit: "PPM",
  },
  {
    id: 60,
    label: "TVOC PPM",
    unit: "PPM",
  },
  {
    id: 61,
    label: "ug/m3",
    unit: "ug/m3",
  },
  {
    id: 62,
    label: "#/cm3",
    unit: "#/cm3",
  },
  {
    id: 63,
    label: "dB",
    unit: "dB",
  },
  {
    id: 64,
    label: "Lux",
    unit: "Lux",
  },
];
