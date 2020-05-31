import React, {useContext, useEffect, useState} from 'react';
import {Editor, EditorState, convertToRaw, RichUtils, convertFromRaw} from 'draft-js';

function FormDesc(props) {
    
    const [loading, setLoad] = useState(false);
    const [appExists, setExists] = useState(false);

    const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty(),
  );



    useEffect( () => {
      let data = convertToRaw(editorState.getCurrentContent())
      props.saveText(data)
    

    },[])



  function onChange (state){
    setEditorState(state);
    let data = convertToRaw(editorState.getCurrentContent())
    props.saveText(data)

}

  function toggleBlockType(blockType){
    onChange(
        RichUtils.toggleBlockType(
            editorState,
            blockType
        ));
    }




    return (
        <div className={"canEdit"}>
            <BlockStyleControls
                editorState={editorState}
                onToggle={toggleBlockType}
                />
            
            <Editor readOnly={false} editorState={editorState} onChange={(setEditorState, onChange)}/>
        </div>
      );
  }
  



const BLOCK_TYPES = [
	{label: 'H1', style: 'header-one'},
	{label: 'H2', style: 'header-two'},
	{label: 'H3', style: 'header-three'},
	{label: 'H4', style: 'header-four'},
	{label: 'H5', style: 'header-five'},
	{label: 'H6', style: 'header-six'},
	{label: 'UL', style: 'unordered-list-item'},
	{label: 'OL', style: 'ordered-list-item'},

];

const BlockStyleControls = ({editorState, onToggle}) => {
	const selection = editorState.getSelection();
	const blockType = editorState
	.getCurrentContent()
	.getBlockForKey(selection.getStartKey())
	.getType();

	return (
		<div className="RichEditor-controls">
			{BLOCK_TYPES.map((type) =>
                <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={onToggle}
                    style={type.style}
                    />
            )}
		</div>
	);
};


const StyleButton = ({style, onToggle, active, label}) => {
	const onMouseDown = (e) => {
			e.preventDefault();
			onToggle(style);
	}
	
	const className = !active ? 'RichEditor-styleButton' : 'RichEditor-styleButton RichEditor-activeButton'
	
	return (
		<span className={className} onMouseDown={onMouseDown}>
			{label}
		</span>
	);

}


 export default FormDesc