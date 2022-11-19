import { i18nData } from "../i18n";
import FrameshiftDriveModule from "../types";
import { FSD_EDDB_ID_OFFSET, FSD_ED_ID_OFFSET, makeCoriolisId } from "./helper";


const moduleSize = 4;
const idStart = (moduleSize-2) * 5

export const A: FrameshiftDriveModule = {
    moduleSize,
    cost: 1_610_080,
    fuelMultiplier: 0.012,
    fuelPower: 2.3,
    integrity: 100,
    mass: 10,
    maxFuelPerJump: 3,
    optimalMass: 525,
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
    cost: 536_690,
    fuelMultiplier: 0.01,
    fuelPower: 2.3,
    integrity: 120,
    mass: 16,
    maxFuelPerJump: 2.5,
    optimalMass: 437.5,
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
    cost: 178_900,
    fuelMultiplier: 0.008,
    fuelPower: 2.3,
    integrity: 80,
    mass: 10,
    maxFuelPerJump: 2,
    optimalMass: 350,
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
    cost: 59_630,
    fuelMultiplier: 0.01,
    fuelPower: 2.3,
    integrity: 64,
    mass: 4,
    maxFuelPerJump: 2,
    optimalMass: 315,
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
    cost: 19_880,
    fuelMultiplier: 0.011,
    fuelPower: 2.3,
    integrity: 72,
    mass: 10,
    maxFuelPerJump: 2,
    optimalMass: 280,
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