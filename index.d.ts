declare module 'package.js' {

    interface PackageJson {
        name: string;
    }

    export interface Plugin {
        dir: string;
        meta: PackageJson;
        instance: any
    }

    export interface TypedPlugin<TMetaType> extends Plugin {
        meta: PackageJson & TMetaType
    }

    interface AutoloadConfig {
        debug?: boolean,
        identify: (this: Plugin) => boolean,
        initializer?: (Module: any) => any,
        directoryScanLevel?: number,
        directories: string[],
        packageConstructorSettings?: {}

    }

    export default class PackageController<TPluginType extends Plugin> {

        loadedPlugins: TPluginType[];

        isLoaded(packageName: string): boolean;
        autoload: (config: AutoloadConfig) => TPluginType[]

    }

}