import TinyGrid from "@/app/ui/tiny-grids";

export default function Page() {
    return (
        <div className="md:ml-0 ml-3 md:mr-0 mr-1">
            <div className="text-xl bg-white rounded-lg md:mt-4 mt-0 mr-2 p-4">Settings</div>
            <div className="bg-white rounded-lg mt-2 mr-2 p-4">
                <div className="text-l">Board size:</div>
                <div className="text-sm mt-1">
                    <label>
                        <TinyGrid rows={4} columns={4} />
                        <input type="radio" name="myRadio" value="44" />
                        4x4
                    </label>
                    <label>
                        <TinyGrid rows={5} columns={4} />
                        <input type="radio" name="myRadio" value="54" />
                        5x4
                        <br></br>
                    </label>
                    <label>
                        <TinyGrid rows={6} columns={6} />
                        <input type="radio" name="myRadio" value="66" />
                        6x6
                    </label>
                </div>
            </div>
        </div>
    )
}