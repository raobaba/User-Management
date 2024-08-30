import Modal from "./Modal"; // Import Modal component

const UserDetailModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-4">{user.name} Details</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Address:</strong>
      </p>
      <p>
        {user.address.street}, {user.address.suite}
      </p>
      <p>
        {user.address.city}, {user.address.zipcode}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
      <p>
        <strong>Catchphrase:</strong> {user.company.catchPhrase}
      </p>
      <p>
        <strong>BS:</strong> {user.company.bs}
      </p>
    </Modal>
  );
};

export default UserDetailModal;
