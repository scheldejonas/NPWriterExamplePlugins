import {Component} from 'substance'
import {api} from 'writer'
import DialogComponent from './DialogComponent'

class PluginComponent extends Component {

    render($$) {
        const el = $$('div')

        const openDialogButton = $$('button')
            .append("Click me to open dialog")
            .on('click', () => {
                api.ui.showDialog(DialogComponent, {}, {})
            })

        el.append(openDialogButton)

        return el
    }

}
export default PluginComponent