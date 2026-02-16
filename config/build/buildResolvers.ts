import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";
import path from 'path';

export function buildResolvers({paths}: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [
            paths.src,
            'node_modules'
        ],
        mainFiles: ['index'],
        alias: {
            '@assets': path.resolve(paths.src, './shared/assets'), // Fixed alias
        }
    }
}
