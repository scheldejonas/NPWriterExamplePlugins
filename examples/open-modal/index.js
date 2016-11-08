import {registerPlugin} from 'writer'
import PluginPackage from './PluginPackage'

(() => {
    if (registerPlugin) {
        registerPlugin(PluginPackage)
    } else {
        console.error("Register method not yet available");
    }
})()