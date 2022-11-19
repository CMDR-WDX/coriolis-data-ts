import GenericModule from "../../types";

/**
 * Interface defining a FSD Module
 */
export default interface FrameshiftDriveModule extends GenericModule {
    /**
     * TODO: What exactly does this define?
     */
    fuelMultiplier: number
    /**
     * TODO: What exactly does this define?
     */
    fuelPower: number
    /**
     * Optimal Mass in Tons
     */
    optimalMass: number
    /**
     * Maximum Fuel that can be consumed per High-Wake
     */
    maxFuelPerJump: number
}