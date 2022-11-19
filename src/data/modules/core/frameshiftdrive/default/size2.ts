import { i18nData } from "../i18n";
import FrameshiftDriveModule from "../types";
import { FSD_EDDB_ID_OFFSET, FSD_ED_ID_OFFSET } from "./helper";

const moduleSize = 2;
const idStart = (moduleSize-2) * 5

export const A: FrameshiftDriveModule = {
    moduleSize,
    cost: 160_220,
    fuelMultiplier: 0.012,
    fuelPower: 2,
    integrity: 64,
    mass: 2.5,
    maxFuelPerJump: 0.9,
    optimalMass: 90,
    powerConsumption: 0.3,
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
    cost: 53_410,
    fuelMultiplier: 0.01,
    fuelPower: 2,
    integrity: 77,
    mass: 4,
    maxFuelPerJump: 0.8,
    optimalMass: 75,
    powerConsumption: 0.25,
    moduleRating: "B",
    i18n: i18nData,
    ids: {
        symbol: `Int_Hyperdrive_Size${moduleSize}_Class4`,
        coriolis: "F"+(idStart+1),
        ed: FSD_ED_ID_OFFSET+idStart+3,
        eddb: FSD_EDDB_ID_OFFSET+idStart+3,
    }
}

export const C: FrameshiftDriveModule = {
    moduleSize,
    cost: 17_800,
    fuelMultiplier: 0.008,
    fuelPower: 2,
    integrity: 51,
    mass: 2.5,
    maxFuelPerJump: 0.6,
    optimalMass: 60,
    powerConsumption: 0.2,
    moduleRating: "C",
    i18n: i18nData,
    ids: {
        symbol: `Int_Hyperdrive_Size${moduleSize}_Class3`,
        coriolis: "F"+(idStart+2),
        ed: FSD_ED_ID_OFFSET+idStart+2,
        eddb: FSD_EDDB_ID_OFFSET+idStart+2,
    }
}

export const D: FrameshiftDriveModule = {
    moduleSize,
    cost: 5_930,
    fuelMultiplier: 0.01,
    fuelPower: 2,
    integrity: 41,
    mass: 1,
    maxFuelPerJump: 0.6,
    optimalMass: 54,
    powerConsumption: 0.18,
    moduleRating: "D",
    i18n: i18nData,
    ids: {
        symbol: `Int_Hyperdrive_Size${moduleSize}_Class2`,
        coriolis: "F"+(idStart+3),
        ed: FSD_ED_ID_OFFSET+idStart+1,
        eddb: FSD_EDDB_ID_OFFSET+idStart+1,
    }
}

export const E: FrameshiftDriveModule = {
    moduleSize,
    cost: 1_980,
    fuelMultiplier: 0.011,
    fuelPower: 2,
    integrity: 46,
    mass: 2.5,
    maxFuelPerJump: 0.6,
    optimalMass: 48,
    powerConsumption: 0.16,
    moduleRating: "E",
    i18n: i18nData,
    ids: {
        symbol: `Int_Hyperdrive_Size${moduleSize}_Class1`,
        coriolis: "F"+(idStart+4),
        ed: FSD_ED_ID_OFFSET+idStart+0,
        eddb: FSD_EDDB_ID_OFFSET+idStart+0,
    }
}