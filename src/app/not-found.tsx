import {Metadata} from "next";

const css = `
  body {
    display: flex;
  }
  #__next {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

export const metadata: Metadata = {
    title: '404'
}

export default function Error() {
    return (
        // flex flex-auto items-center justify-center text-center px-4 flex-col md:flex-row
        // flex w-full min-h-screen pt-16 bg-body items-center justify-center text-center px-4 flex-col md:flex-row
        <div className="flex w-full h-[65vh] flex-auto items-center justify-center text-center px-4 flex-col md:flex-row">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight md:pr-6 md:mr-6 md:border-r md:border-secondary/60 text-slate-200">
                404
            </h1>
            <h2 className="mt-2 text-lg text-secondary/60 md:mt-0">
                This page could not be found.
            </h2>
        </div>
    )
}