import WhiteDiv from "@/app/ui/components/WhiteDiv";

export default function Page() {
    return (
        <div className="md:ml-0 ml-3 md:mr-0 mr-1">
            <div className="text-xl bg-white rounded-lg md:mt-4 mt-0 mr-2 p-4">Stats</div>
            <WhiteDiv value="Games played">
                <div className="text-xs mt-2">555</div>
            </WhiteDiv>
            <div className="grid grid-cols-2">
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
                        <div>Overall: 1:05</div>
                        <div>Game mode numbers: 1:05</div>
                        <div>Game mode letters: 1:40</div>
                        <div>Game mode symbols: 1:53</div>
                        <div>Game mode arrows: 2:07</div>
                    </div>
                </WhiteDiv>
                <WhiteDiv value="Average Time">
                    <div className="text-xs mt-2">
                        <div>Overall: 1:50</div>
                        <div>Game mode numbers: 1:35</div>
                        <div>Game mode letters: 1:41</div>
                        <div>Game mode symbols: 1:59</div>
                        <div>Game mode arrows: 2:37</div>
                    </div>
                </WhiteDiv>
            </div>
        </div>
    )
}