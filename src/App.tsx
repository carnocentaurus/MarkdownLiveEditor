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
        <main className='min-h-screen bg-[#f0f0f0] text-black p-4 md:p-8 lg:p-8 font-sans selection:bg-gray-300 flex flex-col'>
            <header className='mb-4 md:mb-8 text-center print:hidden shrink-0'>
                <h1 className='font-sans font-black text-3xl md:text-5xl tracking-tight text-black uppercase m-0'>
                    Markdown Live Editor
                </h1>
            </header>

            <div className='flex flex-col lg:flex-row gap-6 md:gap-8 justify-center items-stretch max-w-360 w-full mx-auto'>
                <div className='flex-1 flex flex-col min-w-0 print:hidden'>
                    <div className='bg-black text-white px-4 py-2 border-2 border-black border-b-0 shrink-0'>
                        <span className='font-bold text-sm tracking-widest uppercase'>Input</span>
                    </div>
                    <textarea
                        value={plaintext}
                        onChange={(event) => setPlaintext(event.target.value)}
                        placeholder='Type markdown here...'
                        className='
                            font-mono
                            w-full
                            h-55 md:h-90 lg:h-115
                            p-4 md:p-6
                            text-base md:text-lg
                            bg-white
                            text-black
                            border-2 border-black
                            rounded-none
                            focus:outline-none focus:ring-0
                            placeholder-gray-400
                            resize-none
                            overflow-y-scroll
                        '
                    ></textarea>
                </div>

                <div className='flex-1 flex flex-col min-w-0'>
                    <div className='bg-black text-white px-4 py-2 border-2 border-black border-b-0 flex justify-between items-center shrink-0 print:hidden'>
                        <span className='font-bold text-sm tracking-widest uppercase'>Output</span>
                        <button 
                            onClick={() => window.print()}
                            className='
                                text-xs md:text-sm font-bold uppercase tracking-wider
                                bg-white text-black
                                px-3 py-1
                                hover:bg-gray-300
                                border-none
                                rounded-none
                                cursor-pointer
                            '
                        >
                            Print PDF
                        </button>
                    </div>
                    {plaintext ? (
                        <div
                            id="markdown-output-display"
                            className="
                                w-full h-55 md:h-90 lg:h-115 p-4 md:p-6 text-base md:text-lg
                                bg-white border-2 border-black overflow-y-scroll
                                prose prose-neutral max-w-none
                                prose-headings:font-bold prose-headings:text-black
                                prose-p:text-black prose-a:text-black prose-a:underline prose-a:decoration-black
                                prose-strong:text-black prose-strong:font-bold
                                prose-code:text-black prose-code:bg-gray-200 prose-code:px-1
                                prose-pre:bg-gray-100 prose-pre:text-black prose-pre:border-2 prose-pre:border-black prose-pre:rounded-none
                                prose-blockquote:border-l-4 prose-blockquote:border-black prose-blockquote:bg-gray-100 prose-blockquote:text-black prose-blockquote:not-italic prose-blockquote:py-1
                                [&_table]:w-full [&_table]:border-2 [&_table]:border-black [&_table]:border-collapse [&_table]:table-fixed
                                [&_th]:border-2 [&_th]:border-black [&_th]:p-2 [&_th]:bg-gray-200 [&_th]:text-left [&_th]:font-bold [&_th]:wrap-break-word
                                [&_td]:border-2 [&_td]:border-black [&_td]:p-2 [&_td]:wrap-break-word
                                [&_hr]:border-black [&_hr]:border-t-2
                                print:min-h-0 print:border-none print:p-0 print:h-auto print:overflow-visible
                            "
                            dangerouslySetInnerHTML={{ __html: getCleanedHTML(plaintext) }}
                        ></div>
                    ) : (
                        <div className="
                            w-full h-55 md:h-90 lg:h-115 p-4 md:p-6 text-base md:text-lg
                            bg-gray-50 border-2 border-black flex items-center justify-center text-gray-500 italic
                            print:hidden
                            overflow-y-scroll
                        ">
                            Preview will appear here
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

export default MarkdownLiveEditor;