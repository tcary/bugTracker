import React from "react";
import { Editor, EditorState, RichUtils, ContentState, convertFromRaw, convertToRaw } from "draft-js";
import BlockStyleToolbar, { getBlockStyle } from "./blockStyles/BlockStyleToolbar";
import "./editorCSS/style.css";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    // the code below will load an empty text Editor
    this.state = {
      editorState: EditorState.createEmpty()
      // editorState: EditorState.createWithContent(
        // convertFromRaw(JSON.parse(props.details))
      
      // rawContent: props.details
    };

    // the code below is trying to load the content from the Database.
    // const content = convertFromRaw(JSON.parse(props.details));
    // const editorState = EditorState.createWithContent(content)

    // this.state = {
    //     editorState: EditorState
    //   };
  }
  // componentDidMount(props) {
  //  let rawContent = props.details;

  //     if (rawContent) {
  //       this.setState({ editorState: EditorState.createWithContent(convertFromRaw(rawContent)) })
  //     } else {
  //       this.setState({ editorState: EditorState.createEmpty() });
  //     }
  // }

  toggleBlockType = blockType => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  onChange = editorState => {
    const contentState = editorState.getCurrentContent();
    // console.log("content state", convertToRaw(contentState));
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
