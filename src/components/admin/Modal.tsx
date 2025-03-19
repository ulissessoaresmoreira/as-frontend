import { ModalForms } from "./ModalForms";


type Props = {
  onClose: () => void;
  children: React.ReactNode;
  modalScreen: string | null;
}

export const Modal = ({onClose, children, modalScreen}: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/90 ">
      <div className="absolute top-2 mx-auto w-full max-w-3xl my-3 h-16">
        <div 
          onClick={onClose}
          className=" w-8 h-8 rounded-full bg-blue-800 text-white text-lg flex items-center justify-center cursor-pointer hover:bg-red-500">
            X
        </div>
        <div className="bg-blue-400 w-full max-w-3xl p-4 rounded-xl border-8 border-blue-200 border-opacity-50 mb-5 top-24">{children}</div>
     
        <div className="py-4 bg-blue-400 rounded-xl border-8 border-blue-200 border-opacity-50 ">
          <ModalForms modalForms={modalScreen} />

        </div>

      </div>
      
        
      
    </div>
  );
};



// <div className=" p-5 rounded-md shadow-lg w-96 h-96">
// <button onClick={onClose} className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">X</button>
// </div>










// return 
// (
//   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//     <div className="bg-white p-4 rounded-lg">
//       <button onClick={onClose}>Close</button>
//       {children}
//     </div>
//   </div>
// );