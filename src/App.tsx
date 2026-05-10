import './App.css';
import { useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

function MarkdownLiveEditor() {
    const [plaintext, setPlaintext] = useState('');

    function getCleanedHTML(text: string): string {
        const cleanedText = text.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, "");
        const rawHTML = marked.parse(cleanedText) as string;
        
        return DOMPurify.sanitize(rawHTML);
    }

    return(
        <>
            <p>MarkdownLiveEditor</p>

            <main>
                <div>
                      <textarea
                          value={plaintext}
                          onChange={(event) => setPlaintext(event.target.value)}
                          placeholder='Input Text'
                      ></textarea>
                </div>

                <div>
                      <div
                          dangerouslySetInnerHTML={{ __html: getCleanedHTML(plaintext) }}
                      ></div>
                      <button onClick={window.print}>Print PDF</button>
                </div>
            </main>
        </>
    );
}

export default MarkdownLiveEditor;