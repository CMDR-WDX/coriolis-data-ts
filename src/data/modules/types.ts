export type ModuleSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type ModuleRating = "A" | "B" | "C" | "D" | "E" | "F"


export interface GenericModulesI18n {
    name: string,
    description: string
}

export type i18nLocaleKeys = "en" // you add more locales here (e.g. 'de', 'fr', 'ru' and so on)


export type IdType = "symbol" | "ed" | "eddb" | "coriolis" // you can add more IDs here
/**
 * 
 * All Modules inherit from this.
 * This contains properties that are common for all 
 * Modules
 */
export default interface GenericModule {
    /**
     * A Modules Size. 
     * This ranges from 0 (Tiny for Utility Modules) to 8 
     * (Class 8 found on, for example, the Imp. Cutter)
     */
    moduleSize: ModuleSize
    /**
     * Module Rating A - F
     */
    moduleRating: ModuleRating
    /**
     * Default Purchase Price in CR
     */
    cost: number
    /**
     * The Module's Mass in t
     */
    mass: number
    /**
     * A Record of different IDs. This should contain IDs for external Tools like Coriolis or EDDB
     */
    ids: Partial<Record<IdType, string | number>>
    /**
     * Translation Data
     */
    i18n: Partial<Record<i18nLocaleKeys, GenericModulesI18n>>
    /**
     * Power Consumption in MW
     */
    powerConsumption: number
    /**
     * A Module's Integrity
     */
    integrity: number
}