function UserProfile() {
    return (
        <div className="user-profile bg-gray-100 sm:p-4 md:p-8 max-w-xs sm:max-w-md md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
            <img className="rounded-full w-36 h-36 sm:w-24 sm:h-24 mx-auto" src="https://via.placeholder.com/150" alt="User" />
            <h1 className="text-lg sm:text-xl md:text-2xl text-blue-800 my-4">John Doe</h1>
            <p className="text-sm text-gray-600 sm:text-base md:text-xl">Developer at Example Co. Loves to write code and explore new technologies.</p>
        </div>
    );
}

export default UserProfile;
