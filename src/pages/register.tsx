// // RegistrationPage.tsx
// import React, { useState, ChangeEvent, FormEvent } from 'react';

// type ParticipationType = 'audience' | 'ctf' | 'gaming' | 'pitching';

// interface CTFCategories {
//   web: boolean;
//   crypto: boolean;
//   forensics: boolean;
//   osint: boolean;
//   rev: boolean;
//   binary: boolean;
//   networking: boolean;
//   general: boolean;
//   other: string;
// }

// interface FormData {
//   // Common
//   email: string;
//   participationType: ParticipationType;

//   // Audience
//   audienceFullName: string;
//   audienceEmail: string;
//   audiencePhone: string;
//   audienceUniversity: string;
//   audienceDays: string;
//   audienceCNIC: File | null;

//   // CTF
//   ctfTeamName: string;
//   ctfMemberCount: '2' | '3' | '4';
//   ctfUniversity: string;
//   ctfLeadName: string;
//   ctfLeadEmail: string;
//   ctfLeadPhone: string;
//   ctfLeadCNIC: File | null;
//   ctfMember2Name: string;
//   ctfMember2CNIC: File | null;
//   ctfMember3Name: string;
//   ctfMember3CNIC: File | null;
//   ctfMember4Name: string;
//   ctfMember4CNIC: File | null;
//   ctfSkillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
//   ctfCategories: CTFCategories;
//   ctfSpecialReqs: string;
//   ctfRulesAgreed: boolean;

//   // Gaming
//   gamingFullName: string;
//   gamingEmail: string;
//   gamingPhone: string;
//   gamingCity: string;
//   gamingUniversity: string;
//   gamingGame: 'PUBG' | 'TEKKEN 8' | 'FIFA 25' | '';

//   // Pitching
//   pitchFullName: string;
//   pitchEmail: string;
//   pitchPhone: string;
//   pitchCity: string;
//   pitchUniversity: string;
//   pitchDegree: string;
//   pitchApplyAs: 'Individual' | 'Team' | '';
// }

// const initialCTFCategories: CTFCategories = {
//   web: false,
//   crypto: false,
//   forensics: false,
//   osint: false,
//   rev: false,
//   binary: false,
//   networking: false,
//   general: false,
//   other: '',
// };

