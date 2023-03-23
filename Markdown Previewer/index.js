
marked.setOptions({
    breaks:true
})

const renderer = new marked.Renderer();


function App(){

    const[text, setText] = React.useState("");

    return(
    <div className="text-center px-4">
        <h1 className="p-4">My Markdown Previewer</h1>
        <textarea
         name="text"
         rows="10"
        className="textarea"
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your markdown text here..."
        ></textarea>
        <h3 className="mt-3">Output</h3>
        <Preview markdown={text}/>
    </div>
    );
}

function Preview({markdown}) {
  return (
    <div 
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(markdown, {renderer: renderer}),
    }} 
    />
  );
}

ReactDOM.render(<App/>,document.getElementById('root'));