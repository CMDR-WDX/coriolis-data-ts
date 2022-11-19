import { i18nData } from "../i18n";
import FrameshiftDriveModule from "../types";
import { FSD_EDDB_ID_OFFSET, FSD_ED_ID_OFFSET, makeCoriolisId } from "./helper";


const moduleSize = 3;
const idStart = (moduleSize-2) * 5

export const A: FrameshiftDriveModule = {
    moduleSize,
    cost: 507_910,
    fuelMultiplier: 0.012,
    fuelPower: 2.15,
    integrity: 80,
    mass: 5,
    maxFuelPerJump: 1.8,
    optimalMass: 150,
    powerConsumption: 0.45,
    moduleRating: "A",
    i18n: i18nData,
    ids: {
        symbol: `Int_Hyperdrive_Size${moduleSize}_Class5`,
        coriolis: makeCoriolisId(idStart+0),
        ed: FSD_ED_ID_OFFSET+idStart+4,
        eddb: FSD_EDDB_ID_OFFSET+idStart+4
    }
}

export const B: FrameshiftDriveModule = {
    moduleSize,
    cost: 169_300,
    fuelMultiplier: 0.01,
    fuelPower: 2.15,
    integrity: 96,
    mass: 8,
    maxFuelPerJump: 1.5,
    optimalMass: 125,
    powerConsumption: 0.38,
    moduleRating: "B",
    i18n: i18nData,
    ids: {
        symbol: `Int_Hyperdrive_Size${moduleSize}_Class4`,
        coriolis: makeCoriolisId(idStart+1),
        ed: FSD_ED_ID_OFFSET+idStart+3,
        eddb: FSD_EDDB_ID_OFFSET+idStart+3
    }
}

export const C: FrameshiftDriveModule = {
    moduleSize,
    cost: 56_440,
    fuelMultiplier: 0.008,
    fuelPower: 2.15,
    integrity: 64,
    mass: 5,
    maxFuelPerJump: 1.2,
    optimalMass: 100,
    powerConsumption: 0.3,
    moduleRating: "C",
    i18n: i18nData,
    ids: {
        symbol: `Int_Hyperdrive_Size${moduleSize}_Class3`,
        coriolis: makeCoriolisId(idStart+2),
        ed: FSD_ED_ID_OFFSET+idStart+2,
        eddb: FSD_EDDB_ID_OFFSET+idStart+2
    }
}

export const D: FrameshiftDriveModule = {
    moduleSize,
    cost: 18_810,
    fuelMultiplier: 0.01,
    fuelPower: 2.15,
    integrity: 51,
    mass: 2,
    maxFuelPerJump: 1.2,
    optimalMass: 90,
    powerConsumption: 0.27,
    moduleRating: "D",
    i18n: i18nData,
    ids: {
        symbol: `Int_Hyperdrive_Size${moduleSize}_Class2`,
        coriolis: makeCoriolisId(idStart+3),
        ed: FSD_ED_ID_OFFSET+idStart+1,
        eddb: FSD_EDDB_ID_OFFSET+idStart+1
    }
}

export const E: FrameshiftDriveModule = {
    moduleSize,
    cost: 6_270,
    fuelMultiplier: 0.011,
    fuelPower: 2.15,
    integrity: 58,
    mass: 5,
    maxFuelPerJump: 1.2,
    optimalMass: 80,
    powerConsumption: 0.24,
    moduleRating: "E",
    i18n: i18nData,
    ids: {
        symbol: `Int_Hyperdrive_Size${moduleSize}_Class1`,
        coriolis: makeCoriolisId(idStart+4),
        ed: FSD_ED_ID_OFFSET+idStart+0,
        eddb: FSD_EDDB_ID_OFFSET+idStart+0
    }
}