// const RegistrationPage: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     email: '',
//     participationType: 'audience',
//     audienceFullName: '',
//     audienceEmail: '',
//     audiencePhone: '',
//     audienceUniversity: '',
//     audienceDays: '',
//     audienceCNIC: null,
//     ctfTeamName: '',
//     ctfMemberCount: '2',
//     ctfUniversity: '',
//     ctfLeadName: '',
//     ctfLeadEmail: '',
//     ctfLeadPhone: '',
//     ctfLeadCNIC: null,
//     ctfMember2Name: '',
//     ctfMember2CNIC: null,
//     ctfMember3Name: '',
//     ctfMember3CNIC: null,
//     ctfMember4Name: '',
//     ctfMember4CNIC: null,
//     ctfSkillLevel: 'Beginner',
//     ctfCategories: initialCTFCategories,
//     ctfSpecialReqs: '',
//     ctfRulesAgreed: false,
//     gamingFullName: '',
//     gamingEmail: '',
//     gamingPhone: '',
//     gamingCity: '',
//     gamingUniversity: '',
//     gamingGame: '',
//     pitchFullName: '',
//     pitchEmail: '',
//     pitchPhone: '',
//     pitchCity: '',
//     pitchUniversity: '',
//     pitchDegree: '',
//     pitchApplyAs: '',
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value, type } = e.target;
//     if (type === 'checkbox') {
//       const checked = (e.target as HTMLInputElement).checked;
//       if (name.startsWith('ctfCategory_')) {
//         const category = name.replace('ctfCategory_', '') as keyof CTFCategories;
//         setFormData(prev => ({
//           ...prev,
//           ctfCategories: {
//             ...prev.ctfCategories,
//             [category]: checked,
//           },
//         }));
//       } else if (name === 'ctfRulesAgreed') {
//         setFormData(prev => ({ ...prev, ctfRulesAgreed: checked }));
//       }
//     } else if (type === 'radio') {
//       setFormData(prev => ({ ...prev, [name]: value }));
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }));
//     }
//     // Clear error for this field
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>, fieldName: keyof FormData) => {
//     const file = e.target.files?.[0] || null;
//     setFormData(prev => ({ ...prev, [fieldName]: file }));
//     if (errors[fieldName]) {
//       setErrors(prev => ({ ...prev, [fieldName]: '' }));
//     }
//   };

//   const handleCTFCategoryOtherChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       ctfCategories: {
//         ...prev.ctfCategories,
//         other: e.target.value,
//       },
//     }));
//   };

//   const validateForm = (): boolean => {
//     const newErrors: Record<string, string> = {};
//     const required = (value: any, fieldName: string, message?: string) => {
//       if (!value || (typeof value === 'string' && !value.trim())) {
//         newErrors[fieldName] = message || 'This field is required';
//       }
//     };

//     required(formData.email, 'email', 'Email is required');
//     if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Invalid email address';
//     }

//     const { participationType } = formData;

//     if (participationType === 'audience') {
//       required(formData.audienceFullName, 'audienceFullName');
//       required(formData.audienceEmail, 'audienceEmail');
//       if (formData.audienceEmail && !/\S+@\S+\.\S+/.test(formData.audienceEmail)) {
//         newErrors.audienceEmail = 'Invalid email';
//       }
//       required(formData.audiencePhone, 'audiencePhone');
//       required(formData.audienceUniversity, 'audienceUniversity');
//       required(formData.audienceDays, 'audienceDays');
//       required(formData.audienceCNIC, 'audienceCNIC');
//     } else if (participationType === 'ctf') {
//       required(formData.ctfTeamName, 'ctfTeamName');
//       required(formData.ctfUniversity, 'ctfUniversity');
//       required(formData.ctfLeadName, 'ctfLeadName');
//       required(formData.ctfLeadEmail, 'ctfLeadEmail');
//       if (formData.ctfLeadEmail && !/\S+@\S+\.\S+/.test(formData.ctfLeadEmail)) {
//         newErrors.ctfLeadEmail = 'Invalid email';
//       }
//       required(formData.ctfLeadPhone, 'ctfLeadPhone');
//       required(formData.ctfLeadCNIC, 'ctfLeadCNIC');
//       required(formData.ctfMember2Name, 'ctfMember2Name');
//       required(formData.ctfMember2CNIC, 'ctfMember2CNIC');
//       if (formData.ctfMemberCount === '3' || formData.ctfMemberCount === '4') {
//         required(formData.ctfMember3Name, 'ctfMember3Name');
//         required(formData.ctfMember3CNIC, 'ctfMember3CNIC');
//       }
//       if (formData.ctfMemberCount === '4') {
//         required(formData.ctfMember4Name, 'ctfMember4Name');
//         required(formData.ctfMember4CNIC, 'ctfMember4CNIC');
//       }
//       if (!formData.ctfRulesAgreed) {
//         newErrors.ctfRulesAgreed = 'You must agree to the rules';
//       }
//     } else if (participationType === 'gaming') {
//       required(formData.gamingFullName, 'gamingFullName');
//       required(formData.gamingEmail, 'gamingEmail');
//       if (formData.gamingEmail && !/\S+@\S+\.\S+/.test(formData.gamingEmail)) {
//         newErrors.gamingEmail = 'Invalid email';
//       }
//       required(formData.gamingPhone, 'gamingPhone');
//       required(formData.gamingCity, 'gamingCity');
//       required(formData.gamingUniversity, 'gamingUniversity');
//       required(formData.gamingGame, 'gamingGame');
//     } else if (participationType === 'pitching') {
//       required(formData.pitchFullName, 'pitchFullName');
//       required(formData.pitchEmail, 'pitchEmail');
//       if (formData.pitchEmail && !/\S+@\S+\.\S+/.test(formData.pitchEmail)) {
//         newErrors.pitchEmail = 'Invalid email';
//       }
//       required(formData.pitchPhone, 'pitchPhone');
//       required(formData.pitchCity, 'pitchCity');
//       required(formData.pitchUniversity, 'pitchUniversity');
//       required(formData.pitchDegree, 'pitchDegree');
//       required(formData.pitchApplyAs, 'pitchApplyAs');
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//       return;
//     }
//     setIsSubmitting(true);
//     // Simulate API call
//     console.log('Form submitted:', formData);
//     await new Promise(resolve => setTimeout(resolve, 1500));
//     setIsSubmitting(false);
//     alert('Registration submitted successfully! (Demo)');
//   };

//   const renderParticipationSelect = () => (
//     <div className="mb-8">
//       <label className="block text-sm font-medium mb-3 text-gray-800">
//         How would you like to participate at NCAT 2026? <span className="text-red-500">*</span>
//       </label>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
//         {[
//           { value: 'audience', label: 'Attend as Audience / General Attendee' },
//           { value: 'ctf', label: 'Participate in CTF (Capture The Flag)' },
//           { value: 'gaming', label: 'Participate in Gaming Competitions' },
//           { value: 'pitching', label: 'Participate in Idea Pitching' },
//         ].map(option => (
//           <label
//             key={option.value}
//             className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
//               formData.participationType === option.value
//                 ? 'border-[#9f45b0] bg-[#ffe4f2] shadow-md'
//                 : 'border-gray-200 hover:border-[#e54ed0]'
//             }`}
//           >
//             <input
//               type="radio"
//               name="participationType"
//               value={option.value}
//               checked={formData.participationType === option.value}
//               onChange={handleChange}
//               className="w-4 h-4 text-[#44008b] focus:ring-[#9f45b0]"
//             />
//             <span className="ml-3 text-sm">{option.label}</span>
//           </label>
//         ))}
//       </div>
//     </div>
//   );

//   const renderAudienceForm = () => (
//     <div className="space-y-6 animate-fadeIn">
//       <div className="bg-[#ffe4f2] p-4 rounded-lg border-l-4 border-[#e54ed0] text-sm">
//         ✅ Includes Swags and Snacks, a Digital Certificate of Attendance, access to all keynote sessions, panel talks, and cultural segments, eligibility for Lucky draws, Giveaways, Sponsor activations and networking opportunities.
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <InputField label="Full Name" name="audienceFullName" value={formData.audienceFullName} onChange={handleChange} required error={errors.audienceFullName} />
//         <InputField label="Email Address" name="audienceEmail" type="email" value={formData.audienceEmail} onChange={handleChange} required error={errors.audienceEmail} />
//         <InputField label="Phone Number (WhatsApp preferred)" name="audiencePhone" value={formData.audiencePhone} onChange={handleChange} required error={errors.audiencePhone} />
//         <InputField label="University / Institute / Organization" name="audienceUniversity" value={formData.audienceUniversity} onChange={handleChange} required error={errors.audienceUniversity} />
//       </div>
//       <div>
//         <label className="block text-sm font-medium mb-2 text-gray-700">
//           Which day(s) will you attend? <span className="text-red-500">*</span>
//         </label>
//         <div className="flex gap-6">
//           {['Day 1', 'Day 2', 'Both Days'].map(day => (
//             <label key={day} className="flex items-center">
//               <input type="radio" name="audienceDays" value={day} checked={formData.audienceDays === day} onChange={handleChange} className="mr-2 text-[#44008b]" />
//               {day}
//             </label>
//           ))}
//         </div>
//         {errors.audienceDays && <p className="mt-1 text-sm text-red-600">{errors.audienceDays}</p>}
//       </div>
//       <FileUploadField
//         label="Attach CNIC here"
//         name="audienceCNIC"
//         onChange={(e) => handleFileChange(e, 'audienceCNIC')}
//         required
//         error={errors.audienceCNIC}
//         fileName={formData.audienceCNIC?.name}
//       />
//     </div>
//   );

//   const renderCTFForm = () => {
//     const memberCount = parseInt(formData.ctfMemberCount);
//     return (
//       <div className="space-y-6 animate-fadeIn">
//         <div className="bg-[#ffe4f2] p-4 rounded-lg border-l-4 border-[#e54ed0] text-sm">
//           ✅ Includes Swags and Snacks, a Certificate of Participation, access to all keynote sessions, panel talks, and cultural segments and cyber experience zones, eligibility for Lucky draws, Giveaways, Sponsor activations, hiring visibility and networking opportunities with participants, organizers and communities.
//         </div>
//         <div className="space-y-4">
//           <InputField
//             label="What is your team's name?"
//             name="ctfTeamName"
//             value={formData.ctfTeamName}
//             onChange={handleChange}
//             required
//             error={errors.ctfTeamName}
//             helperText="Team name must be unique. No offensive, political, or inappropriate names. Used on leaderboard and certificates."
//           />
//           <div>
//             <label className="block text-sm font-medium mb-2">Number of Team Members <span className="text-red-500">*</span></label>
//             <select name="ctfMemberCount" value={formData.ctfMemberCount} onChange={handleChange} className="w-full md:w-48 p-3 border rounded-lg focus:ring-2 focus:ring-[#9f45b0]">
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//             </select>
//           </div>
//           <InputField label="University / Institute / Organization" name="ctfUniversity" value={formData.ctfUniversity} onChange={handleChange} required error={errors.ctfUniversity} />
//         </div>

//         {/* Team Lead */}
//         <div className="border-t pt-6">
//           <h3 className="font-semibold text-lg mb-4 text-[#00076f]">Team Lead Information</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <InputField label="Full Name" name="ctfLeadName" value={formData.ctfLeadName} onChange={handleChange} required error={errors.ctfLeadName} />
//             <InputField label="Email Address" name="ctfLeadEmail" type="email" value={formData.ctfLeadEmail} onChange={handleChange} required error={errors.ctfLeadEmail} />
//             <InputField label="Phone Number (WhatsApp Required)" name="ctfLeadPhone" value={formData.ctfLeadPhone} onChange={handleChange} required error={errors.ctfLeadPhone} />
//             <FileUploadField label="Attach picture of CNIC front" name="ctfLeadCNIC" onChange={(e) => handleFileChange(e, 'ctfLeadCNIC')} required error={errors.ctfLeadCNIC} fileName={formData.ctfLeadCNIC?.name} />
//           </div>
//         </div>

//         {/* Member 2 */}
//         <div className="border-t pt-6">
//           <h3 className="font-semibold text-lg mb-4 text-[#00076f]">Team Member 2</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <InputField label="Full Name" name="ctfMember2Name" value={formData.ctfMember2Name} onChange={handleChange} required error={errors.ctfMember2Name} />
//             <FileUploadField label="Attach picture of CNIC front" name="ctfMember2CNIC" onChange={(e) => handleFileChange(e, 'ctfMember2CNIC')} required error={errors.ctfMember2CNIC} fileName={formData.ctfMember2CNIC?.name} />
//           </div>
//         </div>

//         {/* Member 3 */}
//         {memberCount >= 3 && (
//           <div className="border-t pt-6">
//             <h3 className="font-semibold text-lg mb-4 text-[#00076f]">Team Member 3</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <InputField label="Full Name" name="ctfMember3Name" value={formData.ctfMember3Name} onChange={handleChange} required={memberCount >= 3} error={errors.ctfMember3Name} />
//               <FileUploadField label="Attach picture of CNIC front" name="ctfMember3CNIC" onChange={(e) => handleFileChange(e, 'ctfMember3CNIC')} required={memberCount >= 3} error={errors.ctfMember3CNIC} fileName={formData.ctfMember3CNIC?.name} />
//             </div>
//           </div>
//         )}

//         {/* Member 4 */}
//         {memberCount === 4 && (
//           <div className="border-t pt-6">
//             <h3 className="font-semibold text-lg mb-4 text-[#00076f]">Team Member 4</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <InputField label="Full Name" name="ctfMember4Name" value={formData.ctfMember4Name} onChange={handleChange} required error={errors.ctfMember4Name} />
//               <FileUploadField label="Attach picture of CNIC front" name="ctfMember4CNIC" onChange={(e) => handleFileChange(e, 'ctfMember4CNIC')} required error={errors.ctfMember4CNIC} fileName={formData.ctfMember4CNIC?.name} />
//             </div>
//           </div>
//         )}

//         <div className="border-t pt-6">
//           <label className="block text-sm font-medium mb-2">Team Skill Level (Self‑Assessed) <span className="text-red-500">*</span></label>
//           <div className="flex gap-6">
//             {['Beginner', 'Intermediate', 'Advanced'].map(level => (
//               <label key={level} className="flex items-center">
//                 <input type="radio" name="ctfSkillLevel" value={level} checked={formData.ctfSkillLevel === level} onChange={handleChange} className="mr-2" /> {level}
//               </label>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">CTF Categories of Interest <span className="text-red-500">*</span></label>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//             {Object.entries({
//               web: 'Web Exploitation',
//               crypto: 'Cryptography',
//               forensics: 'Digital Forensics',
//               osint: 'OSINT',
//               rev: 'Reverse Engineering',
//               binary: 'Binary Exploitation',
//               networking: 'Networking',
//               general: 'General Cybersecurity',
//             }).map(([key, label]) => (
//               <label key={key} className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name={`ctfCategory_${key}`}
//                   checked={formData.ctfCategories[key as keyof CTFCategories] as boolean}
//                   onChange={handleChange}
//                   className="mr-2 text-[#44008b]"
//                 />
//                 {label}
//               </label>
//             ))}
//           </div>
//           <div className="mt-2">
//             <input
//               type="text"
//               placeholder="Other (please specify)"
//               value={formData.ctfCategories.other}
//               onChange={handleCTFCategoryOtherChange}
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#9f45b0]"
//             />
//           </div>
//         </div>

//         <InputField label="Any special requirements or accessibility needs?" name="ctfSpecialReqs" value={formData.ctfSpecialReqs} onChange={handleChange} />

//         <div className="border-t pt-6">
//           <label className="flex items-start mb-2">
//             <input
//               type="checkbox"
//               name="ctfRulesAgreed"
//               checked={formData.ctfRulesAgreed}
//               onChange={handleChange}
//               className="mt-1 mr-3 text-[#44008b]"
//             />
//             <span className="text-sm">
//               <strong>CTF Rules Acknowledgement <span className="text-red-500">*</span></strong><br />
//               We agree not to attack NCAT infrastructure, networks, or other teams<br />
//               We will not share flags, solutions, or hints with others<br />
//               We understand that plagiarism or misconduct will lead to disqualification<br />
//               We accept that the organizers’ decision is final
//             </span>
//           </label>
//           {errors.ctfRulesAgreed && <p className="text-sm text-red-600">{errors.ctfRulesAgreed}</p>}
//         </div>
//       </div>
//     );
//   };

//   const renderGamingForm = () => (
//     <div className="space-y-6 animate-fadeIn">
//       <div className="bg-[#ffe4f2] p-4 rounded-lg border-l-4 border-[#e54ed0] text-sm">
//         ✅ Includes Swags and Snacks, a Certificate of Participation, access to all keynote sessions, panel talks, and cultural segments and cyber experience zones, eligibility for Lucky draws, Giveaways, Sponsor activations, exposure to industry professionals and networking opportunities with participants, organizers and communities.
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <InputField label="Full Name" name="gamingFullName" value={formData.gamingFullName} onChange={handleChange} required error={errors.gamingFullName} />
//         <InputField label="Email Address" name="gamingEmail" type="email" value={formData.gamingEmail} onChange={handleChange} required error={errors.gamingEmail} />
//         <InputField label="Phone Number (WhatsApp preferred)" name="gamingPhone" value={formData.gamingPhone} onChange={handleChange} required error={errors.gamingPhone} />
//         <InputField label="City" name="gamingCity" value={formData.gamingCity} onChange={handleChange} required error={errors.gamingCity} />
//         <InputField label="University / Institute / Organization" name="gamingUniversity" value={formData.gamingUniversity} onChange={handleChange} required error={errors.gamingUniversity} />
//       </div>
//       <div>
//         <label className="block text-sm font-medium mb-2">Which game are you registering for? <span className="text-red-500">*</span></label>
//         <select name="gamingGame" value={formData.gamingGame} onChange={handleChange} className="w-full md:w-64 p-3 border rounded-lg focus:ring-2 focus:ring-[#9f45b0]">
//           <option value="">Select a game</option>
//           <option value="PUBG">PUBG</option>
//           <option value="TEKKEN 8">TEKKEN 8</option>
//           <option value="FIFA 25">FIFA 25</option>
//         </select>
//         {errors.gamingGame && <p className="mt-1 text-sm text-red-600">{errors.gamingGame}</p>}
//       </div>
//     </div>
//   );

//   const renderPitchingForm = () => (
//     <div className="space-y-6 animate-fadeIn">
//       <div className="bg-[#ffe4f2] p-4 rounded-lg border-l-4 border-[#e54ed0] text-sm">
//         ✅ Includes Swags and Snacks, a Certificate of Participation, shortlisting and Finalist Recognition, Opportunity to pitch before an expert jury, visibility to industry professionals, mentors & sponsors, feedback & evaluation from experienced judges, access to all keynote sessions, panel talks, and cultural segments and cyber experience zones, eligibility for Lucky draws, Giveaways, Sponsor activations, and networking opportunities with participants, organizers and communities.
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <InputField label="Full Name (Team Lead / Individual)" name="pitchFullName" value={formData.pitchFullName} onChange={handleChange} required error={errors.pitchFullName} />
//         <InputField label="Email Address" name="pitchEmail" type="email" value={formData.pitchEmail} onChange={handleChange} required error={errors.pitchEmail} />
//         <InputField label="Phone Number (WhatsApp preferred)" name="pitchPhone" value={formData.pitchPhone} onChange={handleChange} required error={errors.pitchPhone} />
//         <InputField label="City" name="pitchCity" value={formData.pitchCity} onChange={handleChange} required error={errors.pitchCity} />
//         <InputField label="University / Institute / Organization" name="pitchUniversity" value={formData.pitchUniversity} onChange={handleChange} required error={errors.pitchUniversity} />
//         <InputField label="Degree / Program / Field of Study" name="pitchDegree" value={formData.pitchDegree} onChange={handleChange} required error={errors.pitchDegree} />
//       </div>
//       <div>
//         <label className="block text-sm font-medium mb-2">Are you applying as: <span className="text-red-500">*</span></label>
//         <div className="flex gap-6">
//           {['Individual', 'Team'].map(opt => (
//             <label key={opt} className="flex items-center">
//               <input type="radio" name="pitchApplyAs" value={opt} checked={formData.pitchApplyAs === opt} onChange={handleChange} className="mr-2" /> {opt}
//             </label>
//           ))}
//         </div>
//         {errors.pitchApplyAs && <p className="mt-1 text-sm text-red-600">{errors.pitchApplyAs}</p>}
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-black">
//       {/* Full-width white card */}
//       <div className="w-full bg-white shadow-2xl">
//         {/* Header - full width, dark */}
//         <div className="w-full bg-gradient-to-r from-[#00076f] to-[#44008b] px-6 sm:px-12 py-8 text-white">
//           <h1 className="text-3xl sm:text-4xl font-bold">NCAT 2026 — Official Registration & Participation Form</h1>
//           <p className="mt-2 text-[#ffe4f2] text-lg">National Conference of Applied Technology</p>
//           <p className="text-[#e54ed0] font-medium">Chapter: Cybersecurity & Interactive Systems</p>
//           <p className="mt-2 flex items-center text-sm opacity-90">📍 Hosted at NASTP, Rawalpindi</p>
//         </div>

//         {/* Form content with generous padding */}
//         <div className="px-6 sm:px-12 py-8">
//           <div className="prose prose-sm max-w-none mb-6 text-gray-600">
//             <p>Welcome to NCAT 2026, a national‑level event bringing together students, professionals, and industry leaders for cybersecurity awareness, competitions, gaming, innovation, and learning.</p>
//             <p>This form will guide you to the correct registration section based on how you wish to participate.</p>
//             <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
//               <p className="font-medium text-yellow-800">⚠️ Important Notes:</p>
//               <ul className="list-disc ml-5 text-sm text-yellow-700">
//                 <li>Each category has different requirements</li>
//                 <li>Incomplete or incorrect submissions may be rejected</li>
//                 <li>Student discounts require valid student ID verification</li>
//               </ul>
//             </div>
//             <p className="text-sm">Please read each question carefully and select only what applies to you.</p>
//           </div>

//           <div className="border-b pb-4 mb-6 flex items-center justify-between text-sm text-gray-500">
//             <span>232118@students.au.edu.pk</span>
//             <span className="text-[#9f45b0] cursor-pointer hover:underline">Switch account</span>
//           </div>

//           <div className="text-xs text-gray-400 mb-6">
//             <p>The name, email, and photo associated with your Google account will be recorded when you upload files and submit this form</p>
//             <p>Any files that are uploaded will be shared outside of the organization they belong to.</p>
//             <p className="mt-2"><span className="text-red-500">*</span> Indicates required question</p>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <InputField
//               label="Email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               error={errors.email}
//               placeholder="your.email@example.com"
//             />

//             {renderParticipationSelect()}

//             <div className="mt-8 pt-6 border-t">
//               {formData.participationType === 'audience' && renderAudienceForm()}
//               {formData.participationType === 'ctf' && renderCTFForm()}
//               {formData.participationType === 'gaming' && renderGamingForm()}
//               {formData.participationType === 'pitching' && renderPitchingForm()}
//             </div>

//             <div className="mt-10 flex justify-end">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="px-8 py-3 bg-gradient-to-r from-[#44008b] to-[#9f45b0] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? 'Submitting...' : 'Submit Registration'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
//       `}</style>
//     </div>
//   );
// };

// // Reusable input component
// const InputField: React.FC<{
//   label: string;
//   name: string;
//   value: string;
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
//   type?: string;
//   required?: boolean;
//   error?: string;
//   placeholder?: string;
//   helperText?: string;
// }> = ({ label, name, value, onChange, type = 'text', required, error, placeholder, helperText }) => (
//   <div>
//     <label className="block text-sm font-medium mb-2 text-gray-700">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <input
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#9f45b0] ${
//         error ? 'border-red-500' : 'border-gray-300'
//       }`}
//     />
//     {helperText && <p className="mt-1 text-xs text-gray-500">{helperText}</p>}
//     {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
//   </div>
// );

// // File upload component
// const FileUploadField: React.FC<{
//   label: string;
//   name: string;
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
//   required?: boolean;
//   error?: string;
//   fileName?: string;
// }> = ({ label, name, onChange, required, error, fileName }) => (
//   <div>
//     <label className="block text-sm font-medium mb-2 text-gray-700">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <div className="flex items-center">
//       <label className="cursor-pointer bg-[#ffe4f2] hover:bg-[#e54ed0] hover:text-white text-[#44008b] font-medium py-2 px-4 rounded-lg border border-[#9f45b0] transition-colors">
//         Choose File
//         <input type="file" name={name} onChange={onChange} accept=".pdf,image/*" className="hidden" />
//       </label>
//       <span className="ml-3 text-sm text-gray-600">{fileName || 'No file chosen'}</span>
//     </div>
//     <p className="mt-1 text-xs text-gray-500">Upload 1 supported file: PDF or image. Max 10 MB.</p>
//     {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
//   </div>
// );

// export default RegistrationPage;