import {Component} from 'substance'

class YoutubeEmbedComponent extends Component {

    didMount() {
        this.context.editorSession.onRender('document', this.rerender, this, { path: [this.props.node.id] })

        this.context.api.refs.writer.ResourceManageranager.triggerFetch(this.props.node)
    }


    dispose() {
        this.context.editorSession.off(this)
    }


    render($$) {
        const node = this.props.node
        const el = $$('div')


        el.append($$('div').append($$('img').attr('src', node.thumbnail_url).attr('style', 'width:100%')))
        el.append($$('h2').append(node.title).attr('style', 'background-color: #efefef; padding: 10px 15px; font-size:1rem'))
        return el
    }
}

export default YoutubeEmbedComponent