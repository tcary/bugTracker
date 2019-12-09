import React from "react";
import { Editor, EditorState, RichUtils, ContentState, convertFromRaw, convertToRaw } from "draft-js";
import BlockStyleToolbar, { getBlockStyle } from "./blockStyles/BlockStyleToolbar";
import "./editorCSS/style.css";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
   // let content = EditorState.createEmpty(); 
    this.state = {
      editorState: EditorState.createEmpty()
    };

    
    // const contentState = convertFromRaw(props);
    // console.log(contentState);
    // console.log(contentState);


//     let editorStatewithContent = EditorState.createWithContent(contentState);     
//  //Then you set the state 
//     this.state = {
//      editorState:  editorStatewithContent      
//     }
    // console.log(props.details);
    //this.state = {
     // editorState: EditorState.createWithContent("Test 1")
      //editorState: EditorState.createWithContent(props.details)
   // };
  }
  toggleBlockType = blockType => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  onChange = editorState => {
    this.setState({
      editorState
    });
  };

  handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );  
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  onUnderlineClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  };

  onBoldClick = event => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  };

  onItalicClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  };

  toggleBlockType = blockType => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  render(props) {
    console.log(this.state)
    return (
      <div className="editorContainer">
        <div className="toolbar">
          <BlockStyleToolbar
            key="78"
            //editorState={this.state.editorState}
            onToggle={this.toggleBlockType}
          />
          <button className="styleButton" onClick={this.onUnderlineClick}>
            U
          </button>
          <button className="styleButton" onClick={this.onBoldClick}>
            <b>B</b>
          </button>
          <button className="styleButton" onClick={this.onItalicClick}>
            <em>I</em>
          </button>
        </div>

        {/* <div className="editors"> */}
          {/* <TextEditor
            blockStyleFn={getBlockStyle}
            //editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
          /> */}
        {/* </div> */}
      </div>
    );
  }
}

export default TextEditor;
