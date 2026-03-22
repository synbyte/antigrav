import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Privacy Policy | True Home Capital',
    description: 'Privacy Policy for True Home Capital.',
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="pt-32 pb-20">
                <div className="container-width max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
                    <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>
                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
                        <p>We collect personal information that you provide to us, such as your name, property address, email address, and phone number when you fill out our contact form.</p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
                        <p>We use the information we collect to operate and maintain our website, send you information, respond to your inquiries, and provide a cash offer for your property.</p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Sharing Your Information</h2>
                        <p>We do not share your personal information with third parties without your consent, except as required by law or to protect our rights.</p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Security</h2>
                        <p>We use reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
