import WhiteDiv from "@/app/ui/components/WhiteDiv";

export default function Page() {
    return (
        <div className="md:ml-0 ml-3 md:mr-0 mr-1">
            <div className="text-xl bg-white rounded-lg md:mt-4 mt-0 mr-2 p-4">Stats</div>
            <WhiteDiv value="Games played">
                <div className="text-xs mt-2">555</div>
            </WhiteDiv>
            <WhiteDiv value="Best Scores">
                <div className="text-xs mt-2">
                    <div>Overall: 10</div>
                    <div>Game mode numbers: 10</div>
                    <div>Game mode letters: 11</div>
                    <div>Game mode symbols: 12</div>
                    <div>Game mode arrows: 15</div>
                </div>
            </WhiteDiv>
            <WhiteDiv value="Average Scores">
                <div className="text-xs mt-2">
                    <div>Overall: 15</div>
                    <div>Game mode numbers: 13</div>
                    <div>Game mode letters: 14</div>
                    <div>Game mode symbols: 15</div>
                    <div>Game mode arrows: 17</div>
                </div>
            </WhiteDiv>
            <WhiteDiv value="Best Time">
                <div className="text-xs mt-2">
                    1:23
                </div>
            </WhiteDiv>
            <WhiteDiv value="Average Time">
                <div className="text-xs mt-2">
                    2:56
                </div>
            </WhiteDiv>
        </div>
    )
}