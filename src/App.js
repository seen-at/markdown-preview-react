import { useState } from "react";
import { marked } from "marked";
import './App.scss';

function App() {
  const [text, setText] = useState(` 
  # H1 
  ## H2
  [title](https://www.example.com)

  \`code\`
  \`\`\`
    {
      "firstName": "John",
      "lastName": "Smith",
      "age": 25 
    }
  \`\`\`

  - First
  - Second
  - Third

  > blockquote

  ![alt text](image.jpg)

  **bold text**
  `)

  // new line interpreted as <br>
  marked.setOptions({
    breaks: true
  })

  // onChange event handler takes a function with event object, which will be called when a change in the textarea takes place and the value is set in the 'text' variable using the setText function

  // marked.parse(text) shows the preview with the HTML tags included
  return (
    <div className="App">
      <h2 className="heading">Enter HTML skeleton here</h2>
      <textarea id="editor"
        onChange={(event) => { setText(event.target.value) }}
        value={text}>
      </textarea>
      <h2 className="heading">Marked-down output</h2>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text)
        }}>
      </div>
    </div>
  );
}

export default App;
