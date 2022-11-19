export const FSD_ED_ID_OFFSET = 128064103
export const FSD_EDDB_ID_OFFSET = 961

export const makeCoriolisId = (index: number) => {
    const base36Value = index.toString(36);
    return "F"+base36Value
}