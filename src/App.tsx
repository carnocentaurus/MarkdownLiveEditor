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
        <body className='
            bg-[#cfcfcf]
            m-4
        '>
            <p className='
                font-righteous
                text-lg
                text-[#666]
                text-center
                mb-2
            '>MARKDOWN LIVE EDITOR</p>

            <main className='bg-[#cfcfcf]'>
                <div>
                      <textarea
                          value={plaintext}
                          onChange={(event) => setPlaintext(event.target.value)}
                          placeholder='Input Text'
                          className='
                              font-poppins
                              text-md
                              text-[#333]
                              w-full
                              h-60
                              border-2
                              border-solid
                              border-[#333]
                              bg-[#f4f4f4]
                              p-4
                              mb-8
                              placeholder-font-normal
                              placeholder-[#9ca3af]
                              [&:::-webkit-scrollbar]:hidden
                          '
                      ></textarea>
                </div>

                <div className='flex-col'>
                      <div
                          dangerouslySetInnerHTML={{ __html: getCleanedHTML(plaintext) }}
                          className='
                              text-md
                              bg-[#f4f4f4]
                              border-2
                              border-solid
                              border-[#333]
                              w-full
                              h-60
                              p-4
                              list-inside
                              wrap-break-word
                              overflow-y-scroll
                              whitespace-pre-wrap
                              [&_code]:font-mono! [&_code]:font-bold! 
                              [&_pre]:font-mono! [&_pre]:!font-bold!
                              [&_tr]:[page-break-inside:avoid]
                          '
                      ></div>
                      <button onClick={window.print}>Print PDF</button>
                </div>
            </main>
        </body>
    );
}

export default MarkdownLiveEditor;