import React from 'react';
import ProfileBg from '../../assets/agent/th.jpeg'

const Profile = () => {
  const user = {
    name: ' muhammed ajmal',
    occupation: 'Software Developer',
    city: 'New York',
    age: 24,
    bio: 'Passionate software developer with 5 years of experience in web development. Loves to create dynamic and responsive web applications.'
  };
  return (
    <div className="flex   flex-col items-center p-6 bg-gray-100 min-h-screen">
    <div className=" mt-24 bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <div className="flex justify-center mb-4">
        <img src={ProfileBg } alt="Profile" className="rounded-full w-32 h-32 object-cover" />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
        <p className="text-gray-600">{user.occupation}</p>
        <p className="text-gray-600">{user.city}, {user.age} years old</p>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-700">{user.bio}</p>
      </div>
    </div>
  </div>
  );
}

export default Profile;
