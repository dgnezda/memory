import Author from "@/app/ui/components/Author";
import Title from "@/app/ui/components/Title";
import WhiteDiv from "@/app/ui/components/WhiteDiv";

export default function Page() {
    return (
        <div className="md:ml-0 ml-3 md:mr-0 mr-1">
            <Title>Stats</Title>
            <WhiteDiv value="Games played">
                <div className="text-xs mt-2">555</div>
            </WhiteDiv>
            <div className="grid grid-cols-2">
                <WhiteDiv value="Best Scores">
                    <div className="grid grid-cols-4 justify-between text-xs mt-2">
                        <div className="col-span-3">Overall:</div><div className="text-end">10</div>
                        <div className="col-span-3">Mode - numbers:</div><div className="text-end">10</div>
                        <div className="col-span-3">Mode - letters:</div><div className="text-end">11</div>
                        <div className="col-span-3">Mode - symbols:</div><div className="text-end">12</div>
                        <div className="col-span-3">Mode - arrows:</div><div className="text-end">15</div>
                    </div>
                </WhiteDiv>
                <WhiteDiv value="Average Scores">
                    <div className="grid grid-cols-4 justify-between text-xs mt-2">
                        <div className="col-span-3">Overall:</div><div className="text-end">15</div>
                        <div className="col-span-3">Mode - numbers:</div><div className="text-end">13</div>
                        <div className="col-span-3">Mode - letters:</div><div className="text-end">14</div>
                        <div className="col-span-3">Mode - symbols:</div><div className="text-end">15</div>
                        <div className="col-span-3">Mode - arrows:</div><div className="text-end">17</div>
                    </div>
                </WhiteDiv>
                <WhiteDiv value="Best Times">
                    <div className="grid grid-cols-4 justify-between text-xs mt-2">
                        <div className="col-span-3">Overall:</div><div className="text-end">18.1s</div>
                        <div className="col-span-3">Mode - numbers:</div><div className="text-end">18.1s</div>
                        <div className="col-span-3">Mode - letters:</div><div className="text-end">20.3s</div>
                        <div className="col-span-3">Mode - symbols:</div><div className="text-end">22.9s</div>
                        <div className="col-span-3">Mode - arrows:</div><div className="text-end">25.4s</div>
                    </div>
                </WhiteDiv>
                <WhiteDiv value="Average Times">
                    <div className="grid grid-cols-4 justify-between text-xs mt-2">
                        <div className="col-span-3">Overall:</div><div className="text-end">1:50</div>
                        <div className="col-span-3">Mode - numbers:</div><div className="text-end">1:35</div>
                        <div className="col-span-3">Mode - letters:</div><div className="text-end">1:41</div>
                        <div className="col-span-3">Mode - symbols:</div><div className="text-end">1:59</div>
                        <div className="col-span-3">Mode - arrows:</div><div className="text-end">2:37</div>
                    </div>
                </WhiteDiv>
            </div>

            <Author />
        </div>
    )
}