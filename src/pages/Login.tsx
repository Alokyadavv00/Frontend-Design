import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, Star, Eye, EyeOff } from "lucide-react";
import { FaApple, FaMeta } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/dashboard");
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#0B1115] text-white font-sans">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[#0B1115]" />

                {/* teal */}
                <div className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full 
          bg-[radial-gradient(circle,rgba(20,168,142,0.18)_0%,transparent_60%)] blur-[90px]" />

                {/* orange */}
                <div className="absolute bottom-[-40%] right-[-20%] w-[900px] h-[900px] rounded-full 
          bg-[radial-gradient(circle,rgba(255,110,40,0.45)_0%,transparent_65%)] blur-[120px]" />
            </div>

            {/* Logo */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#14A88E] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
                <span className="text-lg font-semibold tracking-tight">aps</span>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto flex min-h-screen">
                {/* Left content */}
                <div className="hidden lg:flex w-1/2 flex-col justify-center px-20">
                    <h1 className="text-[52px] leading-[1.1] font-bold mb-12 tracking-tight text-white whitespace-nowrap">
                        Expert level Cybersecurity<br />
                        in <span className="text-[#14A88E]">hours</span> not weeks.
                    </h1>

                    <h3 className="text-sm font-semibold mb-5">What’s included</h3>

                    <ul className="space-y-4 max-w-[440px] text-[#D1D5DB]">
                        {[
                            "Effortlessly spider and map targets to uncover hidden security flaws",
                            "Deliver high-quality, validated findings in hours, not weeks.",
                            "Generate professional, enterprise-grade security reports automatically.",
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm leading-relaxed">
                                <Check className="text-[#14A88E] w-4 h-4 mt-1 shrink-0" strokeWidth={2.5} />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-16">
                        <div className="flex items-center gap-2 mb-1">
                            <Star className="w-4 h-4 fill-[#00B67A] text-[#00B67A]" />
                            <span className="font-semibold text-sm">Trustpilot</span>
                        </div>
                        <p className="text-sm font-semibold">
                            Rated 4.5/5.0{" "}
                            <span className="text-[#9CA3AF] font-normal">(100k+ reviews)</span>
                        </p>
                    </div>
                </div>

                {/* Right card */}
                <div className="flex flex-1 items-center justify-center px-4 sm:px-6 pt-20 lg:pt-0 pb-10 lg:pb-0">
                    <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-2xl p-6 sm:p-10 text-slate-900">
                        <div className="text-center mb-8">
                            <h2 className="text-[32px] font-bold text-slate-800 mb-1">Sign up</h2>
                            <p className="text-sm text-slate-500">
                                Already have an account?{" "}
                                <Link to="/login" className="text-[#14A88E] font-medium">
                                    Log in
                                </Link>
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {["First name*", "Last name*", "Email address*"].map((ph, i) => (
                                <input
                                    key={i}
                                    required
                                    type={ph.includes("Email") ? "email" : "text"}
                                    placeholder={ph}
                                    className="w-full h-[46px] rounded-lg border border-[#E5E7EB] px-4 text-sm 
                    placeholder:text-[#9CA3AF] focus:border-[#14A88E] focus:ring-[#14A88E]/20"
                                />
                            ))}

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password (8+ characters)*"
                                    required
                                    className="w-full h-[46px] rounded-lg border border-[#E5E7EB] px-4 pr-12 text-sm
                    placeholder:text-[#9CA3AF] focus:border-[#14A88E] focus:ring-[#14A88E]/20"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2"
                                >
                                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                                </button>
                            </div>

                            <div className="flex gap-3 text-sm text-slate-700 leading-snug pt-2">
                                <input type="checkbox" required className="mt-1 accent-[#14A88E] cursor-pointer" />
                                <span>
                                    I agree to Aps’s{" "}
                                    <Link to="#" className="text-blue-600 font-medium hover:underline">Terms & Conditions</Link>{" "}
                                    and acknowledge the{" "}
                                    <Link to="#" className="text-blue-600 font-medium hover:underline">Privacy Policy</Link>
                                </span>
                            </div>

                            <button
                                type="submit"
                                className="w-full h-[46px] bg-[#14A88E] text-white rounded-full font-semibold text-sm
                  hover:bg-[#0ea28a] transition"
                            >
                                Create account
                            </button>
                        </form>

                        {/* Social buttons */}
                        <div className="mt-6 flex gap-3">
                            <button className="flex-1 h-[52px] rounded-full bg-black text-white hover:bg-slate-900 transition-colors flex items-center justify-center">
                                <FaApple size={22} className="mb-0.5" />
                            </button>
                            <button className="flex-1 h-[52px] rounded-full bg-[#FAEDE7] hover:bg-[#f2e0d8] transition-colors flex items-center justify-center">
                                <FcGoogle size={24} />
                            </button>
                            <button className="flex-1 h-[52px] rounded-full bg-[#4068D2] hover:bg-[#3459ba] transition-colors flex items-center justify-center">
                                <FaMeta size={22} className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}