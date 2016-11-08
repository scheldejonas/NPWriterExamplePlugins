import PluginComponent from './PluginComponent'

export default {
    name: 'open-modal',
    id: 'se.infomaker.open-modal',
    configure: function (config) {
        config.addComponentToSidebarWithTabId(this.id, 'main', PluginComponent)
    }
}