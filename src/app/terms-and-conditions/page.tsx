import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Terms and Conditions | True Home Capital',
    description: 'Terms and Conditions for True Home Capital.',
};

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="pt-32 pb-20">
                <div className="container-width max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8">Terms and Conditions</h1>
                    <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>
                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Agreement to Terms</h2>
                        <p>By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for the agreement with any applicable local laws.</p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Use License</h2>
                        <p>Permission is granted to temporarily download one copy of the materials on True Home Capital's website for personal, non-commercial transitory viewing only.</p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Disclaimer</h2>
                        <p>The materials on True Home Capital's website are provided on an 'as is' basis. True Home Capital makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Limitations</h2>
                        <p>In no event shall True Home Capital or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on True Home Capital's website.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
