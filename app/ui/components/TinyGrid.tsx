
export default function TinyGrid({
    rows,
    columns,
}: {
    rows: number,
    columns: number,
}) {
    const divsArray: JSX.Element[] = []
    for (let i = 0; i < rows*columns; i++) {
        divsArray.push(<div key={Date.now()} className="bg-teal-50 border-dotted border-[1px] border-slate-400 justify-start items-start h-2 w-2 m-[1px] rounded-sm"></div>)
    }
    const customGridStyles = {
        gridTemplateColumns: `repeat(${columns}, 10px)`,
        gap: '1px',
        justifyContent: 'start'
    };

    return (
        <div className="grid m-2" style={customGridStyles}>
            {divsArray}
        </div>
    )
}