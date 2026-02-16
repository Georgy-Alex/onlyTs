export type BuildMode = 'development' | 'production'

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths,
    apiUrl: string,
    port: number,
    isDev: boolean
}
export interface BuildEnv {
    mode: BuildMode,
    branch?: string,
    port: number
}
export interface BuildPaths {
    entry: string,
    build: string,
    html: string,
    src: string
}
