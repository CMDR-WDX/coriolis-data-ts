type ModificationType = "percentage" | "object" | "numeric"
type ModificationMethod = "multiplicative" | "overwrite" | "additive"

export default interface IModification {
    id: number,
    name: number,
    type: ModificationType,
    method: ModificationMethod,
    aggregated?: boolean,
    higherbetter?: boolean
}

export type ModificationIds = 
"ammo" |
"boot" |
"brokenregen" |
"burst" |
"burstrof" |
"causres" |
"clip" |
"damage" |
"damagedist" |
"distdraw" |
"duration" |
"eff" |
"engcap" |
"engrate" |
"explres" |
"facinglimit" |
"falloff" |
"fallofffromrange" |
"hullboost" |
"hullreinforcement" |
"integrity" |
"jitter" |
"kinres" |
"mass" |
"maxfuel" |
"optmass" |
"optmul" |
"pgen" |
"piercing" |
"power" |
"protection" |
"range" |
"ranget" |
"regen" |
"reload" |
"rof" |
"angle" |
"scanrate" |
"scantime" |
"shield" |
"shieldboost" |
"shotspeed" |
"spinup" |
"syscap" |
"sysrate" |
"thermload" |
"thermres" |
"wepcap" |
"weprate" |
"shieldreinforcement" |
"jumpboost" |
"shieldaddition" |
"chargetime" |
"proberadius" |
"scanrange" |
"maxangle" 