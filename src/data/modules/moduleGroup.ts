/**
 * This defines a group of modules - an Engineer can (as of now) Engineer all Modules in a "Group".
 * An Example would be "Shield Generators" as the Group and Bi-Weaves, Blue Shields and 
 * Prismatics as Modules in that Group
 * 
 * 
 */
export default abstract class ModuleGroup<T> {
    // Returns all Entries 
    abstract all() : T[]
}