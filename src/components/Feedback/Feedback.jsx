export default function Feedback(feedback) {
    const { good, bad, neutral } = feedback.feedback;
    return <div><ul>
        <li>Good: {good }</li>
        <li>Neutral: {neutral }</li>
        <li>Bad: {bad }</li>
    </ul></div>
}