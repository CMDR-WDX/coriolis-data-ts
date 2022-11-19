import { i18nData } from "../i18n";
import FrameshiftDriveModule, { ValidFsdModuleRating } from "../types";
import { FSD_EDDB_ID_OFFSET, FSD_ED_ID_OFFSET, makeCoriolisId } from "./helper";


const moduleSize = 7;
const idStart = (moduleSize-2) * 5

export const A: FrameshiftDriveModule = {
    moduleSize,
    cost: 51_289_110,
    fuelMultiplier: 0.012,
    fuelPower: 2.75,
    integrity: 164,
    mass: 80,
    maxFuelPerJump: 12.8,
    optimalMass: 2700,
    powerConsumption: 0.9,
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
    cost: 17_096_370,
    fuelMultiplier: 0.01,
    fuelPower: 2.75,
    integrity: 197,
    mass: 128,
    maxFuelPerJump: 10.6,
    optimalMass: 2250,
    powerConsumption: 0.75,
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
    cost: 5_698_790,
    fuelMultiplier: 0.008,
    fuelPower: 2.75,
    integrity: 131,
    mass: 80,
    maxFuelPerJump: 8.5,
    optimalMass: 1800,
    powerConsumption: 0.6,
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
    cost: 1_899_600,
    fuelMultiplier: 0.01,
    fuelPower: 2.75,
    integrity: 105,
    mass: 32,
    maxFuelPerJump: 8.5,
    optimalMass: 1620,
    powerConsumption: 0.54,
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
    cost: 633_200,
    fuelMultiplier: 0.011,
    fuelPower: 2.75,
    integrity: 118,
    mass: 80,
    maxFuelPerJump: 8.5,
    optimalMass: 1440,
    powerConsumption: 0.48,
    moduleRating: "E",
    i18n: i18nData,
    ids: {
        symbol: `Int_Hyperdrive_Size${moduleSize}_Class1`,
        coriolis: makeCoriolisId(idStart+4),
        ed: FSD_ED_ID_OFFSET+idStart+0,
        eddb: FSD_EDDB_ID_OFFSET+idStart+0
    }
}

const grouped: Record<ValidFsdModuleRating, FrameshiftDriveModule> = {
    A, B, C, D, E
}

export default grouped