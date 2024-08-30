import Modal from "./Modal"; // Import Modal component

const UserDetailModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-4 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-3 text-gray-800">{user.name} Details</h2>
        <div className="space-y-2">
          <p>
            <strong className="font-semibold">Name:</strong> {user.name}
          </p>
          <p>
            <strong className="font-semibold">Username:</strong> {user.username}
          </p>
          <p>
            <strong className="font-semibold">Email:</strong> {user.email}
          </p>
          <p>
            <strong className="font-semibold">Address:</strong>
          </p>
          <p>
            {user.address.street}, {user.address.suite}
          </p>
          <p>
            {user.address.city}, {user.address.zipcode}
          </p>
          <p>
            <strong className="font-semibold">Phone:</strong> {user.phone}
          </p>
          <p>
            <strong className="font-semibold">Website:</strong> {user.website}
          </p>
          <p>
            <strong className="font-semibold">Company:</strong> {user.company.name}
          </p>
          <p>
            <strong className="font-semibold">Catchphrase:</strong> {user.company.catchPhrase}
          </p>
          <p>
            <strong className="font-semibold">BS:</strong> {user.company.bs}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default UserDetailModal;
