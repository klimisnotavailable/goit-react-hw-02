import Counter from "../Counter/Counter"

export default function Options({updateGood,updateBad,updateNeutral}) {
    
    return <div>
            <ul>
                <li onClick={updateGood}><Counter >Good</Counter></li>
                <li onClick={updateNeutral}><Counter>Neutral</Counter></li>
                <li onClick={updateBad}><Counter>Bad</Counter></li>
            </ul>
            </div>

}