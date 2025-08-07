import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setUserData(null);

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (error) {
            setError("Looks like we cant find the user");
        } finally {
            setLoading(false);
        }
    };

    return(
        <div className="">
            <form onSubmit={handleSubmit} action="">
                <input type="text" placeholder="Enter github username" value={username} onChange={(e) => setUsername(e.target.value)} id="" />
                <button type="submit">Search</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {userData && (
                <div>
                    <img src={userData.avatar_url} alt="Avatar" width={100} />
                    <h2>{userData.name || userData.login}</h2>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        View GitHub Profile
                    </a>
                </div>
            )}
        </div>
    )
}

export default Search;
