import React from 'react';

const EditorJSRenderer = ({ data }) => {
  return (
    <div style={{fontFamily:"revert"}} className="editorjs-container">
      {data.map((block,index) => {
          switch (block.type) {
              case 'heading':
                const HeadingTag:JSX.IntrinsicElements = `h${block.data.level}`
                return <HeadingTag>{block.data.text}</HeadingTag>;            
          case 'paragraph':
            return <p>{block.data.text}</p>;
          case 'list':
            return block.data.style === 'ordered' ? (
              <ol>
                {block.data.items.map(item => <li>{item}</li>)}
              </ol>
            ) : (
              <ul>
                {block.data.items.map(item => <li>{item}</li>)}
              </ul>
            );
          case 'Quote':
            return <blockquote key={index}>
            <p>{block.data.text}</p>
            {block.data.caption && <footer>{block.data.caption}</footer>}
          </blockquote>
          case 'table':
            return (
                <table key={index} className="editorjs-table">
                  <tbody>
                    {block.data.content.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default EditorJSRenderer;
