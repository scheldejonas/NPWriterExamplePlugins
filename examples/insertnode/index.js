import {registerPlugin} from 'writer'
import InsertNodePackage from './InsertNodePackage'

(() => {
    if (registerPlugin) {
        registerPlugin(InsertNodePackage)
    } else {
        console.error("Register method not yet available");
    }
})()