import React from 'react';
import marked from 'marked';
import './App.css';

marked.setOptions({
  breaks: true
});

const defaultValue = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's a sub sub heading
[Cool Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code)
\n
\` var i = 0; \`
\`\`\`python
# This JavaScript string contains some example Markdown that
# uses triple-backticks to delimit a Python code block.
\`\`\`
* my list item 1
* my list item 2
* my list item 3
>Pinterest ugh biodiesel art party stumptown unicorn lo-fi vexillologist tofu vice vape twee photo booth kombucha.

![Kitten](https://media.wired.com/photos/5ed06ca9fbf7b2147038a8a9/16:9/w_240,h_135,c_limit/Gear-New-Pet-1168772154.jpg)

**this is bold**
`

class App extends React.Component {
  state = {
    input: ""
  }

  componentDidMount() {
    this.setState({
      input: marked(defaultValue)
    })
  }

  handleInputChange = (e) => {
    this.setState({
      input: marked(e.target.value, {sanitize: true})
    })
  }

  render() {
    return (
      <div className="App">
        <textarea
          defaultValue={defaultValue}  onChange={this.handleInputChange} className="split" id="editor">
        </textarea>
        <div className="split" id="preview" dangerouslySetInnerHTML={{ __html: this.state.input }} />
      </div>
    );
  }
}

export default App;
