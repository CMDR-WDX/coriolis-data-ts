import { i18nData } from "../i18n";
import FrameshiftDriveModule from "../types";
import { FSD_EDDB_ID_OFFSET, FSD_ED_ID_OFFSET } from "./helper";


const moduleSize = 8;
const idStart = (moduleSize-2) * 5

export const A: FrameshiftDriveModule = {
    moduleSize,
    cost: 162_586_488,
    fuelMultiplier: 0.012,
    fuelPower: 2.9,
    integrity: 188,
    mass: 160,
    maxFuelPerJump: -1, // Fix — there is not Ship that can accept a Class 8 FSD 
    optimalMass: -1, // Fix
    powerConsumption: 1.05,
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
    cost: 54_195_496,
    fuelMultiplier: 0.01,
    fuelPower: 2.9,
    integrity: 225,
    mass: 256,
    maxFuelPerJump: -1,
    optimalMass: -1,
    powerConsumption: 0.88,
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
    cost: 18_065_166,
    fuelMultiplier: 0.008,
    fuelPower: 2.9,
    integrity: 150,
    mass: 160,
    maxFuelPerJump: -1,
    optimalMass: -1,
    powerConsumption: 0.7,
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
    cost: 6_021_723,
    fuelMultiplier: 0.01,
    fuelPower: 2.9,
    integrity: 120,
    mass: 64,
    maxFuelPerJump: -1,
    optimalMass: -1,
    powerConsumption: 0.63,
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
    cost: 2_007_242,
    fuelMultiplier: 0.011,
    fuelPower: 2.9,
    integrity: 135,
    mass: 160,
    maxFuelPerJump: -1,
    optimalMass: -1,
    powerConsumption: 0.56,
    moduleRating: "E",
    i18n: i18nData,
    ids: {
        symbol: `Int_Hyperdrive_Size${moduleSize}_Class1`,
        coriolis: "F"+(idStart+4),
        ed: FSD_ED_ID_OFFSET+idStart+0,
        eddb: FSD_EDDB_ID_OFFSET+idStart+0
    }
}