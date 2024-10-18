export function TitleRight() {
  return (
    <div className="flex gap-x-3">
      <div className="mr-4  pl-4 pr-1 py-1 flex items-center bg-accents2 rounded-md cursor-pointer transition-all hover:textaceents1">
        <div className="mr-6 text-sm text-accents4">Search Something...</div>
        <button className="px-2 bg-background border border-accents2 text-accents8 rounded-md text-sm">
          ctrl+k
        </button>
      </div>
      <button className="py-1 px-[12px] bg-background border border-accents2 rounded-md text-accents7 text-sm font-semibold">
        About
      </button>
      <button className="py-1 px-[12px] border  border-accents6 rounded-md bg-foreground text-accents1 text-sm font-semibold">
        Learn
      </button>
    </div>
  )
}
export default TitleRight
