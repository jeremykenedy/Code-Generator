import NameItem from '../Base/NameItem'
import { ArtisanManager } from './Artisan'
import { EntityManager } from './Entity'
import Folder from './Folder'
import { PresetManager } from './Preset'

const Version = 14

export default class Project extends NameItem {
    version = Version
    ns = 'App'
    dataVersion = '1.0'
    description: string = ''
    fakerScript: string = ''
    script: string = ''
    server: string = 'http://localhost'
    validationScript: string = ''

    readonly artisanManager = new ArtisanManager()
    readonly entityManager = new EntityManager()
    readonly folder = new Folder('/')
    readonly presetManager = new PresetManager()

    getEntity(name: string) {
        return this.entityManager.find(name)
    }

    getLayer(name: string) {
        return this.folder.find(name)
    }

    getPreset(name: string) {
        return this.presetManager.find(name)
    }
}
