export default function Feedback({ values, totalFeedback }) {
    const { good, bad, neutral } = values;    
    return <div><ul>
        <li>Good: {good ? good : ""}</li>
        <li>Neutral: {neutral ? neutral : ""}</li>
        <li>Bad: {bad ? bad : ""}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {Math.round((good / totalFeedback) * 100) }%</li>
    </ul></div>;
}
