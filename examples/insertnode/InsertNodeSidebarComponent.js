import {Component} from 'substance'
import {api, idGenerator} from 'writer'

class InsertNodeSidebarComponent extends Component {

    render($$) {

        // Render a button, clicking results in inserting a new node
        return $$('button')
            .addClass('sc-np-btn btn-primary')
            .append('InsertNode')
            .on('click', this.insertNode)
    }

    insertNode() {

        // Create the node
        var node = {
            id: idGenerator(),
            type: 'insertnode',
            dataType: 'insertnode',
            text: "Edit me...",
        }

        // Insert as a block node via the API

        api.document.insertBlockNode(node.type, node)
    }
}

export default InsertNodeSidebarComponent