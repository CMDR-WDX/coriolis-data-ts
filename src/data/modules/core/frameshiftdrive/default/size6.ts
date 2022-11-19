import { i18nData } from "../i18n";
import FrameshiftDriveModule from "../types";
import { FSD_EDDB_ID_OFFSET, FSD_ED_ID_OFFSET } from "./helper";


const moduleSize = 6;
const idStart = (moduleSize-2) * 5

export const A: FrameshiftDriveModule = {
    moduleSize,
    cost: 16_179_530,
    fuelMultiplier: 0.012,
    fuelPower: 2.6,
    integrity: 141,
    mass: 40,
    maxFuelPerJump: 8,
    optimalMass: 1800,
    powerConsumption: 0.75,
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
    cost: 5_393_180,
    fuelMultiplier: 0.01,
    fuelPower: 2.6,
    integrity: 170,
    mass: 64,
    maxFuelPerJump: 6.6,
    optimalMass: 1500,
    powerConsumption: 0.63,
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
    cost: 1_797_730,
    fuelMultiplier: 0.008,
    fuelPower: 2.6,
    integrity: 113,
    mass: 40,
    maxFuelPerJump: 5.3,
    optimalMass: 1200,
    powerConsumption: 0.5,
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
    cost: 599_240,
    fuelMultiplier: 0.01,
    fuelPower: 2.6,
    integrity: 90,
    mass: 16,
    maxFuelPerJump: 5.3,
    optimalMass: 1080,
    powerConsumption: 0.45,
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
    cost: 199_750,
    fuelMultiplier: 0.011,
    fuelPower: 2.6,
    integrity: 102,
    mass: 40,
    maxFuelPerJump: 5.3,
    optimalMass: 960,
    powerConsumption: 0.4,
    moduleRating: "E",
    i18n: i18nData,
    ids: {
        symbol: `Int_Hyperdrive_Size${moduleSize}_Class1`,
        coriolis: "F"+(idStart+4),
        ed: FSD_ED_ID_OFFSET+idStart+0,
        eddb: FSD_EDDB_ID_OFFSET+idStart+0
    }
}