import { lazy, Suspense, useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import Footer from "@/components/footer";

// Types
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  participationType: string;
  selectedCategory: string;
  paymentMethod: string;
  transactionId: string;
  amountPaid: string;
  paymentName: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  participationType?: string;
  selectedCategory?: string;
  paymentMethod?: string;
  transactionId?: string;
  amountPaid?: string;
  paymentName?: string;
}

const ParticleField = lazy(() => import("@/components/ParticleField"));

const RegisterPage: React.FC = () => {
  // Google Sheets Web App URL
  const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbyBWJV9m4qe05JVkot_drIoLYM5ZhyTM8wTb3GLqVM-OyO-Wu5dtoPEiwIwBMcF8vm9/exec";

  // State
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    participationType: '',
    selectedCategory: '',
    paymentMethod: '',
    transactionId: '',
    amountPaid: '',
    paymentName: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  // Category options based on participation type
  const getCategoryOptions = () => {
    const options: { value: string; label: string }[] = [];

    switch (formData.participationType) {
      case 'Audience':
        options.push(
          { value: 'Attendee Regular - PKR 2,000', label: 'Attendee Regular - PKR 2,000' },
          { value: 'Attendee Student - PKR 1,200', label: 'Attendee Student - PKR 1,200 (with valid student ID)' }
        );
        break;
      case 'CTF':
        options.push({ value: 'CTF - PKR 2,500', label: 'CTF - PKR 2,500' });
        break;
      case 'Gaming':
        options.push(
          { value: 'Gaming PUBG - PKR 2,500', label: 'Gaming PUBG - PKR 2,500' },
          { value: 'Gaming Tekken 8 - PKR 1,500', label: 'Gaming Tekken 8 - PKR 1,500' },
          { value: 'Gaming FIFA - PKR 1,500', label: 'Gaming FIFA - PKR 1,500' }
        );
        break;
      case 'Idea Pitching':
        options.push({ value: 'Idea Pitching - PKR 2,000', label: 'Idea Pitching - PKR 2,000' });
        break;
      default:
        return [];
    }
    return options;
  };

  // Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^0[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = 'Invalid phone number (e.g., 03001234567)';
    if (!formData.participationType) newErrors.participationType = 'Please select participation type';
    if (!formData.selectedCategory) newErrors.selectedCategory = 'Please select a category';
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Please select payment method';
    if (!formData.transactionId.trim()) newErrors.transactionId = 'Transaction ID is required';
    if (!formData.amountPaid) newErrors.amountPaid = 'Amount is required';
    else if (parseFloat(formData.amountPaid) <= 0) newErrors.amountPaid = 'Amount must be greater than 0';
    if (!formData.paymentName.trim()) newErrors.paymentName = 'Payment name is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle radio change
  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ 
      ...prev, 
      participationType: value,
      selectedCategory: ''
    }));
    if (errors.participationType) {
      setErrors(prev => ({ ...prev, participationType: undefined }));
    }
  };

  // Handle submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus({ type: 'error', message: 'Please fix the errors above' });
      setTimeout(() => setSubmitStatus({ type: null, message: '' }), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setSubmitStatus({ 
        type: 'success', 
        message: '✅ Registration successful! Thank you for registering for NCAT 2026.' 
      });
      
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        participationType: '',
        selectedCategory: '',
        paymentMethod: '',
        transactionId: '',
        amountPaid: '',
        paymentName: '',
      });
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: '❌ Registration failed. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus({ type: null, message: '' }), 5000);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Particle Background */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
        <div className="relative z-10 flex h-full flex-col items-center justify-center">
          <h1
            className="text-white font-extrabold text-center tracking-tight font-['Plus_Jakarta_Sans']
                       text-[12vw] md:text-[10vw] lg:text-[8rem] transition-colors duration-300"
          >
            Register
          </h1>
          <p className="text-[#f0abfc] text-center text-sm md:text-lg lg:text-xl font-light tracking-widest uppercase mt-4">
            Secure Your Spot at NCAT 2026
          </p>
        </div>
      </section>

      {/* Registration Form Section */}
      <div className="relative z-10 bg-black py-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Form Card */}
          <div className="bg-black/50 backdrop-blur-sm border border-[#44008b] rounded-2xl p-6 md:p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="form-group">
                <label className="block text-[#f0abfc] text-sm font-semibold mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.fullName ? 'border-red-500' : 'border-[#44008b]'
                  } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f0abfc] transition-colors`}
                />
                {errors.fullName && (
                  <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="block text-[#f0abfc] text-sm font-semibold mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.email ? 'border-red-500' : 'border-[#44008b]'
                  } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f0abfc] transition-colors`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="form-group">
                <label className="block text-[#f0abfc] text-sm font-semibold mb-2">
                  Phone Number (WhatsApp preferred) <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="03XXXXXXXXX"
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.phone ? 'border-red-500' : 'border-[#44008b]'
                  } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f0abfc] transition-colors`}
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Participation Type */}
              <div className="form-group">
                <label className="block text-[#f0abfc] text-sm font-semibold mb-2">
                  How would you like to participate? <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Audience', 'CTF', 'Gaming', 'Idea Pitching'].map((type) => (
                    <label
                      key={type}
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl cursor-pointer transition-all border ${
                        formData.participationType === type
                          ? 'bg-gradient-to-r from-[#44008b] to-[#9f45b0] border-[#f0abfc] shadow-lg'
                          : 'bg-black/50 border-[#44008b] hover:border-[#f0abfc]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="participationType"
                        value={type}
                        checked={formData.participationType === type}
                        onChange={() => handleRadioChange(type)}
                        className="hidden"
                      />
                      <span className="text-white text-sm">
                        {type === 'Audience' && '🎫'}
                        {type === 'CTF' && '🏆'}
                        {type === 'Gaming' && '🎮'}
                        {type === 'Idea Pitching' && '💡'}
                      </span>
                      <span className="text-white text-sm">{type}</span>
                    </label>
                  ))}
                </div>
                {errors.participationType && (
                  <p className="text-red-400 text-xs mt-1">{errors.participationType}</p>
                )}
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#44008b] to-transparent my-6"></div>

              {/* Selected Category */}
              <div className="form-group">
                <label className="block text-[#f0abfc] text-sm font-semibold mb-2">
                  Select Category <span className="text-red-400">*</span>
                </label>
                <select
                  name="selectedCategory"
                  value={formData.selectedCategory}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.selectedCategory ? 'border-red-500' : 'border-[#44008b]'
                  } rounded-xl text-white focus:outline-none focus:border-[#f0abfc] transition-colors`}
                >
                  <option value="" className="bg-black">Select Category</option>
                  {getCategoryOptions().map(option => (
                    <option key={option.value} value={option.value} className="bg-black">
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.selectedCategory && (
                  <p className="text-red-400 text-xs mt-1">{errors.selectedCategory}</p>
                )}
              </div>

              {/* Payment Method */}
              <div className="form-group">
                <label className="block text-[#f0abfc] text-sm font-semibold mb-2">
                  Payment Method <span className="text-red-400">*</span>
                </label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.paymentMethod ? 'border-red-500' : 'border-[#44008b]'
                  } rounded-xl text-white focus:outline-none focus:border-[#f0abfc] transition-colors`}
                >
                  <option value="" className="bg-black">Select Payment Method</option>
                  <option value="Bank Transfer" className="bg-black">🏦 Bank Transfer</option>
                  <option value="Jazzcash" className="bg-black">📱 Jazzcash</option>
                  <option value="Easypaisa" className="bg-black">📱 Easypaisa</option>
                </select>
                {errors.paymentMethod && (
                  <p className="text-red-400 text-xs mt-1">{errors.paymentMethod}</p>
                )}
              </div>

              {/* Transaction ID */}
              <div className="form-group">
                <label className="block text-[#f0abfc] text-sm font-semibold mb-2">
                  Transaction ID / Reference Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="transactionId"
                  value={formData.transactionId}
                  onChange={handleChange}
                  placeholder="Enter transaction ID"
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.transactionId ? 'border-red-500' : 'border-[#44008b]'
                  } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f0abfc] transition-colors`}
                />
                {errors.transactionId && (
                  <p className="text-red-400 text-xs mt-1">{errors.transactionId}</p>
                )}
              </div>

              {/* Amount Paid */}
              <div className="form-group">
                <label className="block text-[#f0abfc] text-sm font-semibold mb-2">
                  Amount Paid (PKR) <span className="text-red-400">*</span>
                </label>
                <input
                  type="number"
                  name="amountPaid"
                  value={formData.amountPaid}
                  onChange={handleChange}
                  placeholder="e.g., 2000"
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.amountPaid ? 'border-red-500' : 'border-[#44008b]'
                  } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f0abfc] transition-colors`}
                />
                {errors.amountPaid && (
                  <p className="text-red-400 text-xs mt-1">{errors.amountPaid}</p>
                )}
              </div>

              {/* Payment Name */}
              <div className="form-group">
                <label className="block text-[#f0abfc] text-sm font-semibold mb-2">
                  Name used for payment <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="paymentName"
                  value={formData.paymentName}
                  onChange={handleChange}
                  placeholder="Name on bank account / Jazzcash"
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.paymentName ? 'border-red-500' : 'border-[#44008b]'
                  } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f0abfc] transition-colors`}
                />
                {errors.paymentName && (
                  <p className="text-red-400 text-xs mt-1">{errors.paymentName}</p>
                )}
              </div>

              {/* Bank Details Info */}
              <div className="bg-gradient-to-r from-[#00076f]/20 to-[#44008b]/20 border border-[#44008b] rounded-xl p-4">
                <h4 className="text-[#f0abfc] font-semibold mb-2">🏦 Bank Account Details</h4>
                <p className="text-gray-300 text-sm">
                  <span className="text-white">Account Name:</span> YUNI (SMC-PRIVATE) LIMITED
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="text-white">Account No:</span> 0140-1010831162
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-gradient-to-r from-[#44008b] to-[#9f45b0] hover:from-[#00076f] hover:to-[#44008b] text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  'Register Now'
                )}
              </button>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-xl text-center ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/20 border border-green-500 text-green-300'
                      : 'bg-red-500/20 border border-red-500 text-red-300'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterPage;