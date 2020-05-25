import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../UserContext"
import ReactDOM from 'react-dom';
import {Editor, EditorState, convertToRaw, RichUtils, convertFromRaw} from 'draft-js';
function MyEditor(props) {
    
    const [loading, setLoad] = useState(false);
    const [appExists, setExists] = useState(false);

    const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty(),
  );

  const userData = useContext(UserContext)
  const user = userData.value
  
  let type = props.postType
  let id = props.postId
  let userId = user.studentNo

    useEffect( () => {
        
        let data = {
        "postType" : type,
        "postId" : id,
        "userId" : userId
        }
        
        setLoad(true);
        getData(data)
        .then(res => res.json())
        .then(final => {
            if(final!== null){
                
                let fetchedData = {
                    blocks: JSON.parse(final.text).blocks,
                    entityMap: JSON.parse(final.text).blocks,
                }

                setEditorState(EditorState.createWithContent(convertFromRaw(fetchedData)));
                setExists(true);
                

            } else {
                setEditorState(EditorState.createEmpty())
                setExists(false)
            }
            setLoad(false);
        })


    },[id])


  function saveText () {
        let data = convertToRaw(editorState.getCurrentContent())
        
        data.postType = type
        data.postId = id
        data.userId = userId
        data.appExist = appExists

        postData(data)
        .then(res => res.json())
        .then(final => {
            console.log(final)
        })
  }

  function onChange (state){
    setEditorState(state);
}

  function toggleBlockType(blockType){
    onChange(
        RichUtils.toggleBlockType(
            editorState,
            blockType
        ));
    }



  if(loading){
      return <h3>loading...</h3>
  } else {
    return (
        <div className="editor">
            <BlockStyleControls
                editorState={editorState}
                onToggle={toggleBlockType}
                />
            <Editor editorState={editorState} onChange={setEditorState}/>
            <button onClick={()=> saveText()}>Save</button> 
        </div>
      );
  }
  
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

const postData = async (data) => {
    
   

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({data})
    };
    
    const result = await fetch(
      `http://192.168.64.3/php-aws-codepipeline/applications.php`, requestOptions,
    );
    
    return result

  };




  const getData = async (data) => {
    const result = await fetch(
      `http://192.168.64.3/php-aws-codepipeline/applications.php?userId=${data.userId}&postId=${data.postId}`
    );
    return result
  };

 export default MyEditor