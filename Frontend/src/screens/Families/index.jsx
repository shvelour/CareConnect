// import React, { useState, useEffect } from 'react';
// import api from '../../utils/Axios';


// const Families = () => {
//     const [families, setFamilies] = useState([]);
//     const [newFamilyName, setNewFamilyName] = useState('');
//     const [editFamilyName, setEditFamilyName] = useState('');
//     const [editFamilyId, setEditFamilyId] = useState(null);
//     const [editFamilyRegister, setEditFamilyRegister] = useState(0);
//     const [editFamilyDonation, setEditFamilyDonation] = useState(0);
//     const [editFamilyFollowUp, setEditFamilyFollowUp] = useState(false);
//     const [allFamilies, setAllFamilies] = useState([]);
  
//     useEffect(() => {
//       fetchData();
//     }, []);
  
//     const fetchData = async () => {
//       try {
//         const response = await api.get('/families');
//         setAllFamilies(response.data);
//       } catch (error) {
//         console.error('Error fetching all families:', error);
//       }
//     };
  
//     const handleShowAllFamilies = () => {
//       setFamilies(allFamilies);
//     };
  
//     const handleAddFamily = async () => {
//       try {
//         await api.post('/families', {
//           name: newFamilyName,
//           register: 0, // Valor padrão para register
//           donation: 0, // Valor padrão para donation
//           followUp: false, // Valor padrão para followUp
//         });
//         setNewFamilyName('');
//         fetchData();
//       } catch (error) {
//         console.error('Error adding family:', error);
//       }
//     };
  
//     const handleEditFamily = async () => {
//         try {
//           await api.put(`/families/${editFamilyId}`, {
//             name: editFamilyName,
//             register: editFamilyRegister,
//             donation: editFamilyDonation,
//             followUp: editFamilyFollowUp,
//           });
//           setEditFamilyId(null);
//           setEditFamilyName('');
//           setEditFamilyRegister(0);
//           setEditFamilyDonation(0);
//           setEditFamilyFollowUp(false);
//           fetchData();
//         } catch (error) {
//           console.error('Error editing family:', error);
//         }
//       };
  
//     const handleDeleteFamily = async (id) => {
//       try {
//         await api.delete(`/families/${id}`);
//         fetchData();
//       } catch (error) {
//         console.error('Error deleting family:', error);
//       }
//     };
  
//     return (
//       <div>
//         <h1>Families</h1>
//         <button onClick={handleShowAllFamilies}>Show All Families</button>
//         <ul>
//           {families.map(family => (
//             <li key={family._id}>
//               {editFamilyId === family._id ? (
//                 <>
//                   <input
//                     type="text"
//                     value={editFamilyName}
//                     onChange={(e) => setEditFamilyName(e.target.value)}
//                   />
//                   <input
//                     type="number"
//                     value={editFamilyRegister}
//                     onChange={(e) => setEditFamilyRegister(Number(e.target.value))}
//                   />
//                   <input
//                     type="number"
//                     value={editFamilyDonation}
//                     onChange={(e) => setEditFamilyDonation(Number(e.target.value))}
//                   />
//                   <label>
//                     <input
//                       type="checkbox"
//                       checked={editFamilyFollowUp}
//                       onChange={(e) => setEditFamilyFollowUp(e.target.checked)}
//                     />
//                     Follow Up
//                   </label>
//                   <button onClick={handleEditFamily}>Save</button>
//                 </>
//               ) : (
//                 <>
//                   <div>
//                     <strong>Name:</strong> {family.name}
//                   </div>
//                   <div>
//                     <strong>Register:</strong> {family.register}
//                   </div>
//                   <div>
//                     <strong>Donation:</strong> {family.donation}
//                   </div>
//                   <div>
//                     <strong>Follow Up:</strong> {family.followUp ? 'Yes' : 'No'}
//                   </div>
//                   <button onClick={() => { setEditFamilyId(family._id); setEditFamilyName(family.name); setEditFamilyRegister(family.register); setEditFamilyDonation(family.donation); setEditFamilyFollowUp(family.followUp); }}>Edit</button>
//                   <button onClick={() => handleDeleteFamily(family._id)}>Delete</button>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//         <input
//           type="text"
//           value={newFamilyName}
//           onChange={(e) => setNewFamilyName(e.target.value)}
//         />
//         <button onClick={handleAddFamily}>Add Family</button>
//       </div>
//     );
//   };

// export default Families;
