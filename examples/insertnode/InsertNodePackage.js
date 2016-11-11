import InsertNodeSidebarComponent from './InsertNodeSidebarComponent'
import InsertNodeNode from './InsertNodeNode'
import InsertNodeConverter from './InsertNodeConverter'
import InsertNodeComponent from './InsertNodeComponent'

export default {
    name: 'insertnode',
    id: 'se.infomaker.insertnode',
    configure: function (config) {

        config.addNode(InsertNodeNode)
        config.addConverter('newsml', InsertNodeConverter)
        config.addComponent('insertnode', InsertNodeComponent)
        config.addComponentToSidebarWithTabId(this.id, 'main', InsertNodeSidebarComponent)
    }
}