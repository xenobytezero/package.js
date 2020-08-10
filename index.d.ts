declare module 'package.js' {

    interface PackageJson {
        name: string;
        [x: string]: any
    }

    export interface Plugin {
        dir: string;
        meta: PackageJson;
        instance: any
    }

    interface AutoloadConfig {
        debug?: boolean,
        identify: (this: Plugin) => boolean,
        initializer?: (Module: any) => any,
        directoryScanLevel?: number,
        directories: string[],
        packageConstructorSettings?: {}

    }

    export default class PackageController {

        loadedPlugins: Plugin[];

        isLoaded(packageName: string): boolean;
        autoload: (config: AutoloadConfig) => Plugin[]

    }

}