
export default function TinyGrid({
    rows,
    columns,
}: {
    rows: number,
    columns: number,
}) {
    const divsArray: JSX.Element[] = []
    for (let i = 0; i < rows*columns; i++) {
        divsArray.push(<div key={Date.now()} className="bg-slate-500 justify-start items-start h-2 w-2 m-[1px]"></div>)
    }
    const customGridStyles = {
        gridTemplateColumns: `repeat(${columns}, 10px)`,
        gap: '1px',
        justifyContent: 'start'
    };

    return (
        <div className="grid" style={customGridStyles}>
            {divsArray}
        </div>
    )
}