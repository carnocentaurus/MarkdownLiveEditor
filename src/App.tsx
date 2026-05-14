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
        <main className='m-4 md:m-8 lg:m-4'>
            <p className='
                font-righteous
                text-lg md:text-2xl lg:text-lg
                text-[#666]
                text-center
                mb-2 md:mb-4
                print:hidden
            '>MARKDOWN LIVE EDITOR</p>

            <div className='lg:flex lg:m-4 lg:flex-row lg:justify-evenly'>
                <div className='print:hidden'>
                    <textarea
                        value={plaintext}
                        onChange={(event) => setPlaintext(event.target.value)}
                        placeholder='Input Text'
                        className='
                            font-poppins
                            text-base md:text-2xl lg:text-base
                          text-[#333]
                            w-full lg:w-115
                            h-60 md:h-100 lg:h-115
                            border-2 md:border-3
                            border-solid
                          border-[#333]
                          bg-[#f4f4f4]
                            p-4 md:p-8 lg:p-4
                            mb-8 lg:mb-0
                            placeholder-font-normal
                          placeholder-[#9ca3af]
                           [&:::-webkit-scrollbar]:hidden
                        '
                    ></textarea>
                </div>

                <div className='flex-col'>
                    <div
                        id="markdown-output-display"
                        className={`
                            font-poppins
                            relative 
                            text-base md:text-2xl lg:text-base
                          bg-[#f4f4f4] 
                            border-2 md:border-3
                            border-solid 
                          border-[#333] 
                            w-full lg:w-115
                            h-60 md:h-100 lg:h-115
                            p-4 md:p-8 lg:p-4
                            overflow-y-scroll 
                            [&:::-webkit-scrollbar]:hidden
                            wrap-break-words
                            [&_table]:border-2! [&_table]:border-solid! [&_table]:border-[#333]! [&_table]:border-collapse!
                            [&_th]:border-2! [&_th]:border-solid! [&_th]:border-[#333]! [&_th]:p-[0.2rem]! [&_th]:font-bold!
                            [&_td]:border-2! [&_td]:border-solid! [&_td]:border-[#333]! [&_td]:p-[0.2rem]!
                            [&_tr]:[page-break-inside:avoid]!
                            prose
                            max-w-none
                            print:static! print:h-auto! print:max-h-none! print:overflow-visible! 
                            print:border-none! print:p-0! print:m-0!
                            ${!plaintext ? "before:content-['Output_Markdown'] before:text-[#9ca3af]" : ""}
                        `}
                        dangerouslySetInnerHTML={{ __html: getCleanedHTML(plaintext) }}
                    ></div>
                    <button 
                        onClick={() => window.print()}
                        className='
                            font-poppins
                            text-base md:text-2xl lg:text-base
                          text-[#f4f4f4]
                          bg-[#333]
                            border-none
                            py-[0.2rem] md:py-2 lg:py-[0.2rem]
                            w-full
                            hover:opacity-80
                            print:hidden
                        '
                    >
                        Print PDF
                    </button>
                </div>
            </div>
        </main>
    );
}

export default MarkdownLiveEditor;