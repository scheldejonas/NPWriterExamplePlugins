import {BlockNode} from 'substance'

/**
 * <object id="" type="insertnode">
 *      <data>
 *          <text>this is the text</text>
 *      </data>
 * </object>
 */
class InsertNodeNode extends BlockNode { }

InsertNodeNode.define({
    type: 'insertnode',
    dataType: 'string',
    text: 'string'
})

export default InsertNodeNode