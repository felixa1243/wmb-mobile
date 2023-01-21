import {useState} from "react";

const useFetchMutation = (mutation,onSuccess) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchMutation = async (data) => {
        try {
            setLoading(true)
            await mutation(data)
            onSuccess?.()
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    }
    return [error, loading, fetchMutation]
}
export default useFetchMutation