import { i18nData } from "../i18n";
import FrameshiftDriveModule from "../types";
import { FSD_EDDB_ID_OFFSET, FSD_ED_ID_OFFSET } from "./helper";


const moduleSize = 5;
const idStart = (moduleSize-2) * 5

export const A: FrameshiftDriveModule = {
    moduleSize,
    cost: 5_103_950,
    fuelMultiplier: 0.012,
    fuelPower: 2.45,
    integrity: 120,
    mass: 20,
    maxFuelPerJump: 5,
    optimalMass: 1050,
    powerConsumption: 0.6,
    moduleRating: "A",
    i18n: i18nData,
    ids: {
        symbol: `Int_Hyperdrive_Size${moduleSize}_Class5`,
        coriolis: "F"+(idStart+0),
        ed: FSD_ED_ID_OFFSET+idStart+4,
        eddb: FSD_EDDB_ID_OFFSET+idStart+4
    }
}

export const B: FrameshiftDriveModule = {
    moduleSize,
    cost: 1_701_320,
    fuelMultiplier: 0.01,
    fuelPower: 2.45,
    integrity: 144,
    mass: 32,
    maxFuelPerJump: 4.1,
    optimalMass: 875,
    powerConsumption: 0.5,
    moduleRating: "B",
    i18n: i18nData,
    ids: {
        symbol: `Int_Hyperdrive_Size${moduleSize}_Class4`,
        coriolis: "F"+(idStart+1),
        ed: FSD_ED_ID_OFFSET+idStart+3,
        eddb: FSD_EDDB_ID_OFFSET+idStart+3
    }
}

export const C: FrameshiftDriveModule = {
    moduleSize,
    cost: 567_110,
    fuelMultiplier: 0.008,
    fuelPower: 2.45,
    integrity: 96,
    mass: 20,
    maxFuelPerJump: 3.3,
    optimalMass: 700,
    powerConsumption: 0.4,
    moduleRating: "C",
    i18n: i18nData,
    ids: {
        symbol: `Int_Hyperdrive_Size${moduleSize}_Class3`,
        coriolis: "F"+(idStart+2),
        ed: FSD_ED_ID_OFFSET+idStart+2,
        eddb: FSD_EDDB_ID_OFFSET+idStart+2
    }
}

export const D: FrameshiftDriveModule = {
    moduleSize,
    cost: 189_040,
    fuelMultiplier: 0.01,
    fuelPower: 2.45,
    integrity: 77,
    mass: 8,
    maxFuelPerJump: 3.3,
    optimalMass: 630,
    powerConsumption: 0.36,
    moduleRating: "D",
    i18n: i18nData,
    ids: {
        symbol: `Int_Hyperdrive_Size${moduleSize}_Class2`,
        coriolis: "F"+(idStart+3),
        ed: FSD_ED_ID_OFFSET+idStart+1,
        eddb: FSD_EDDB_ID_OFFSET+idStart+1
    }
}

export const E: FrameshiftDriveModule = {
    moduleSize,
    cost: 63_010,
    fuelMultiplier: 0.011,
    fuelPower: 2.45,
    integrity: 86,
    mass: 20,
    maxFuelPerJump: 3.3,
    optimalMass: 560,
    powerConsumption: 0.32,
    moduleRating: "E",
    i18n: i18nData,
    ids: {
        symbol: `Int_Hyperdrive_Size${moduleSize}_Class1`,
        coriolis: "F"+(idStart+4),
        ed: FSD_ED_ID_OFFSET+idStart+0,
        eddb: FSD_EDDB_ID_OFFSET+idStart+0
    }
}