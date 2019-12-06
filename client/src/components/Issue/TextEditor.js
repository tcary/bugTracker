import React from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  ContentState,
  convertFromRaw
} from "draft-js";
import BlockStyleToolbar, {
  getBlockStyle
} from "./blockStyles/BlockStyleToolbar";
import "./editorCSS/style.css";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    // the code below will load an empty text Editor
    this.state = {
      editorState: EditorState.createEmpty()
    };

    // the code below is trying to load the content from the Database.
    // const content = convertFromRaw(JSON.parse(props.details));
    // const editorState = EditorState.createWithContent(content)

    // this.state = {
    //     editorState: EditorState
    //   };
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

  render() {
    return (
      <div className="editorContainer">
        <div className="toolbar">
          <BlockStyleToolbar
            // editorState={this.state.editorState}
            editorState={EditorState.createWithContent(
              ContentState.createFromText("Hello")
            )}
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
        {/* <Editor
            blockStyleFn={getBlockStyle}
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
          /> */}
        {/* </div> */}
      </div>
    );
  }
}

export default TextEditor;
