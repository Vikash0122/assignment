import React from "react";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "Appointment Reminder",
      description: "Your appointment is scheduled for tomorrow at 10:00 AM.",
      timestamp: "2025-01-20",
    },
    {
      id: 2,
      title: "Medicine Delivered",
      description: "Your order for Paracetamol has been delivered.",
      timestamp: "2025-01-19",
    },
    {
      id: 3,
      title: "Service Confirmation",
      description: "Your request for home physiotherapy has been confirmed.",
      timestamp: "2025-01-18",
    },
    {
      id: 4,
      title: "Payment Successful",
      description: "Your payment of Rs. 650 for consultation has been successfully processed.",
      timestamp: "2025-01-17",
    },
    {
      id: 5,
      title: "New Test Results Available",
      description: "Your blood test results are now available in the portal.",
      timestamp: "2025-01-16",
    },
    {
      id: 6,
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
      timestamp: "2025-01-15",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
        <div className="relative px-4 py-6 bg-white shadow-lg sm:rounded-lg sm:p-10">
          <h1 className="text-2xl font-bold text-gray-700 mb-6">Notifications</h1>
          <div className="max-h-72 overflow-y-scroll space-y-4">
            <ul>
              {notifications.map((notification) => (
                <li
                key={notification.id}
                className="p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-200 hover:shadow-md transition duration-200"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {notification.title}
                </h2>
                <p className="text-gray-600">{notification.description}</p>
                <span className="text-sm text-gray-500">
                  {notification.timestamp}
                </span>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
