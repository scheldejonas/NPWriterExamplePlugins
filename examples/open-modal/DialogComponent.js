import {Component} from 'substance'

class DialogComponent extends Component {

    render($$) {
        return $$('div').append('Hello world from DialogComponent')
    }

    onClose(action) { // action is save or cancel

    }
}
export default DialogComponent