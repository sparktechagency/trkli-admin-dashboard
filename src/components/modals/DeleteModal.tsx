import { Modal } from 'antd';
import { Dispatch, SetStateAction } from 'react';

// Define the props interface
interface DeleteModalProps {
  showDelete: boolean;
  setShowDelete: Dispatch<SetStateAction<boolean>>;
  handleDelete: (id: string) => void;
  deleteId: string;
}

const DeleteModal = ({ showDelete, setShowDelete, handleDelete, deleteId }: DeleteModalProps) => {
  return (
    <Modal centered open={showDelete} onCancel={() => setShowDelete(!showDelete)} width={400} footer={false}>
      <div className="p-6 text-center">
        <p className="text-[#D93D04] text-center font-semibold">Are you sure!</p>
        <p className="pt-4 pb-12 text-center">Do you want to delete this product?</p>
        <button
          onClick={() => handleDelete(deleteId)}
          className="bg-[#2E7A8A] py-2 px-5 text-white rounded-md"
        >
          Confirm
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;