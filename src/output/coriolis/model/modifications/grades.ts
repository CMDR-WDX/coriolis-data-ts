export interface IGradeEntry {
    components: Record<string, number>,
    uuid: string,
    features: Record<string, [number, number]>
}

type Grade = "1" | "2" | "3" | "4" | "5"
export type IGrades = Partial<Record<Grade, IGradeEntry>>

