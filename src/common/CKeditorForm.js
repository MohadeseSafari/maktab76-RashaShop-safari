import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKeditorForm = ({description}) => {

    return (
        <div >
            <CKEditor
                editor={ClassicEditor}
                data={description}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
            />
        </div>
    );

}

export default CKeditorForm;
